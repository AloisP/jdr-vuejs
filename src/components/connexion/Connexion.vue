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
            <b-button type="reset" variant="success">Inscription</b-button>
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
        console.log(this.form.email);
        json.forEach(element => {
            if (element.mail == this.form.email && element.password == this.form.password){
                router.push({name:'Accueil', params: {id: element.id}, props: {name: element.pseudo, mail:element.mail }} );
            }
        });
    },
    onReset (evt) {
      evt.preventDefault();

    }
  },
}
console.log(json);
</script>

<style>
  #form-connexion{
    margin-top: 17rem;
  }
</style>