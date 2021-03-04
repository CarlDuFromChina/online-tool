import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index';

Vue.use(Router);

export default new Router({
  routes: [{
    name: 'index',
    path: '/index',
    redirect: '/index/uuid',
    children: [{
      name: 'encrypt',
      path: '/index/encrypt',
      component: () => import('../components/encrypt/index')
    }, {
      name: 'uuid',
      path: '/index/uuid',
      component: () => import('../components/uuid/index')
    }],
    component: index
  }, {
    path: '/',
    redirect: 'index'
  }]
});
