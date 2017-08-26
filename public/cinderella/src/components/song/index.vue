<template lang="pug">
  div
    v-text-field(
      v-model="search",
      append-icon="search",
      single-line hide-details label="曲名")
    v-data-table(:headers = "headers",
    :items = "songs",
    :search="search",
    :pagination.sync="pagination")
      template(slot="items" scope="props")
        td {{props.item.title}}
        td {{props.item.type}}
        td {{props.item.bpm}}

</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data: () => ({
      headers: [
        { text: 'title', align: 'left', value: 'title' },
        { text: 'type', align: 'left', value: 'type' },
        { text: 'bpm', align: 'left', value: 'bpm' },
      ],
      search: '',
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 30,
        sortBy: '',
        totalItems: 0,
      },
    }),

    computed: {
      ...mapState({
        songs: state => state.songs,
      }),
    },

    methods: {
      difficulty(song, rank) {
        switch (rank) {
          case 'debut':
            return song.difficulties[0];
          case 'regular':
            return song.difficulties[1];
          case 'pro':
            return song.difficulties[2];
          case 'master':
            return song.difficulties[3];
          case 'masterPlusLegacy':
            return song.difficulties.length === 6 ? song.difficulties[4] : null;
          case 'masterPlus':
            return song.difficulties.length === 6 ? song.difficulties[5] : song.difficulties[4];
          default:
            return null;
        }
      },
    },

    mounted() {
      this.$store.dispatch('fetchSongs');
    },
  };

</script>
<style lang="postcss"></style>
