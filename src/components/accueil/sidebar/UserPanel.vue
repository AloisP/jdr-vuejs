<template>
    <div class="user-panel">
        <div class="pull-left image">
          <img src="@/assets/generic-user.png" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
            Bienvenue <br><strong>{{utilisateur !== null ?  utilisateur.pseudo : ""}} </strong>
        </div>
    </div>
</template>

<script> 
export default {
  name: 'UserPanel',
  data(){
      return {
          utilisateur : JSON.parse(sessionStorage.getItem('utilisateur'))
      }
  }
}
</script>