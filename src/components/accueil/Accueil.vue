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
      user_id : null,
      utilisateur : null
    }
  },
  created() {
    this.user_id = this.$route.params.id;
  },
  mounted(){
    this.utilisateur =  utilisateurs.find(u => {
        return u.id === this.user_id;
      })
  },
  components: {
      Navbar, Sidebar, Content
  }
}
</script>
