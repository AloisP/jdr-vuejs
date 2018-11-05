<template>
    <div class="content-wrapper" style="min-height: 868px;">
        <section class="content-header">
            <h1>
                <i class="fa fa-home"></i> Accueil
                <small>- Mes parties</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-home"></i> Accueil</a></li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="box box-info">
                        <div class="box-header with-border">
                            <h3 class="box-title"> Mes parties en tant que MJ</h3>
                        </div>        
                        <div class="box-body with-border">
                            <div class="col-md-12">
                                <br>
                                <div  class="text-center" v-if="!parties_mj.length">Vous avez créé aucune partie</div>
                                <div class="row" v-for="partie in parties_mj" :key="partie.id">
                                    <div class="col-md-12">
                                        <div class="box" v-bind:class="[partie.ouvert ? 'box-success' :  'box-danger']"  
                                        v-bind:title="[partie.ouvert ? 'La partie est encore ouverte' :  'La partie est fermée']"
                                        data-toggle="tooltip" data-placement="top" >
                                            <div class="box-header text-center"><h4 class="box-title">{{partie.titre}} </h4></div>
                                            <div class="box-body">
                                                <blockquote>
                                                    <p>{{partie.description}}</p>
                                                    <footer>Description par <cite title="Source Title">{{pseudoUser}}</cite></footer>
                                                </blockquote>
                                            </div>
                                            <div class="box-footer text-right" v-if="partie.joueurs.length">
                                                <ul class="users-list clearfix">
                                                    <li v-for="joueur in partie.joueurs" :key="joueur.id" v-bind:style="{width : (100/partie.joueurs.length) + '%'}">
                                                        <img src="@/assets/generic-user.png" alt="User Image" style="width :50px">
                                                        <a class="users-list-name" href="#">{{joueur.pseudo}}</a>
                                                        <span class="users-list-date">
                                                            <i class="fa fa-circle" v-bind:class="[joueur.online ? 'text-success' :  'text-danger']"></i> {{joueur.online ? 'En ligne' :  'Déconnecté'}} </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="box-footer text-right" v-if="partie.ouvert">
                                                <button class="btn btn-success" v-bind:class="[!partie.ouvert ? 'hidden' :  '']" v-on:click="lancerPartie(partie.id)" >Lancer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overlay" v-if="!parties_mj.length"><i class="fa fa-refresh fa-spin"></i></div>
                    </div>    
                </div>                  
                <div class="col-md-6">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title"> Mes parties en tant que joueur</h3>
                        </div>        
                        <div class="box-body with-border">
                            <br>
                            <div  class="text-center" v-if="!parties_joueur.length">Vous avez rejoint aucune partie</div>
                            <div class="row">
                                <!-- <div v-for="partie in parties_mj" class="col-3">
                                    <div class="box" v-bind:class="[partie.ouvert ? 'box-success' :  'box-danger']">
                                        <div class="box-header text-center"><h4 class="box-title">{{partie.titre}} </h4></div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>    
                </div>   
            </div>    
        </section>
    </div>
</template>

<script>
import router from '../../router';

const fb = require('../../firebaseConfig.js')

export default {
  name: 'Content',
  data(){
      return {
        parties_mj : [],
        parties_joueur : [],
        maxId : 0,
        idUser : parseInt(sessionStorage.getItem('idUser')),
        pseudoUser : sessionStorage.getItem('pseudoUser')
      }
  },
  created(){
      this.getPartiesMj()
  },
  methods : {
      getPartiesMj : function() {
        var parties = [];
        // recherche des parties 
        fb.db.ref('game').orderByChild('mj').equalTo(this.idUser).once("value",function(datas){
            var partie = null;
            datas.forEach(data => {
                partie = data.val()   
                // Recherche des joueurs de la partie 
                var joueurs = [];
                fb.db.ref('game_user').orderByChild('partie').equalTo(parseInt(partie.id)).on("value",function(datas){
                    var joueur = null;
                    datas.forEach(data => {
                        joueur = data.val()
                        // Recherche des informations des joueurs
                        fb.db.ref('user').orderByChild('id').equalTo(joueur.utilisateur).on("value",function(datas){
                            var user = null;
                            datas.forEach(data => {
                                user = data.val()
                                joueurs.push(user);
                            })
                        })
                    })
                })
                partie['joueurs'] = joueurs;
                parties.push(partie);
            })
        })
        this.parties_mj = parties;
      },
      findJoueursByPartie: function(idPartie){
        var joueurs = [];
        fb.db.ref('game_user').orderByChild('partie').equalTo(parseInt(idPartie)).on("value").then(function(datas){
            var joueur = null;
            datas.forEach(data => {
                joueur = data.val()
                joueurs.push(joueur);
            })
        })
        console.log(joueurs)
        return joueurs;
      },
      lancerPartie(partie){
        sessionStorage.setItem('idPartie', partie);
        fb.db.ref('game').orderByChild('id').equalTo(partie).once("value",function(datas){
            datas.forEach(function(data){
                var partie = data.val();
                sessionStorage.setItem('idMj', partie.mj);
                sessionStorage.setItem('titrePartie', partie.titre)
            })
        })
        router.push({name:'Partie'})
      }
  }
}
</script>