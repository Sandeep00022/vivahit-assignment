import express from "express";
import { uploadFile } from "../controllers/userFiles.js";

const router = express.Router();

router.post("/upload", uploadFile);
// router.post("/logout", getuploadFile);

export default router;