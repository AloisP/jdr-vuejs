<template>
    <div class="wrapper">
       <Navbar />
       <Sidebar />
       <Content />
       <Footer />
    </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './sidebar/Sidebar'
import Content from './Content'
import Footer from './Footer'
import router from '../../router';   
const fb = require('../../firebaseConfig.js')

export default {
  name: 'Accueil',
  data(){
      return {
          idUtilisateur : sessionStorage.getItem('idUser')
      }
  },
  created() {
      this.allowUser()
  },
  methods : {
      allowUser : function(){
        if(this.idUtilisateur === null){
             alert("Vous n'etes pas autorisé");
             this.$router.push('/')
        }
      }
  },
  components: {
      Navbar, Sidebar, Content, Footer
  }
}
</script>

<style>
.main-footer{
  margin-left : 230px
}
.content-wrapper{
  margin-left : 230px
}

</style>
