<template>
    <div class="content-wrapper" style="min-height: 868px;">
        <b-container>
            <h1 style="margin-bottom: 2rem">
                <i class="fa fa-users"></i> Contact
            </h1>
            
            <div class="box box-solid">
                <div class="box-header with-border">
                    Liste de vos contacts
                </div>
                <div class="box-body no-padding">
                    <ul class="users-list clearfix">
                        <li v-for="user in users" :key="user.id">
                            <img :src="require('@/assets/'+user.avatar)" class="img-circle" alt="User Image">
                            <span>{{user.pseudo}}</span>
                        </li>
                    </ul>
                </div> 
            </div>           
        </b-container>
    </div>
</template>

<script>
import router from '../../router';
const fb = require('../../firebaseConfig.js');

export default {
    name: 'Content',
    data(){
        return {
            users: []
        } 
    },
    mounted(){
        var users = [];
        fb.db.ref('user').once('value', function(snapshot){
          snapshot.forEach(function (childSnap){
            users.push(childSnap.val());

          })
        })
        this.users = users;
        console.log(users);
    }
}
</script>

<style>
.titre-page{
  margin: 3rem 0;
}
ul{
    list-style-type: none;
}
img{
    max-width: 50%!important
}

</style>