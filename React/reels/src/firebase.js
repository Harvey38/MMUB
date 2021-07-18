import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyC3lA1kH4CyB7NqJH67WDRsNRw277Nsd74",
        authDomain: "reels-class.firebaseapp.com",
        projectId: "reels-class",
        storageBucket: "reels-class.appspot.com",
        messagingSenderId: "176437527266",
        appId: "1:176437527266:web:bf358df480bfd9302214bb"
      }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;