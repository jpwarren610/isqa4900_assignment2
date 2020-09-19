import * as firebase from 'firebase'
// My app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqIFHuKw-17dUXUCr-fICCxge3NtUpVC8',
  authDomain: 'my-subscriptions-8815f.firebaseapp.com',
  databaseURL: 'https://my-subscriptions-8815f.firebaseio.com',
  projectId: 'my-subscriptions-8815f',
  storageBucket: 'my-subscriptions-8815f.appspot.com',
  messagingSenderId: '79426619283',
  appId: '1:79426619283:web:ab960b4060178c45af0a66'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
