import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAv8PC0MlumIGNedVlBKKPtwTLQuQMR5CA',
  authDomain: 'miels-re-agency.firebaseapp.com',
  projectId: 'miels-re-agency',
  storageBucket: 'miels-re-agency.appspot.com',
  messagingSenderId: '915260081129',
  appId: '1:915260081129:web:10b7a74785b03a713a4178',
  measurementId: 'G-G8RWG6DJ4G',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
