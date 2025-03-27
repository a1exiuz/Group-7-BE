import express from "express";
import { signUpUser } from "../services/userSignup.js";

const router = express.Router();

router.post("/signup", async (req, res) =>{
    const { email, password, role } =req.body;

    try{
        const result = await signUpUser(email, password, role);
        res.status(201).json({ success: true, user: result});
    }   catch(error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

export default router;

