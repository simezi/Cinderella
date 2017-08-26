import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/top';
import Song from '@/components/song/index';
import Idol from '@/components/idol/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top,
    },
    {
      path: '/song',
      name: 'song',
      component: Song,
    },
    {
      path: '/idol',
      name: 'idol',
      component: Idol,
    },
  ],
});
