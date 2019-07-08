import Vue from 'vue'
import Router from 'vue-router'
import vueg from 'vueg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/main/index.vue')
    },
    {
      path: '/login',
      component: () => import('./views/login/login.vue')
    },
    {
      path: '/register',
      component: () => import('./views/login/register.vue')
    }
  ]
})

Vue.use(vueg, new Router())
