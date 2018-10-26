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
                                <div class="row" v-for="partie in parties_mj" :key="partie.id">
                                    <div class="col-md-12">
                                        <div class="box" v-bind:class="[partie.ouvert ? 'box-success' :  'box-danger']"  
                                        v-bind:title="[partie.ouvert ? 'La partie est encore ouverte' :  'La partie est fermée']"
                                        data-toggle="tooltip" data-placement="top" >
                                            <div class="box-header text-center"><h4 class="box-title">{{partie.titre}} </h4></div>
                                            <div class="box-body">
                                                <blockquote>
                                                    <p>{{partie.description}}</p>
                                                    <footer>Description par <cite title="Source Title">{{utilisateur.pseudo}}</cite></footer>
                                                </blockquote>
                                            </div>
                                            <div class="box-footer text-right">
                                                <ul class="users-list clearfix">
                                                    <li v-for="joueur in partie.joueurs" :key="joueur.id">
                                                        <img src="@/assets/generic-user.png" alt="User Image" style="width :50px">
                                                        <a class="users-list-name" href="#">{{joueur.pseudo}}</a>
                                                        <span class="users-list-date"><i class="fa fa-circle text-success"></i> En ligne </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="box-footer text-right">
                                                <button class="btn btn-success" v-bind:class="[!partie.ouvert ? 'hidden' :  '']"  >Lancer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>                  
                <div class="col-md-6">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title"> Mes parties en tant que joueur</h3>
                        </div>        
                        <div class="box-content with-border">
                            <br>
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
import parties from '../../api/partie.json';
import parties_joueurs from '../../api/partie_joueur.json'
import utilisateurs from '../../api/utilisateur.json'

export default {
  name: 'Content',
  props : ["utilisateur"],
  data(){
      return {
        parties_mj : [],
        parties_joueur : []
      }
  },
  mounted(){
      this.getPartiesMj()
  },
  methods: {
      getPartiesMj(){
        parties.find(p => {
            if(p.mj === this.utilisateur.id ){
                var partie = p;
                var joueurs = [];
                parties_joueurs.find(pj => {
                    if(pj.partie === p.id){
                        var user = null;
                        utilisateurs.find(u =>{
                            if(u.id === pj.utilisateur){
                                joueurs.push(u)
                            }
                        })
                    }
                })
                partie.joueurs = joueurs;
                this.parties_mj.push(p);
            }
         })
      }
  }
}
</script>