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
  name: 'Accueil',
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

#de {
    width: 100px;
    height: 100px;
    font-size: 25px;
}
#content-de{
    height: 250px;   
    display: flex;
    align-items: center;
    justify-content: center;
}

.spin-on{
    animation : fa-spin 0.1s infinite linear;
}

#wrapper-partie{
    width: calc(100% - 300px)
}
</style>

