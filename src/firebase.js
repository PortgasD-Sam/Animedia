import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAR7xuq2PNpTchVTCo7VIifIGefGdAaaJc",
  authDomain: "animedia-97b5a.firebaseapp.com",
  projectId: "animedia-97b5a",
  storageBucket: "animedia-97b5a.appspot.com",
  messagingSenderId: "651052675823",
  appId: "1:651052675823:web:af226a4f058e90ee9e611a",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
