// import firebase from "firebase/app";
// import "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyBn1BYd2RMddP-xI5m3sdgdqpEpjbY5N10",
//   authDomain: "t-cook.firebaseapp.com",
//   projectId: "t-cook",
//   storageBucket: "t-cook.appspot.com",
//   messagingSenderId: "1050134953393",
//   appId: "1:1050134953393:web:25bc02ee4f0efba75ad190",
//   measurementId: "G-DM3E767DP6",
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const storage = firebase.storage();

// export { storage, firebase as default };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn1BYd2RMddP-xI5m3sdgdqpEpjbY5N10",
  authDomain: "t-cook.firebaseapp.com",
  projectId: "t-cook",
  storageBucket: "t-cook.appspot.com",
  messagingSenderId: "1050134953393",
  appId: "1:1050134953393:web:25bc02ee4f0efba75ad190",
  measurementId: "G-DM3E767DP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
