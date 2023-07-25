import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.js"
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()


router.post('/register', register)

// Vista de Login
router.get('/login', (req, res) => {
    res.render('login')
})

// API para login
router.post('/login', login)

// Cerrar Session
router.get('/logout', logout)

// profile
router.get('/profile', authRequired, profile);




export default router;