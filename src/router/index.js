import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/accueil/Accueil'
import Connexion from '@/components/connexion/Connexion'
import Inscription from '@/components/inscription/Inscription'
import Partie from '@/components/partie/Partie'
import Informations from '@/components/informations/Informations'
import Nouvellepartie from '@/components/nouvellepartie/Nouvellepartie'
import Contactjoueur from '@/components/contactjoueur/Contactjoueur'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accueil',
      name: 'Accueil',
      component: Accueil,
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
      path: '/partie',
      name: 'Partie',
       component: Partie
    },
    {
      path: '/informations',
      name: 'Informations',
       component: Informations
    },
    {
      path: '/nouvellepartie',
      name: 'Nouvellepartie',
       component: Nouvellepartie
    },
    {
      path: '/contactjoueur',
      name: 'Contactjoueur',
       component: Contactjoueur
    }
  ]
})
