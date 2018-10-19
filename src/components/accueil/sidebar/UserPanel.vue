<template>
    <div class="user-panel">
        <div class="float-left image">
          <img src="@/assets/generic-user.png" class="img-circle" alt="User Image">
        </div>
        <div class="float-left welcome">
            Bienvenue <br><strong>Alois Pin</strong>
        </div>
        {{test}}
    </div>
</template>


<script>
export default {
  name: 'UserPanel',
  props : ["utilisateur"],
  data() {
      return {
          test : this.utilisateur
      }
  },
  computed: {
    fullname : function(){
        return this.utilisateur.nom + ' ' + this.utilisateur.prenom;
    }
  }
}
</script>

<style>
.img-circle{
    width: 100%;
    max-width: 45px;
    height: auto;
    border-radius: 50%;
}

.welcome{
    padding: 5px 5px 5px 15px;
    line-height: 1;
    position: absolute;
    left: 55px; 
}
</style>

