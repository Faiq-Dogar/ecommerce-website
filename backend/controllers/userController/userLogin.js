const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../Models/USerModel");

const secret = process.env.KEY;

const login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.log(`email: ${email}, password:${password}`);
        console.log("1st If of login");
        return res.status(400).json({ error: "All fields are required." });
    }
    try {
        console.log("Inside try of login");
        console.log(`email: ${email}, password:${password}`);

        const findUser = await userModel.findOne({ email: email });
        if (!findUser) {
            console.log("2nd If of login");

            return res.status(404).json({
                error: "No such user found",
            });
        }
        console.log("email found");

        // const checkStatus = findUser.isVerified;
        // if (checkStatus == false) {
        //     console.log("3rd If  of login");

        //     return res.status(403).json({
        //         error: "Email isn't verified, kindly first verify your email address",
        //     });
        // }
        // console.log("user is varified");


        // Compare the passwords
        const unhashed = await bcrypt.compare(password, findUser.password);
        if (!unhashed) {
            console.log("Password not matched");

            return res.status(401).json({
                error: "Incorrect password",
            });
        }
        console.log("PAssword Compared");

        //putting user id in pyaload so find user uniquely
        const payload = {
            id: findUser._id,
        };
        console.log("4th If of login");

        // const token = jwt.sign(payload, process.env.KEY, { expiresIn: "96h" });
        console.log("-->>   USer Varified   <<--")
        return res.status(200).json({
            message: "OK Login successful",
            _id: findUser._id,
            email:email
            // token: token,
        });
    }

    catch (e) {
        res.send("Something un-expected happend! " + e)
    }
};
module.exports = login;