import express from "express";
import { createCelebrant } from "../controller/createCelebrant.js";
import { celebrantValidation } from "../middleware/celebrantValidation.js";

const router = express.Router();

router.post("/celebrant-auth", celebrantValidation, createCelebrant);

export default router;
