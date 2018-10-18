import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/accueil/Accueil'
import Connexion from '@/components/connexion/Connexion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accueil',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    }
  ]
})
