const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../Models/USerModel");

const secret = process.env.KEY;

const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (!name || !email || !password ) {

        return res.status(400).json({ error: "All fields are required." });
    }
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: "User with this email already exists." });
        }


        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const payload = {
            id: newUser._id,
        };
        console.log("Entering JWT");
        console.log("Exiting JWT");
        return res.status(200).json({
            message: "User created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = signup;



        // const token = jwt.sign(payload, process.env.KEY, { expiresIn: "96h" });
            // token: token,