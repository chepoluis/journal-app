import 'firebase/firestore';
import 'firebase/auth';
import firebase  from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBonJ4Rpeh0HO08V0ARZUTzvxMssYh-XU",
    authDomain: "journal-app-db09b.firebaseapp.com",
    projectId: "journal-app-db09b",
    storageBucket: "journal-app-db09b.appspot.com",
    messagingSenderId: "734774040862",
    appId: "1:734774040862:web:db4281196ec63b28d6910f"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    firebase
}