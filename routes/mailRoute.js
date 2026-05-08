import express from "express";
import transporter from "../config/nodemailerConfig.js";
import mailReceived from "../controller/mailController.js";

const router = express.Router();

router.post("/send-mail", mailReceived);

export default router;
