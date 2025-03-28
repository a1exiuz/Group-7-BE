import { auth, db } from "../config/firebaseAdmin.js";

const loginUser = async (idToken) => {
    try{
        
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;

        const userDoc = await db.collection("users").doc(uid).get();
        if(!userDoc.exists){
            throw new Error("User not found");
        }
        
        const userData = userDoc.data();
        
        return{
            uid: uid,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            age: userData.age,
            role: userData.role,
        };
    }   catch (error){
        console.error("error logging in user: ", error);
        throw new Error(error.message);
    }
};

export { loginUser };