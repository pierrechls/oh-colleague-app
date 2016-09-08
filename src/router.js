import Vue from 'vue'
import App from './App'
import Home from 'components/Home'
import Bar from 'components/Bar'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* eslint-disable no-new */
const router = new VueRouter({
  transitionOnLoad: true
})

router.map({
  '/': {
    name: 'App',
    component: App,
    subRoutes: {
      '/home': {
        name: 'Home',
        component: Home
      },
      '/bar': {
        name: 'Bar',
        component: Bar
      }
    }
  }
})

export default router
