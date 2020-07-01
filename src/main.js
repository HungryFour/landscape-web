import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.productionTip = false;

import Index from './pages/Index'
import TVC from './pages/Tvc'
import Animation from './pages/Animation'
import Activity from './pages/Activity'
import AboutUs from './pages/AboutUs'
import News from './pages/News'

const routes = [
  {
    path: '/home',
    component: Index,
    meta: {
      keepAlive: true,
      title: "popmart"
    },
  },
  {
    path: '/tvc',
    component: TVC,
    meta: {
      keepAlive: true,
      title: "popmart"
    },
  },
  {
    path: '/animation',
    component: Animation,
    meta: {
      keepAlive: true,
      title: "popmart"
    },
  },
  {
    path: '/activity',
    component: Activity,
    meta: {
      keepAlive: true,
      title: "popmart"
    },
  },
  {
    path: '/aboutUs',
    component: AboutUs,
    meta: {
      keepAlive: true,
      title: "popmart"
    },
  },
  {
    path: '/news',
    component: News,
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
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
