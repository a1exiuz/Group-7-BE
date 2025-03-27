import express from 'express';
import cors from "cors";
import signupRoutes from "./routes/signupRoutes.js";
import specificRoutes from "./routes/specificRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", signupRoutes);
app.use('/api/specific', specificRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});