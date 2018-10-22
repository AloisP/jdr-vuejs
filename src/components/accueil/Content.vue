<template>
    <div class="content-wrapper" style="min-height: 870px;">
        <section class="content-header">
            <h1>
                <i class="fa fa-home"></i> Accueil
                <small>- Vos parties</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-home"></i> Accueil</a></li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-12">
                    <div class="box">
                        <div class="box-header with-border">
                            <h3 class="box-title"> Mes parties en tant que MJ</h3>
                        </div>        
                        <div class="box-content with-border">

                        </div>
                    </div>    
                </div>    
            </div>    
            <h2>Mes parties en tant que MJ :</h2>
            <br>
            <h2>Mes parties en tant que joueur : </h2>
        </section>
    </div>
</template>

<script>
import parties from '../../api/partie.json';

export default {
  name: 'Content',
  data(){
      return {
        parties_mj : [],
        parties_joueur : []
      }
  },
  methods: {
      getPartieMj(){
          
      }
  }
}
</script>

<style>

</style>
