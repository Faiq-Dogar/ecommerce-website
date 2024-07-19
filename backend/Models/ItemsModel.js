//BackEnd/Models/User_Model.js
const mongo = require('mongoose');

const itemSchema = new mongo.Schema({
    name: {
        type: String,
        required: [true, "Item name is must"]
    },

    category: {
        type: String,
        required: [true, "Category is must"],
    },

    oldPrice: {
        type: Number,
        required: [true, 'Price is required'],
    },
    
    newPrice: {
        type: Number,
        required: [false, 'New Price is not mandatory'],
        default:0
    },

    rating: {
        type: Number,
        required: [false, 'rating is not mandatory'],
        default:0.0
    },
    
    ImageLink: {
        type: [String],
        required: [true, 'Images are required'],
    }
})


const userModel = mongo.model('Items', itemSchema)

module.exports = userModel;
        // unique: true