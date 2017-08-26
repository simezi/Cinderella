<template>
  <v-app dark>
    <v-toolbar dark>
      <v-toolbar-title>cinderella</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.text">
        <v-btn :to="item.text" flat>{{ item.text }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-container fluid>
        <div id="app">
          <router-view></router-view>
        </div>
      </v-container>
    </main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>

  export default {
    name: 'app',
    data: () => ({
      items: [
        { text: 'song' },
        { text: 'idol' },
      ],
    }),
  }
  ;
</script>

<style module lang="postcss">
</style>
