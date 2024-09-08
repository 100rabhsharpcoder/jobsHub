import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "../backend/routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoutes from "./routes/job.routes.js";
import applicationRoutes from "./routes/application.routes.js";

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 7000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const coreOption = {
  origin: "*",
  credentials: true,
};
connectDB();
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/application", applicationRoutes);



app.use(cors(coreOption));
app.use("/api/v1/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
