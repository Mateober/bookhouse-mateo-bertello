// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAySfDm-cA5WimBku7bB_j6LhcRB-IrBJE',
    authDomain: 'bookhouse-b5392.firebaseapp.com',
    projectId: 'bookhouse-b5392',
    storageBucket: 'bookhouse-b5392.appspot.com',
    messagingSenderId: '990807164348',
    appId: '1:990807164348:web:92900824cba45ee31617b9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
