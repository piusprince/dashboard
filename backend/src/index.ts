import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import clientRoutes from "./routes/clientRoute";
import generalRoutes from "./routes/generalRoute";
import managementRoutes from "./routes/managementRoute";
import salesRoutes from "./routes/salesRoute";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 9000;

mongoose
  .connect(
    process.env.MONGODB_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
