import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/top';
import Songs from '@/components/songs/index';
import Song from '@/components/songs/song/index';
import Idols from '@/components/idols/index';
import Idol from '@/components/idols/idol/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/(top)?',
      name: 'top',
      component: Top,
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    },
    {
      path: '/songs/:songName',
      name: 'song',
      component: Song,
    },
    {
      path: '/idols',
      name: 'idols',
      component: Idols,
    },
    {
      path: '/idols/:idolName',
      name: 'idol',
      component: Idol,
    },
  ],
});
