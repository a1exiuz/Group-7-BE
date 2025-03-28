import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3Vr8hFYomcb_r59zmPNN9E4ccEs-w9v4",
  authDomain: "coursemanagementsystem-8d873.firebaseapp.com",
  projectId: "coursemanagementsystem-8d873",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const getIdToken = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    console.log("Generated ID Token:", idToken);
  } catch (error) {
    console.error("Error getting ID token:", error.message);
  }
};

getIdToken("newtestuser@example.com", "testpassword");//change to the password and email 
 //                                                       that u want to test



