<template>
    <div class="user-panel">
        <div class="pull-left image">
          <img :src="require('@/assets/'+avatarUser)" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
            <p>Bienvenue </p><p>{{pseudoUser}} </p>
        </div>
    </div>
</template>

<script> 
export default {
  name: 'UserPanel',
  data(){
      return {
          pseudoUser : sessionStorage.getItem('pseudoUser'),
          avatarUser : sessionStorage.getItem('avatarUser') ? sessionStorage.getItem('avatarUser') : "generic-user.png"
      }
  }
}
</script>