import { showHome } from "../controllers/home";
import express from "express";

const router = express.Router();

router.get("/", showHome);

export default router;
