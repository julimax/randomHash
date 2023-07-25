import { Router } from "express";
import { verifyTokenIndex } from "../middlewares/validateToken.js";
import { index } from "../controllers/auth.js";

const router = Router()

router.get('/', verifyTokenIndex, index)

export default router