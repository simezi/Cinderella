import Vuex from 'vuex';
import Vue from 'vue';
import getSongs from '@/api/song/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    songs: [],
  },

  mutations: {
    setSongs(state, songs) {
      // eslint-disable-next-line no-param-reassign
      state.songs = songs;
    },
  },

  actions: {
    async fetchSongs(context) {
      if (context.state.songs.length === 0) {
        context.commit('setSongs', await getSongs());
      }
    },
  },
});

export default store;
