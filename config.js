// firebase config key setup
import firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//App firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9tlMlqwkk54e_5k1iOgkr-BbA5XD6Jms",
    authDomain: "test-ec3b1.firebaseapp.com",
    projectId: "test-ec3b1",
    storageBucket: "test-ec3b1.appspot.com",
    messagingSenderId: "1023526898772",
    appId: "1:1023526898772:web:cda2f845fa270bda3671c1",
    measurementId: "G-R4SFSMR6DF"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
export { firebase };