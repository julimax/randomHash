import { Router } from "express";
import passport from "passport";

const router = Router()



//Vista para registrar usuarios
router.get('/register', (req, res) => {
    res.render('register')
})

// API para crear usuarios en la DB
router.post('/register', passport.authenticate('register', {
    failureRedirect: '/session/failRegister'
}), async(req, res) => {
    res.redirect('/session/login')
})

// fail register
router.get('/failRegister', (req, res) => {
    res.render('failRegister')
})

// Vista de Login
router.get('/login', (req, res) => {
    res.render('login')
})

// API para login
router.post('/login', passport.authenticate('login', { failureRedirect: '/session/failLogin'}), async (req, res) => {
    res.render('finish')
})

// fail login
router.get('/failLogin', (req, res) => {
    res.send({ error: 'Failed!!!'})
})

// Cerrar Session
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err);
            res.status(500).render('errors/base', {error: err})
        } else res.redirect('/sessions/login')
    })
})



export default router;