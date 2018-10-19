<template>
    <div>
       <Navbar />
       <Sidebar  v-bind:utilisateur="utilisateur"/>
       <Content  />
    </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './sidebar/Sidebar'
import Content from './Content'

import utilisateurs from '../../api/utilisateur.json'

export default {
  name: 'Accueil',
  data () {
    return {
      utilisateur : utilisateurs.find(u => {
        return u.login === 'Alois';
      })
    }
  },
  components: {
      Navbar, Sidebar, Content
  }
}
</script>
