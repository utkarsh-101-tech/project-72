import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  //Add configuration here
   apiKey: "AIzaSyBY7bN_aniqgVmrzEn8yLiMbPAG6vDZkGs",
   authDomain: "project-71-c59b6.firebaseapp.com",
   projectId: "project-71-c59b6",
   storageBucket: "project-71-c59b6.appspot.com",
   messagingSenderId: "911866935123",
   appId: "1:911866935123:web:ee6147e64c4c72f2af53a6"
 };
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDwTvs7rxKaGVKtT_dANHq3fpehOBheBkI",
//   authDomain: "job-portal-27490.firebaseapp.com",
//   projectId: "job-portal-27490",
//   storageBucket: "job-portal-27490.appspot.com",
//   messagingSenderId: "370794309267",
//   appId: "1:370794309267:web:22fef414b75da1a8554f66"
// };

// Initialize Firebase
if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   