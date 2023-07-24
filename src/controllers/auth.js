import UserModel from "../models/user.model.js"
import { encryptPassword, isValidPassword } from "../config/bcrypt.js"
import { createAccessToken } from "../libs/jwt.js"

export const register = async (req, res) => {
    const {password, user} = req.body

    try {

        const userFound = await UserModel.findOne({user})
        if (userFound) return res.status(400).json(["Email is already in use"])

        console.log(password, user)
        const passwordHash = await encryptPassword(password)
        console.log(passwordHash)

        const newUser = new UserModel({
            user: user,
            password: passwordHash
        })
        const userSaved = await newUser.save()

        const token = await createAccessToken({id: userSaved._id})
        res.cookie( 'token', token )
        res.json({
            id : userSaved._id,
            user: userSaved.user,
            password: userSaved.password
        })
    } catch (err) {
        console.log(err)
    }

} 

export const login = async (req, res) => {
    const {user, password} = req.body

    try{
        console.log(password)
        const userFound = await UserModel.findOne({user})
        console.log(password)

        if (!userFound) return res.status(400).json({ message: "Invalid credentials" })
        console.log(password)


        console.log(userFound.password)
        const isMatch = await isValidPassword(password, userFound.password) 
        console.log(password)

        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" })
        console.log(password)

        const token = await createAccessToken({id: userFound._id})
        res.cookie( 'token', token )
        res.redirect('/session/profile')
    } catch(err) {
        console.log(err)
    }
} 

export const logout = async (req, res) => {} 

export const profile = async (req, res) => {
        console.log(req.user.id)
        if (!req.user.id) return res.redirect('/login')

        const _id = req.user.id
        const userFound = await UserModel.findOne({_id})
        const user = userFound.user
        res.render('profile', { user });
    
} 

export const verifyToken = async (req, res) => {} 