import mongoose from "mongoose";

const userCollection = "users"

const userSchema = new mongoose.Schema({
    user: String,
    password: String
})

mongoose.set("strictQuery", false)
const UserModel = mongoose.model(userCollection, userSchema)

export default UserModel;