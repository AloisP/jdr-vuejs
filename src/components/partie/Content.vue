<template>
    <div class="content-wrapper" style="min-height: 868px;margin-left:0px" id="wrapper-partie">
        <section class="content-header ">
            <h1>
                <button class="btn btn-danger" v-on:click="backAccueil"><i class="fa fa-arrow-left"></i> Quitter la partie</button>
                <span>
                {{titrePartie}}
                </span>
            </h1>
        </section>
        <section class="content">

        </section>
    </div>
</template>

<script>
import router from '../../router';

export default {
  name: 'Content',
  data(){
      return {
          idUser : parseInt(sessionStorage.getItem('idUser')),
          idPartie : parseInt(sessionStorage.getItem('idPartie')),
          titrePartie : sessionStorage.getItem('titrePartie'),
          idMj : parseInt(sessionStorage.getItem('idMj'))
      }
  },
  created(){

  },
  methods : {
      backAccueil(){
          router.push({name: "Accueil"})
      }
  }
}
</script>

<style>

</style>
