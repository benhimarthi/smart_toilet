// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4JvahbxoisRLdWwpEXek1jIikBsmkzDU",
  authDomain: "smart-toilet-service.firebaseapp.com",
  projectId: "smart-toilet-service",
  storageBucket: "smart-toilet-service.appspot.com",
  messagingSenderId: "248154055399",
  appId: "1:248154055399:web:f9a677ce3dd1ba7fcc7842",
  measurementId: "G-HVRCT2YLHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to send an email
const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const mailCollection = collection(db, "mail");
    await addDoc(mailCollection, {
      to,
      message: {
        subject,
        html,
      },
    });
    console.log("Email request added to Firestore");
  } catch (error) {
    console.error("Error adding email request to Firestore: ", error);
  }
};

export { app, db, sendEmail };
