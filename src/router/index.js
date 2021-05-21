import Vue from 'vue';
import Router from 'vue-router';
import index from '../components/index';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);
NProgress.configure({ showSpinner: false }); //我这里只关闭进度环

const router = new Router({
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
    }, {
      name: 'json',
      path: '/index/json',
      component: () => import('../components/json/index')
    }, {
      name: 'formatter',
      path: '/index/formatter',
      component: () => import('../components/formatter/index')
    }],
    component: index
  }, {
    path: '/',
    redirect: 'index'
  }]
});

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router;