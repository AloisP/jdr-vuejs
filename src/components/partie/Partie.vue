<template>
    <div class="wrapper">
       <Navbar />
       <Content />
       <Sidebar />
       <div class="control-sidebar-bg"></div>
    </div>
</template>

<script>
import Navbar from '@/components/accueil/Navbar'
import Content from './Content'
import Footer from '@/components/accueil/Footer'
import Sidebar from './right-sidebar/Sidebar'

export default {
  name: 'Partie',
  data () {
    return {
      error : null,
      user_id : null,
      partie : null,
      est_mj : true
    }
  },
  methods : {

  },
  components: {
      Navbar, Content, Sidebar, Footer
  }
}
</script>

<style>
.control-sidebar-bg, .control-sidebar {
  width: 300px
}

.direct-chat-messages{
  height: 600px ;
}
</style>

