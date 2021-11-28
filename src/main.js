// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { encrypt, uuid, http, common } from '@sixpence/web-core';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.prototype.$bus = new Vue();
window.sp = Object.assign(window.sp || {}, encrypt, uuid, http, common);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
