<template lang="pug">
  div
    v-data-table(:headers = "headers",
    :items = "songs",
    :search="search",
    :pagination.sync="pagination").elevation-1
      template(slot="items" scope="props")
        td {{props.item.title}}
        td {{props.item.bpm}}

</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data: () => ({
      headers: [
        { text: 'title', align: 'left', value: 'title' },
        { text: 'bpm', align: 'left', value: 'bpm' },
      ],
      search: '',
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 20,
        sortBy: '',
        totalItems: 0,
      },
    }),

    computed: {
      ...mapState({
        songs: state => state.songs,
      }),
    },

    mounted() {
      this.$store.dispatch('fetchSongs');
    },
  };

</script>
<style lang="postcss"></style>
