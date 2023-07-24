import bcrypt from 'bcrypt'

export const encryptPassword = (password) => {
    return bcrypt.hash(password, bcrypt.genSaltSync(10))
}

export const isValidPassword = (password, passwordLogin) => {
    return bcrypt.compare(password, passwordLogin)
}