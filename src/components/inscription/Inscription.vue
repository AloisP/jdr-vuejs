<template>
    <div id="form-inscription">
        <b-container>
            <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="pseudo"
                            label="Pseudo"
                            label-for="pseudo"
                            :invalid-feedback="invalidPseudo">
                    <b-form-input id="pseudo"
                                    type="text"
                                    v-model="form.pseudo"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group id="mail"
                            label="Email"
                            label-for="mail"
                            :invalid-feedback="invalidMail">
                    <b-form-input id="mail"
                                    type="email"
                                    required
                                    v-model="form.mail">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="password"
                            label="Mot de Passe"
                            label-for="password"
                            :invalid-feedback="invalidPassword"
                            :valid-feedback="validPassword"
                            :state="statePassword">
                    <b-form-input id="password"
                                    type="password"
                                    required
                                    v-model="form.password">
                    </b-form-input>
                </b-form-group>
                <b-form-group id="password2"
                            label="Confirmation"
                            label-for="password2"
                            :invalid-feedback="invalidPassword2"
                            :valid-feedback="validPassword2"
                            :state="statePassword2">
                    <b-form-input id="password2"
                                    type="password"
                                    required
                                    v-model="form.password2">
                    </b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Inscription</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import utilisateurs from '../../api/utilisateur.json';
// import Datastore from 'nedb';

// var userdb = new Datastore({filename : '../../db/utilisateur.db', autoload: true});

export default {
  name:'Inscription',
  computed: {
    invalidPseudo(){
      var pseudos = utilisateurs.filter(u => {
        return (u.pseudo.toLowerCase() == this.form.pseudo.toLowerCase());
      })
      return pseudos.length > 0 ?  "Ce pseudo est déja utilisé" : "";
    },
    invalidMail(){
      var mails = utilisateurs.filter(u => {
        return (u.mail.toLowerCase() == this.form.mail.toLowerCase());
      })
      return mails.length > 0 ?  "Cette adresse mail est déja utilisée" : "";
    },
    statePassword () {
      return this.form.password.length >= 8 ? true : false
    },
    invalidPassword () {
      if (this.form.password.length > 8) {
        return ''
      } else if (this.form.password.length >0) {
        return 'Votre mot de passe doit avoir 8 caratères minimun'
      } else {
        return ''
      }
    },
    validPassword () {
      return this.statePassword === true ? '' : ''
    },
    statePassword2 () {
      return this.form.password2 == this.form.password ? true : false
    },
    invalidPassword2 () {
      if (this.form.password != this.form.password2) {
        return 'Vos deux mots de passe ne coresspondent pas'
      } else {
        return ''
      }
    },
    validPassword2 () {
      return this.statePassword2 === true ? '' : ''
    }
  },
  data () {
    return {
      form: {
            pseudo: '',
            mail: '',
            password: '',
            password2: '',
            checked: []
      },
      show: true,
      info: utilisateurs
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault();
        var user = {
          "pseudo" : this.form.pseudo,
          "mail" : this.form.mail,
          "login" : this.form.pseudo,
          "password" : this.form.password
        }
        this.insertUser(user);
    },
    // findUser(db, opt){
    //   return new Promise(function(resolve, reject) {
    //     db.findOne(opt, function(err, doc) {
    //       if (err) {
    //         reject(err)
    //       } else {
    //         resolve(doc)
    //       }
    //     })
    //   })
    // },
    insertUser(user){
      var file = '../../api/utilisateur.json';

      // userdb.insert(user, function(err, newUser){
      //   console.log(err);
      //   console.log(newUser);
      // })

    }
  }
}
</script>

<style>
  #form-inscription{
    margin-top: 10rem;
  }
  .invalid-feedback{
    color : red
  }
</style>