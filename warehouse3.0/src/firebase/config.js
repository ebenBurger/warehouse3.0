import { initializeApp } from  'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCSUDJj8DmCu5cF_x3GrKX1DKTgcxO3KR4",
    authDomain: "warehouse-a38c7.firebaseapp.com",
    projectId: "warehouse-a38c7",
    storageBucket: "warehouse-a38c7.appspot.com",
    messagingSenderId: "83582470054",
    appId: "1:83582470054:web:be9617551ead61b5ed3167"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()

export { auth }