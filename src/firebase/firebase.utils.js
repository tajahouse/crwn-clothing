import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBvx8PCG0rol7Cp1BnOBfkAbRsp-BXT4KY",
    authDomain: "crwn-db-4b39d.firebaseapp.com",
    databaseURL: "https://crwn-db-4b39d.firebaseio.com",
    projectId: "crwn-db-4b39d",
    storageBucket: "crwn-db-4b39d.appspot.com",
    messagingSenderId: "871292777952",
    appId: "1:871292777952:web:75b6f3c9f0f137c163a785",
    measurementId: "G-94YDJDCR5P"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
//Google
  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

//Twitter
  const twitterProvider = new firebase.auth.TwitterAuthProvider();
  firebase.auth().useDeviceLanguage();
  export const signInWithTwitter = () => auth.signInWithRedirect(twitterProvider)
  .then(function(result){
    var token = result.credential.accsessToken;
    var secret = result.credential.secret;
    console.log("Token for Twitter", token);

    var user = result.user;
  }).catch(function(err){
    var errCode = err.code;
    var errMessage = err.message;
    var email = err.email;
    var credential = err.credential;
  })

  export default firebase;