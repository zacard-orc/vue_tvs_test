import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Boom from '@/components/Boom';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/boom',
      name: 'Boom',
      component: Boom,
    },
  ],
});
