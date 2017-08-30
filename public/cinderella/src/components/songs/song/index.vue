<template lang="pug">
  div
    v-breadcrumbs(icons divider="forward")
      v-breadcrumbs-item
        router-link(to="/songs") 楽曲一覧
      v-breadcrumbs-item {{songName}}
    div(v-if="song")
      span {{songName}}
      v-data-table(:headers = "headers",
      :items = "song.difficulties",
      hide-actions,
      :pagination.sync="pagination")
        template(slot="items" scope="props")
          tr
            td {{props.item.rank}}
            td(align="right") {{props.item.level}}
            td(align="right") {{props.item.notes}}
            td(align="right") {{props.item.density}}
            td(align="right") {{props.item.stamina}}
      span 歌：
      div(v-if="songIdols" v-for="(_, idol) of songIdols.idols")
        router-link(:to="`/idols/${encodeURIComponent(idol)}`") {{idol}}

</template>
<script>
  import { mapState } from 'vuex';
  import { getSongIdols } from '@/api/song/index';

  export default {
    data() {
      return {
        headers: [
          { text: 'rank', align: 'left', value: 'rank', sortable: false },
          { text: 'level', align: 'right', value: 'lebel', sortable: false },
          { text: 'notes', align: 'right', value: 'notes', sortable: false },
          { text: '密度', align: 'right', value: 'density', sortable: false },
          { text: 'stamina', align: 'right', value: 'stamina', sortable: false },
        ],
        pagination: {
          sortBy: 'level',
          rowsPerPage: 6,
        },
        songIdols: [],
      };
    },
    computed: {
      ...mapState({
        song(state) {
          return state.songs.filter(song => song.title === this.songName)[0];
        },
      }),
      songName() {
        return decodeURIComponent(this.$route.params.songName);
      },
    },
    methods: {
      async getSongIdols(song) {
        return getSongIdols(song);
      },
    },
    async created() {
      this.$store.dispatch('fetchSongs');
      this.songIdols = await getSongIdols(this.songName);
    },
  };
</script>
