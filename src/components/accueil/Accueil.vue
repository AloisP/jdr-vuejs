<template>
    <div class="wrapper">
       <Navbar />
       <Sidebar  v-bind:utilisateur="utilisateur" />
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
      error : null,
      user_id : null,
      utilisateur : null
    }
  },
  mounted(){
    this.getUser()
  },
  watch: {
    '$route': 'getUser'
  },
  methods: {
    getUser() {
      this.utilisateur =  utilisateurs.find(u => {
          return u.id === this.$route.params.id;
      })
    }
  },
  components: {
      Navbar, Sidebar, Content
  }
}
</script>
