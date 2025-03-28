import express from "express";
import { loginUser } from "../services/userLogin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    const { idToken } = req.body;

    try{
        const user = await loginUser(idToken);
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(401).json({success: false, error: error.message});
    }
});

export default router;