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
import Sidebar from './Sidebar'
import Footer from '@/components/accueil/Footer'

export default {
  name: 'Accueil',
  data () {
    return {
      error : null,
      user_id : null
    }
  },
  components: {
      Navbar, Content, Footer, Sidebar
  }
}
</script>

