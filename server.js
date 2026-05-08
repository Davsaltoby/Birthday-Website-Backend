import express from "express";
import "dotenv/config";
// import dbConnection from "./config/db.js";
import celebrantRouter from "./routes/celebrantRoute.js";
import mailRoute from "./routes/mailRoute.js";
import cors from "cors";
import "./controller/automaticMail.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", celebrantRouter);
app.use("/api/birthday", mailRoute);

const PORT = process.env.PORT;

const server = () => {
  // await dbConnection();

  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
};

server();
