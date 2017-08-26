// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import firebase from 'firebase';
import App from './App';
import router from './router';

import('vuetify/dist/vuetify.min.css');


const config = {
  // apiKey: process.env.firebaseApiKey,
  apiKey: 'AIzaSyByLHuxZDx-S2XRSMNLBki_IlhiAWdzetw',
  authDomain: 'cinderella-c117d.firebaseapp.com',
  databaseURL: 'https://cinderella-c117d.firebaseio.com',
  storageBucket: 'cinderella-c117d.appspot.com',
};
firebase.initializeApp(config);
Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
