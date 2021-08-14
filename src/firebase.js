import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAkb5uQIxftjOfPBc_8ZLvBbn6snIebhHg",
  authDomain: "eesa-c64c2.firebaseapp.com",
  projectId: "eesa-c64c2",
  storageBucket: "eesa-c64c2.appspot.com",
  messagingSenderId: "98957431153",
  appId: "1:98957431153:web:f31ae3721990c2ccd566d0",
  measurementId: "G-6CMPW93QBB"
})

export const auth = app.auth()
export default app
