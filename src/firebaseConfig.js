import * as firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBbOGVWZAQN6G_bf2g_I5XYN-2dYIz2smc",
    authDomain: "jdr-vue.firebaseapp.com",
    databaseURL: "https://jdr-vue.firebaseio.com",
    projectId: "jdr-vue",
    storageBucket: "jdr-vue.appspot.com",
    messagingSenderId: "960667443202"
  };

firebase.initializeApp(config);
const db = firebase.firestore()
const auth = firebase.auth()
const settings = {
    timestampsInSnapshots: true
}

db.settings({
    timestampsInSnapshots: true
  });

const userCollection = db.collection('user')

auth.signInWithEmailAndPassword('admin@admin.com','admin1');

export {
    db,
    auth,
    userCollection
}
