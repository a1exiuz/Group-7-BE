import express from 'express';
import cors from "cors";
import signupRoutes from "./routes/signupRoutes.js";
import specificRoutes from "./routes/specificRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", signupRoutes);
app.use('/api/specific', specificRoutes);
app.use("/api", loginRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
