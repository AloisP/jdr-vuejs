<template>
    <div class="content-wrapper" style="min-height: 918px;margin-left:0px" id="wrapper-partie">
        <section class="content-header ">
            <h1>
                <button class="btn btn-danger" v-on:click="backAccueil"><i class="fa fa-arrow-left"></i> Quitter la partie</button>
                <span>
                    {{partie.titrePartie}}
                </span>
            </h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-4">
                    <div class="box">
                        <div class="box-header with-border"><h3 class="box-title"> Votre MJ</h3></div>
                        <div class="box-body text-center">
                            <img src="@/assets/generic-user.png" width="100px"/>
                            <p><strong>{{MJ.pseudoMj}}</strong></p>
                        </div>
                        <div class="box-footer text-right" v-if="estMj">
                            <button class="btn btn-default">Lancer la caméra</button>
                        </div>
                    </div>
                    
                    <div class="box">
                        <div class="box-header with-border"><h3 class="box-title"> Personnages </h3></div>
                        <div class="box-body">
                            <div class="row">
                                <div class="col-md-1">
                                    <i class="fa fa-angle-left"></i>
                                </div>
                                <div class="col-md-10">
                                    <div v-for="(joueur,index) in joueurs" v-bind:key="joueur.id" v-bind:class="{'hidden' : !estMj && joueur.id != currentUser.idUser}">
                                        <div class="row">
                                            <div class="col-md-12 text-center">
                                                <label>Test</label> (Julien) {{index}}
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-md-6 text-center">
                                                <img src="@/assets/personnage_classe/guerrier-humain-femme.jpg" style="height : 250px;width:100%"/>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <label>Race :</label> Humain 
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <label>Sexe :</label> Femme 
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <label>Classe :</label> Guerrier 
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <label>PV :</label> 10 (+0)
                                                    </div>
                                                    <div class="col-md-4 text-right">
                                                        <span class="text-gray"><i class="fa fa-plus-circle"></i></span>
                                                        <span class=""><i class="fa fa-minus-circle"></i></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <label>Force :</label> 70 (+0)
                                                    </div>
                                                    <div class="col-md-4 text-right">
                                                        <span class="text-gray"><i class="fa fa-plus-circle"></i></span>
                                                        <span class="text-gray"><i class="fa fa-minus-circle"></i></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <label>Intel. :</label> 30 (+0)
                                                    </div>
                                                    <div class="col-md-4 text-right">
                                                        <span class="text-gray"><i class="fa fa-plus-circle"></i></span>
                                                        <span class="text-gray"><i class="fa fa-minus-circle"></i></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <label>Esprit :</label> 30 (+0)
                                                    </div>
                                                    <div class="col-md-4 text-right">
                                                        <span class="text-gray"><i class="fa fa-plus-circle"></i></span>
                                                        <span class="text-gray"><i class="fa fa-minus-circle"></i></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <label>Init. :</label> 30 (+0)
                                                    </div>
                                                    <div class="col-md-4 text-right">
                                                        <span class="text-gray"><i class="fa fa-plus-circle"></i></span>
                                                        <span class="text-gray"><i class="fa fa-minus-circle"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="nav-tabs-custom">
                                                <ul class="nav nav-tabs">
                                                    <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true">Equipement</a></li>
                                                    <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false">Inventaire</a></li>
                                                </ul>
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="tab_1">
                                                        Vide
                                                    </div>
                                                    <!-- /.tab-pane -->
                                                    <div class="tab-pane" id="tab_2">
                                                        Vide
                                                    </div>
                                                </div>
                                                <!-- /.tab-content -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                    <i class="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="carousel-example-generic" class="carousel slide">
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class=""></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2" class="active"></li>
                                </ol>
                                <div class="carousel-inner">
                                    <div class="item ">
                                        <img src="http://placehold.it/900x500/39CCCC/ffffff&amp;text=I+Love+Bootstrap" alt="First slide">
                                    </div>
                                    <div class="item">
                                        <img src="http://placehold.it/900x500/3c8dbc/ffffff&amp;text=I+Love+Bootstrap" alt="Second slide">
                                    </div>
                                    <div class="item active">
                                        <img src="http://placehold.it/900x500/f39c12/ffffff&amp;text=I+Love+Bootstrap" alt="Third slide">
                                    </div>
                                </div>
                                <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                    <span class="fa fa-angle-left"></span>
                                </a>
                                <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                    <span class="fa fa-angle-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top : 70px;">
                        <div v-for="joueur in joueurs" v-bind:key="joueur.id" class="col-md-12" :style="setWidthJoueurBox">
                            <div class="box">
                                <div class="box-header with-border"><h3 class="box-title">{{joueur.pseudo}} </h3></div>
                                <div class="box-body text-center">
                                    <img src="@/assets/generic-user.png" width="100px"/>
                                </div>
                                <div class="box-footer text-right" >
                                    <button class="btn btn-default">Lancer la caméra</button>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="row">

            </div>
        </section>
    </div>
