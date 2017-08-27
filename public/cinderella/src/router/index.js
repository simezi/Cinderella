import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/components/top';
import Song from '@/components/songs/index';
import Idol from '@/components/idol/index';

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
      component: Song,
    },
    {
      path: '/idol',
      name: 'idol',
      component: Idol,
    },
  ],
});
