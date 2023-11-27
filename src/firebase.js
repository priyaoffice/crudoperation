// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  // apiKey: "AIzaSyApeOCCOG_VY5YtaElIi_4gkqjUk-ybf8c",
  // authDomain: "adminpage1998.firebaseapp.com",
  // projectId: "adminpage1998",
  // storageBucket: "adminpage1998.appspot.com",
  // messagingSenderId: "710289077335",
  // appId: "1:710289077335:web:dac57504fbea3daace9f12",
  // measurementId: "G-4TZGJQHZ36"
  apiKey: "AIzaSyCV6BWWsGbpsLRLZwuOafPakbVI-J85r_c",
  authDomain: "register-4ae81.firebaseapp.com",
  projectId: "register-4ae81",
  storageBucket: "register-4ae81.appspot.com",
  messagingSenderId: "660850391986",
  appId: "1:660850391986:web:4c020f7b80bffc44e042ab",
  measurementId: "G-T3G2ZK2BE9"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)