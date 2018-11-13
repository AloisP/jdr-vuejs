<template>
    <div class="content-wrapper" style="min-height: 868px;">
       <b-alert :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged">
          <p>Vos informations ont bien été modifiées</p>
        </b-alert>
        <b-container>
            <h1>
                <i class="fa fa-info-circle"></i> Mes informations
            </h1>
            <b-form @submit="onSubmit" v-if="show">
              <h3 class="titre-page">Modifications des informations de mon compte</h3>
                <b-form-group id="pseudo"
                            label="Pseudo"
                            label-for="pseudo">
                    <b-form-input id="pseudo"
                                    type="text"
                                    v-model="form.pseudo"
                                    required>
                    </b-form-input>
                </b-form-group>

                <b-form-group id="mail"
                            label="Email"
                            label-for="mail">
                    <b-form-input id="mail"
                                    type="email"
                                    required
                                    v-model="form.mail">
                    </b-form-input>
                </b-form-group>

                <b-form-file v-model="file" :state="Boolean(file)" plain></b-form-file>
                <div style="margin: 1rem 0">
                  Avatar actuel : {{form.avatar}}
                </div>

                <b-button type="submit" variant="primary">Modifier mes informations</b-button>
            </b-form>
        </b-container>

        <b-container>
            <b-form @submit="onSubmit2" v-if="show">
              <h3 class="titre-page">Modifications de mon Mot de Passe</h3>
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
                <b-button type="submit" variant="primary">Modifier mon mot de passe</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import router from '../../router';
const fb = require('../../firebaseConfig.js');

export default {
  name: 'Content',
  computed: {
    statePassword () {
      return this.form2.password.length >= 8 ? true : false
    },
    invalidPassword () {
      if (this.form2.password.length > 8) {
        return ''
      } else if (this.form2.password.length >0) {
        return 'Votre mot de passe doit avoir 8 caratères minimun'
      } else {
        return ''
      }
    },
    validPassword () {
      return this.statePassword === true ? '' : ''
    },
    statePassword2 () {
      return this.form2.password2 == this.form2.password ? true : false
    },
    invalidPassword2 () {
      if (this.form2.password != this.form2.password2) {
        return 'Vos deux mots de passe ne coresspondent pas'
      } else {
        return ''
      }
    },
    validPassword2 () {
      return this.statePassword2 === true ? '' : ''
    }
  },
  data(){
    return {
      idUser : parseInt(sessionStorage.getItem('idUser')),
      form: {
          pseudo: sessionStorage.getItem('pseudoUser'),
          avatar: sessionStorage.getItem('avatarUser'),
          mail: sessionStorage.getItem('mailUser'),
          file:'',
      },
      form2:{
          password:'',
          password2:''
      },
      show: true,
      dismissSecs: 4,
      dismissCountDown: 0,
      }
  },
  created(){
  },
  methods : {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    
    onSubmit (evt) {
        evt.preventDefault();
        const id =  parseInt(sessionStorage.getItem('idUser')) - 1
        const pseudo = this.form.pseudo
        const mail = this.form.mail
        if(!empty(file)){
          const avatar = this.form.file
        }else{
          const avatar = this.form.avatar
        }
        
        fb.db.ref('user/' + id).update({
            avatar: avatar,
            mail: mail,
            pseudo: pseudo
          }, function(error){
            if(error){
              console.log(error);
            }
            else{
              sessionStorage.setItem('pseudoUser', pseudo)
              sessionStorage.setItem('avatarUser', avatar)
              sessionStorage.setItem('mailUser', mail)
            }
          })
          this.dismissCountDown = this.dismissSecs
      },
      onSubmit2 (evt) {
        evt.preventDefault();
        const id =  parseInt(sessionStorage.getItem('idUser')) - 1
        const password = this.form.password
        fb.db.ref('user/' + id).update({
          password: password
          }, function(error){
            if(error){
              console.log(error);
            }
        })
        this.dismissCountDown = this.dismissSecs
      }
  }
}
</script>

<style>
.titre-page{
  margin: 3rem 0;
}

</style>