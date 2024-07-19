// require('dotenv').config();
// const mongoose = require('mongoose');
// const Item = require('./Models/ItemsModel');

// // MongoDB connection
// mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB connected successfully!");
//     insertData();
//   })
//   .catch(error => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// const products = [
//   {
//     id: 1,
//     name: "White Shirt",
//     category: "men",
//     oldPrice: 700,
//     newPrice: 0,
//     rating: 4
//   },
//   {
//     id: 2,
//     name: "Black Watch",
//     category: "watches",
//     oldPrice: 700,
//     newPrice: 550,
//     rating: 3.5
//   },
//   {
//     id: 3,
//     name: "IPhone 15 pro",
//     category: "phone",
//     oldPrice: 700,
//     newPrice: 0,
//     rating: 5
//   },
//   {
//     id: 4,
//     name: "Benson",
//     category: "watches",
//     oldPrice: 700,
//     newPrice: 0,
//     rating: 4.5
//   },
//   {
//     id: 5,
//     name: "Infinix Hot 10 Play",
//     category: "phone",
//     oldPrice: 21000,
//     newPrice: 19500,
//     rating: 4
//   },
//   {
//     id: 6,
//     name: "Women White Shirt",
//     category: "women",
//     oldPrice: 700,
//     newPrice: 500,
//     rating: 4
//   },
//   {
//     id: 7,
//     name: "Controller",
//     category: "gaming",
//     oldPrice: 1500,
//     newPrice: 1200,
//     rating: 2
//   },
//   {
//     id: 9,
//     name: "Audionic super headphone",
//     category: "headphones",
//     oldPrice: 700,
//     newPrice: 0,
//     rating: 3
//   }
// ];

// const insertData = async () => {
//   try {
//     await Item.insertMany(products);
//     console.log("Data inserted successfully!");
//     mongoose.disconnect();
//   } catch (error) {
//     console.error("Error inserting data:", error);
//     mongoose.disconnect();
//   }
// };

