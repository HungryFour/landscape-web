import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false;

import Index from './components/Index'

const routes = [
  {
    path: '/home',
    component: Index,
    meta: {
      keepAlive: true,
      title: "popmart"
    },
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.fullPath == '/') {
    next('/home');
    return;
  }
  console.log("----wo zou l me");
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
