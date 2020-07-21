import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBnjkCL5D0zCgIwB3d6_jOy3DQh7ZUV6zs",
    authDomain: "corina-clothing-db.firebaseapp.com",
    databaseURL: "https://corina-clothing-db.firebaseio.com",
    projectId: "corina-clothing-db",
    storageBucket: "corina-clothing-db.appspot.com",
    messagingSenderId: "170473734262",
    appId: "1:170473734262:web:c5ca61f9d646fd2f4e9f57",
    measurementId: "G-DM1XY9627G"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await  userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.nessage);
      }
  
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;