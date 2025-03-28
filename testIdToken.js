import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "from firebase",
  authDomain: "from firebase",
  projectId: "from firebase",
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



