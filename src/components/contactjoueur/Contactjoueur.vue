<template>
    <div class="wrapper">
       <Navbar />
       <Sidebar />
       <Content />
       <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/accueil/Navbar'
import Content from './Content'
import Footer from '@/components/accueil/Footer'
import Sidebar from '@/components/accueil/sidebar/Sidebar'
import router from '../../router';   
const fb = require('../../firebaseConfig.js')

export default {
  name: 'Contactjoueur',
  data(){
      return {
        
      }
  },
  methods : {

  },
  components: {
      Navbar, Sidebar, Content, Footer
  }
}
</script>