</template>

<script>
import router from '../../router';
const fb = require('./../../firebaseConfig.js')

export default {
  name: 'Content',
  data(){
      return {
          estMj : parseInt(sessionStorage.getItem('idUser')) === parseInt(sessionStorage.getItem('idMj')),
          partie : {
            idPartie : parseInt(sessionStorage.getItem('idPartie')),
            titrePartie : sessionStorage.getItem('titrePartie')
          },
          currentUser : {
            idUser : parseInt(sessionStorage.getItem('idUser')),
            avatarUser : sessionStorage.getItem('avatarUser') ? sessionStorage.getItem('avatarUser') : "generic-user.png",
            pseudoUser : sessionStorage.getItem('pseudoUser') 
          },
          MJ : {
            idMj : parseInt(sessionStorage.getItem('idMj')),
            avatarMj : null,
            pseudoMj : null
          },
          joueurs : [],
          pagerPersonnage : {
              index : 0
          }
      }
  },
  created(){
      this.getMj();
      this.getJoueurs();
  },
  computed : {
      setWidthJoueurBox() {
          return {
              width : (100 / this.joueurs.length) + '%'
            }
      }
  },
  methods : {
        backAccueil(){
            router.push({name: "Accueil"})
        },
        getMj(){
            if(this.estMj){
                this.MJ.avatarMj = this.currentUser.avatarUser;
                this.MJ.pseudoMj = this.currentUser.pseudoUser;
            }else{
                var avatarMj = null;
                var pseudoMj = null;
                fb.db.ref('user').orderByChild('id').equalTo(this.MJ.idMj).once("value",function(datas){
                    datas.forEach(data => {
                        mj = data.val();
                        avatarMj = mj.avatar;
                        pseudoMj = mj.pseudo;
                    })
                })
                this.MJ.avatarMj = avatarMj
                this.MJ.pseudoMj = pseudoMj;
            }
        },
        getJoueurs(){
            var joueurs = [];
            // Recherche des joueurs de la partir
            fb.db.ref('game_user').orderByChild('partie').equalTo(this.partie.idPartie).on("value",function(datas){
                datas.forEach(data => {
                    var gameUser = data.val();
                    var user = null;
                    // Recherche des joueurs
                    fb.db.ref('user').orderByChild('id').equalTo(gameUser.utilisateur).once("value",function(datas){
                        datas.forEach(data => {
                            user = data.val();
                        })
                    })
                    fb.db.ref('character').orderByChild('id').equalTo(gameUser.personnage).once("value",function(datas){
                        datas.forEach(data => {
                            var character = data.val();
                            user.personnages = character;
                        })
                    })
                    joueurs.push(user);                    
                 })
            })
            console.log(joueurs);
            this.joueurs = joueurs;
        },
        pageSuivante() {

        },
        pagePrecedente(){
            
        }
  }
}
</script>

<style>

</style>
