<template lang="pug">
  div
    span song
    div(v-for="song in songs")
      span {{song.title}}
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    data: () => ({}),

    computed: mapState({
      songs: state => state.songs,
    }),

    mounted() {
      this.$store.dispatch('fetchSongs');
    },
  };

</script>
<style lang="postcss"></style>
