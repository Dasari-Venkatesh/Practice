const { z } = require('zod');
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mymongoadmin:12345@cluster0.1reeplm.mongodb.net/Paytm").then(() =>{console.log("connected")})

const userValidationShcema = z.object({
    userName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string()
})

const userSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    password: String
    
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const Users = mongoose.model('users', userSchema);

module.exports = {
    Users, userValidationShcema, Account
}