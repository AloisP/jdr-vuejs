<template>
    <div class="user-panel">
        <div class="float-left image">
          <img src="@/assets/generic-user.png" class="img-circle" alt="User Image">
        </div>
<<<<<<< HEAD
        <div class="float-left info">Bienvenue <br><strong>{{utilisateur.pseudo}}</strong></div>
=======
        <div class="float-left welcome">
            Bienvenue <br><strong>{{utilisateur.prenom}} Pin</strong>
        </div>
        {{test}}
>>>>>>> 55a798262564e0b223915cf3d9be4a851a2665a8
    </div>
</template>


<script> 
export default {
  name: 'UserPanel',
  props : ["utilisateur"]
}
</script>

<style>

</style>

