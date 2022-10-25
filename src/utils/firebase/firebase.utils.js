// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  getDocFromServer,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE3ggHfJVDOaai30xA7_3XEItBMgEbugI",
  authDomain: "corina-clothing-db-24756.firebaseapp.com",
  projectId: "corina-clothing-db-24756",
  storageBucket: "corina-clothing-db-24756.appspot.com",
  messagingSenderId: "337651658684",
  appId: "1:337651658684:web:cf2ea88fe2790d8bfbc5b9",
  measurementId: "G-05FEPJ57T8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnaphot = await getDoc(userDocRef);
  console.log(userSnaphot.exists());

  if (!userSnaphot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating usr", error.message);
    }
  }
  return userDocRef;
};
