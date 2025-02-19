require('dotenv').config();
const mongoose = require('mongoose');
const user = require('./Models/USerModel');

// MongoDB connection
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully!");
        insertData();
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });


const users = [
    {
        id: "1",
        name: "Faiq Dogar",
        email: "faiqd17@gmail.com",
        password: "fzfzfzfz",
        cart: {
            id: [
                2,
                7,
                6,
                4
            ],
            quantity: [
                2,
                1,
                1,
                1
            ]
        }
    },
    {
        id: "2",
        name: "Abdullah",
        email: "abii@gmail.com",
        password: "abiiabii",
        cart: {
            id: [
                3
            ],
            quantity: [
                1
            ]
        }
    },
    {
        id: "8f32",
        name: "Harry Poter",
        email: "harry@gmail.com",
        password: "harryharry",
        cart: {
            id: [
                0,
                5
            ],
            quantity: [
                0,
                1
            ]
        }
    }

];

const insertData = async () => {
    try {
        await user.insertMany(users);
        console.log("Data inserted successfully!");
        mongoose.disconnect();
    } catch (error) {
        console.error("Error inserting data:", error);
        mongoose.disconnect();
    }
};

