<template>
  <v-app>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar></v-toolbar>
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
};
</script>

<style module lang="postcss">
</style>
