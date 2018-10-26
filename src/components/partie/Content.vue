<template>
    <div class="content-wrapper" style="min-height: 868px;">
        <section class="content-header">
            <h1>
                <button class="btn btn-danger" v-on:click="backAccueil"><i class="fa fa-arrow-left"></i> Quitter la partie</button>
            </h1>
        </section>
        
    </div>
</template>

<script>
import router from '../../router';

export default {
  name: 'Content',
  data(){
      return {
          utilisateur : JSON.parse(sessionStorage.getItem('utilisateur'))
      }
  },
  created(){
  },
  methods : {
      backAccueil(){
          router.push({name: "Accueil", params:{id : this.utilisateur.id }})
      }
  }
}
</script>
