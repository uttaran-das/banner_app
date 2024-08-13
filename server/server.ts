import express from "express";
import cors from "cors";
import bannerRoutes from "./routes/banner";

const app = express();
app.use(cors());
app.use("/api/banner", bannerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));