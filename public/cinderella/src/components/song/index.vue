<template lang="pug">
  div
    span song
    div(v-for="song in songs")
      span {{song.title}}
</template>
<script>
  import getSongs from '@/api/song/index';

  export default {
    data: () => ({
      songs: [],
    }),

    async mounted() {
      this.$data.songs = await getSongs();
    },
  };

</script>
<style lang="postcss"></style>
