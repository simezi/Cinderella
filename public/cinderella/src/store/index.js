/* eslint-disable no-param-reassign */
import Vuex from 'vuex';
import Vue from 'vue';
import { getSongs } from '@/api/song/index';
import { getIdols } from '@/api/idol/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    songs: [],
    songsPagination: {
      descending: false,
      page: 1,
      rowsPerPage: 30,
      sortBy: '',
      totalItems: 0,
    },
    songsSearchKey: '',
    difficultySelected: 'MASTER',
    idols: [],
  },

  mutations: {
    setSongs(state, songs) {
      // eslint-disable-next-line no-param-reassign
      state.songs = songs;
    },

    setSongsPagination(state, pagination) {
      state.songsPagination = pagination;
    },

    setSongsSearchKey(state, keyword) {
      state.songsSearchKey = keyword;
    },

    setSongsDifficulty(state, difficulty) {
      state.difficultySelected = difficulty;
    },

    setIdols(state, idols) {
      // eslint-disable-next-line no-param-reassign
      state.idols = idols;
    },
  },

  actions: {
    async fetchSongs(context) {
      if (context.state.songs.length === 0) {
        context.commit('setSongs', await getSongs());
      }
    },

    async fetchIdols(context) {
      if (context.state.idols.length === 0) {
        context.commit('setIdols', await getIdols());
      }
    },
  },
});

export default store;
