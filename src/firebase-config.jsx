// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
// import 'firebase/auth';
import { getAuth, GoogleAuthProvider, setPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
