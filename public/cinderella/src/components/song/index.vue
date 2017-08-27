<template lang="pug">
  div
    v-breadcrumbs(icons divider="forward")
      v-breadcrumbs-item
        router-link(to="/songs") 楽曲一覧
      v-breadcrumbs-item {{$route.params.songName}}
    div(v-if="song")
      span {{$route.params.songName}}
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
</template>
<script>
  import { mapState } from 'vuex';

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
      };
    },
    computed: {
      ...mapState({
        song(state) {
          return state.songs.filter(song => song.title === this.$route.params.songName)[0];
        },
      }),
    },
    created() {
      this.$store.dispatch('fetchSongs');
    },
  };
</script>
