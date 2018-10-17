<template>
    <div>
       <Navbar />
       <b-row>
           <b-col cols="4">
                <Sidebar />
           </b-col>
           <b-col cols="8">
                <Content />
            </b-col>
        </b-row>
    </div>
</template>


<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  name: 'Accueil',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
      Navbar, Sidebar
  }
}
</script>