import { auth, db } from '../config/firebaseAdmin.js';

const signUpUser = async (email, password, role) => {
  try {
  
    const userCredential = await auth.createUser({ email, password });
    const user = userCredential;

    await db.collection('users').doc(user.uid).set({
      email: user.email,
      role: role,  
      createdAt: new Date(),
    });

    return { user };
  } catch (error) {
    console.error('Error signing up user:', error);
    throw new Error(error.message);
  }
};

export { signUpUser };
