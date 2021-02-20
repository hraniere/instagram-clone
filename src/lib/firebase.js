// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAEzysEpAsy3KiSC6uVBTTafDdF4Kbq86c",
  authDomain: "instagram-hrab.firebaseapp.com",
  projectId: "instagram-hrab",
  storageBucket: "instagram-hrab.appspot.com",
  messagingSenderId: "1018867591344",
  appId: "1:1018867591344:web:f6be264fe171bfdb6ef375"
};

const firebase = window.firebase.initializeApp(config)
const { FieldValue } = window.firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }
