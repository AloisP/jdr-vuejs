import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/accueil/Accueil'
import Connexion from '@/components/connexion/Connexion'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/accueil/:id',
      name: 'Accueil',
      component: Accueil,
      props: {
        name:"", mail:""
      }
    },
    {
      path: '/',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      // component: Inscription
    }
  ]
})
