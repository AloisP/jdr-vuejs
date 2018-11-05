<template>
  <div id="form-connexion">
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col></b-col>
        <b-col cols="5">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="email"
                          label="Login"
                          label-for="email">
              <b-form-input id="email"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Ex: abcde@fghij.com">
              </b-form-input>
            </b-form-group>
            <b-form-group id="password"
                          label="Mot de Passe"
                          label-for="password">
              <b-form-input id="password"
                            type="password"
                            required
                            v-model="form.password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Se connecter</b-button>
            <b-button type="button" variant="success" v-on:click="goInscription">Inscription</b-button>
          </b-form>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import router from '../../router';
const fb = require('../../firebaseConfig.js')

export default {
  name:'Connexion',
  data () {
    return {
      form: {
        email: '',
        password: '',
        checked: []
      },
      show: true,
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault();
        const mail = this.form.email;
        const password = this.form.password;
        fb.db.ref('user').once('value', function(snapshot){
          snapshot.forEach(function (childSnap){
              if(childSnap.val().mail == mail && childSnap.val().password == password){
                sessionStorage.setItem('idUser',childSnap.val().id);
                sessionStorage.setItem('pseudoUser',childSnap.val().pseudo);
                sessionStorage.setItem('mailUser',childSnap.val().mail);
                sessionStorage.setItem('avatarUser',childSnap.val().avatar);
                fb.db.ref('user/' + childSnap.key).update({
                  online: true
                })
               router.push({name:'Accueil'});
                return false;
              }
          })
        })
    },
    onReset (evt) {
      evt.preventDefault();
    },
    goInscription(){
      router.push({name:'Inscription'});
    }
  }
}
</script>

<style>
  #form-connexion{
    margin-top: 17rem;
  }
</style>