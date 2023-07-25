import { Router } from "express";
import { verifyTokenCreate } from "../middlewares/validateToken.js";
import { create } from "../controllers/auth.js";

const router = Router()

router.get('/', verifyTokenCreate, create)

export default router;