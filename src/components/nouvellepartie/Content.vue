<template>
    <div class="content-wrapper" style="min-height: 868px;">            
        <b-container>
            <h1 style="margin-bottom: 2rem">
                <i class="fa fa-gamepad"></i> Nouvelle Partie
            </h1>
            <b-form @submit="onSubmit" v-if="show">
                <b-form-group id="titre"
                            label="Titre de la Partie"
                            label-for="titre">
                    <b-form-input id="titre"
                                    type="text"
                                    v-model="form.titre"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group id="description"
                            label="Description de la Partie"
                            label-for="description">
                    <b-form-input id="description"
                                    type="text"
                                    v-model="form.description"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-form-group id="nbj"
                            label="Nombre de Joueurs (Max 5)"
                            label-for="nbj">
                    <b-form-input id="nbj"
                                    type="text"
                                    v-model="form.nbj"
                                    required>
                    </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Nouvelle Partie</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import router from '../../router';
const fb = require('../../firebaseConfig.js');

export default {
    name: 'Content',
    data () {
    return {
      form: {
            titre: '',
            description: '',
            nbj: '',
      },
      show: true,
    }
  },
  methods: {
    onSubmit (evt) {
        evt.preventDefault();
        const titre = this.form.titre
        const description = this.form.description
        const nbj = parseInt(this.form.nbj)
        const mj = parseInt(sessionStorage.getItem('idUser'))

        fb.db.ref('game').limitToLast(1).once('value', function(snapshot){
          snapshot.forEach(function (data){
                fb.db.ref('game/' + data.val().id).set({
                    description: description,
                    id:  data.val().id+1,
                    mj: mj,
                    nb_joueur: nbj,
                    ouvert: false,
                    titre: titre,
                    }, function(error){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log('ok');
                    }
                })
          })
        }) 
    }
  }
}
</script>

<style>
.titre-page{
  margin: 3rem 0;
}

</style>