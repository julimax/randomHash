import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/config.js'

export const authRequired = (req, res, next) => {
    
    const { token } = req.cookies;

    if (!token) return res.redirect('/session/login')

    jwt.verify(token, TOKEN_SECRET, (err, user) => {

        if (err) return res.redirect('/session/login')
        req.user = user
        next()
    })

    
}