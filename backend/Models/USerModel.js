//BackEnd/Models/User_Model.js
const mongo = require('mongoose');

const userSchema = new mongo.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },

    password: {
        type: String,
        required: [true, 'Password is required'],
    },

    address: {
        type: String,
        required: [false, 'address is not mandatory'],
        default: ''
    },
    cart: {
        id: {
            type: [String],
            default: []
        },
        quantity: {
            type: [Number],
            default: []
        }
    },
})


const userModel = mongo.model('Users', userSchema)

module.exports = userModel;
