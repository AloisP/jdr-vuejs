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
    <b-container>
        <div v-for="d in info" :key="d.id">{{d}}</div>
    </b-container>
  </div>
</template>


<script>
import json from '../../api/utilisateur.json';
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
      info: json
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault();
        fb.userCollection.get().then((snapshot) =>{
          snapshot.docs.forEach(doc => {
            console.log(doc.data().mail + ' -- ' + doc.data().password);
            if(this.form.email == doc.data().mail && this.form.password == doc.data().password)
            {
              console.log('ok ' + this.form.email);
            }
          });
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
//console.log(json);
</script>

<style>
  #form-connexion{
    margin-top: 17rem;
  }
</style>