import Vue from 'vue'
import App from './App'
import Home from 'components/Home'
import Appelation from 'components/Appelation'
import Vocabulaire from 'components/Vocabulaire'
import Vision from 'components/Vision'
import Musique from 'components/Musique'
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
      '/appelation': {
        name: 'Appelation',
        component: Appelation
      },
      '/vocabulaire': {
        name: 'Vocabulaire',
        component: Vocabulaire
      },
      '/vision': {
        name: 'Vision',
        component: Vision
      },
      '/musique': {
        name: 'Musique',
        component: Musique
      }
    }
  }
})

export default router
