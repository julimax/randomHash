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

export const verifyTokenIndex = async (req, res, next) => {
    const { token } = req.signedCookies;;

    if (!token) {
        next();
    } else {
        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) {
                next();
            } else {
                req.user = user;
                next();
            }
        });
    }
};

export const verifyTokenCreate = async (req, res, next) => {
    const { token } = req.signedCookies;;

    if (!token) {
        next();
    } else {
        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) {
                next();
            } else {
                req.user = user;
                next();
            }
        });
    }
};
