import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home.vue'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/tvc',
    name: 'tvc',
    component: () => import('../views/tvc.vue')
  },
  {
    path: '/animate',
    name: 'animate',
    component: () => import('../views/animate.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/new_detail',
    name: 'new_detail',
    component: () => import('../views/new_detail.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/team.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
