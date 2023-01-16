// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
// import 'firebase/auth';
import { getAuth, GoogleAuthProvider, setPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDIb8QjCjy_rTyHaTvEATHGIKHsGvJtMw",
    authDomain: "deportick.firebaseapp.com",
    projectId: "deportick",
    storageBucket: "deportick.appspot.com",
    messagingSenderId: "1009904314557",
    appId: "1:1009904314557:web:9032bef4c085d6ed8f2fd4",
    measurementId: "G-E7168MZBQX"
};

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// googleAuthProvider.setCustomParameters({ prompt: 'consent' });
export const googleAuthProvider = new GoogleAuthProvider().setCustomParameters({ prompt: 'consent' });

// firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
const auth = getAuth();
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

//REVISAR QUE ONDA
// setPersistence(auth, SESSION);

// export default firebase;
