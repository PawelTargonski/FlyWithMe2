// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
 
const config = {
  apiKey: process.env.REACT_APP_API_KEY="AIzaSyAc8DjkX0m6BPuApi7sLI7SWxNaYcCvl6s",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN="flywithme-f1f2f.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID="flywithme-f1f2f",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET="flywithme-f1f2f.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID="309755440371",
  appId: "1:309755440371:web:d450201838e0c67456db86",
  measurementId: "G-S93KS3MZ35"
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password); 

    // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
}
 
export default Firebase;