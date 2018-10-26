import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/accueil/Accueil'
import Connexion from '@/components/connexion/Connexion'
import Inscription from '@/components/inscription/Inscription'
import Partie from '@/components/partie/Partie'

Vue.use(Router)

export default new Router({
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
       component: Inscription
    },
    {
      path: '/partie/:id',
      name: 'Partie',
       component: Partie
    }
  ]
})
