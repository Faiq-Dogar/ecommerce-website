const express = require('express');

const loginController = require('../controllers/userController/userLogin');
const signupController = require('../controllers/userController/userSignup');
const getUserById = require('../controllers/userController/getUsers');
const addToCart = require('../controllers/userController/addToCart');

const UserRouter = express.Router();

UserRouter.post("/login", loginController);
UserRouter.post("/signup", signupController);
UserRouter.get("/:id", getUserById);
UserRouter.put("/:id/cart", addToCart);
// // Save User profile
// UserRouter.post("/saveProfile", saveUserProfile);
// // Save interview
// UserRouter.post("/saveInterview", saveUserInterview);
// // Get interview
// UserRouter.get("/interviews:id", getInterviewsbyid);
// // Delete User
// UserRouter.delete("/deleteUser",deleteUser)

module.exports = UserRouter;