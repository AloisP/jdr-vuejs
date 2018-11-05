<template>
    <ul class="sidebar-menu tree">
        <li class="header"><i class="fa fa-home"></i> Menu</li>
        <li>
            <a href="#">
                <i class="fa fa-gamepad"></i> <span>Nouvelle partie</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-users"></i> <span>Contact</span>
            </a>
        </li>
        <li>
            <router-link to="/informations">
                <i class="fa fa-info-circle"></i> <span>Mes informations</span>
            </router-link>
        </li>
        <li>
            <a v-on:click="deconnexion">
                <i class="fa fa-power-off"></i> <span>Déconnexion</span>
            </a>
        </li>
    </ul>
</template>

<script> 
const fb = require('../../../firebaseConfig.js')
export default {
    name : "Menu",
    data(){
      return {
        idUser : parseInt(sessionStorage.getItem('idUser')),
      }
  },
    methods : {
        deconnexion(){
            fb.db.ref('user').orderByChild('id').equalTo(this.idUser).once("value",function(datas){
                datas.forEach(function (childSnap){
                    fb.db.ref('user/' + childSnap.key).update({
                        online: false
                    })
                })
            })
            sessionStorage.clear();
            this.$router.push('/')
        }
    }
}
</script>