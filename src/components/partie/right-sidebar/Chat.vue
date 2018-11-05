<template>
    <div class="box box-info direct-chat direct-chat-info">
        <div class="box-body">
            <div class="direct-chat-messages">
                <div v-for="message in chat" v-bind:key="message.id" class="direct-chat-msg" :class="[message.utilisateur === idUser ? 'right' : '']">
                    <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name" :class="[message.utilisateur === idUser ? 'pull-right' : ' pull-left']" >
                            {{message.utilisateur === idUser ? 'Vous' : message.pseudoUser}}
                        </span>
                        <span class="direct-chat-timestamp" :class="[message.utilisateur === idUser ? 'pull-left' : ' pull-right']">{{message.date}}</span>
                    </div>
                    <img class="direct-chat-img" :src="require('@/assets/' + message.avatarUser)" alt="message user image">
                    <div class="direct-chat-text">
                        {{message.texte}}
                    </div>
                </div>
            </div>
        </div>
        <div class="box-footer">
            <form action="#" method="post" @submit="sendMessage">
                <div class="input-group">
                    <input type="text" name="message" placeholder="Saisissez votre message..." class="form-control" v-model="form.message">
                    <span class="input-group-btn">
                        <button type="submit" class="btn btn-info btn-flat" >Envoyer</button>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
const fb = require('../../../firebaseConfig.js')
var moment = require('moment');
export default {
    name: "Chat",  
    data(){
      return {
          idUser : parseInt(sessionStorage.getItem('idUser')),
          idPartie : parseInt(sessionStorage.getItem('idPartie')),
          chat : [],
          form : {
            message : ""
          }
      }
  },
  created() {
      this.getChat();
  },
  methods : {
      getChat() {
        var messages = [];
        // Recherche des messages du Chat
        fb.db.ref('chat').orderByChild('partie').equalTo(this.idPartie).on("value",function(datas){
            var message = null;
            datas.forEach(data => {
                message = data.val()
                // Recherche des informations des joueurs
                fb.db.ref('user').orderByChild('id').equalTo(message.utilisateur).on("value",function(datas){
                    var user = null;
                    datas.forEach(data => {
                        user = data.val()
                        message.pseudoUser = user.pseudo;
                        message.avatarUser = user.avatar !== "" ? user.avatar : 'generic-user.png' ;
                    })
                })
                messages.push(message);
            })
        })
        this.chat = messages;
      },
      sendMessage(evt){
        evt.preventDefault();
        var partie = this.idPartie;
        var texte = this.form.message;
        var utilisateur = this.idUser;
        var date = moment().locale('fr').format('lll'); 
        if(this.texte != ""){
            fb.db.ref('chat').limitToLast(1).once('value', function(snapshot){
                snapshot.forEach(function (data){
                    fb.db.ref('chat/' + data.val().id).set({
                        id:  data.val().id+1,
                        partie: partie,
                        texte: texte,
                        utilisateur: utilisateur,
                        date: date
                        }, function(error){
                            if(error){ console.log(error); } else{  console.log('ok');}
                    })
                    return false;
                })
            })        
            this.form.message ="";
        }
      }
  }
    
}
</script>
