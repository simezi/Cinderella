<template lang="pug">
  v-app(light)
    v-toolbar(dark)
      v-toolbar-title cinderella
      v-spacer
      v-toolbar-items(v-for="item in items" v-bind:key="item.text")
        v-btn(:to="'/' + item.text" flat) {{ item.text }}
    main
    v-container(fluid).pa-1
      div#app
        router-view
    v-footer
</template>

<script>

  export default {
    name: 'app',
    data: () => ({
      items: [
        { text: 'top' },
        { text: 'songs' },
        { text: 'idol' },
      ],
    }),
  };
</script>

<style>
  /* material-iconsがうまくあたらないのでワークアラウンド*/
  /* @see: https://github.com/FountainJS/generator-fountain-webapp/issues/109*/
  /* fallback */
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v17/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
  }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  .nowrap {
    white-space: nowrap;
  }
</style>
