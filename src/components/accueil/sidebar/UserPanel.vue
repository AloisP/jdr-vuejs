<template>
    <div class="user-panel">
        <div class="float-left image">
          <img src="@/assets/generic-user.png" class="img-circle" alt="User Image">
        </div>
        <div class="float-left info">Bienvenue <br><strong>{{utilisateur.pseudo}}</strong></div>
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

