const express = require("express");
const router = express.Router();
const userModel = require("../../Models/USerModel");

const getUserById = async (req, res, next) => {
    try {
        console.log("Inside getUserById's Try block");
        const _id = req.params.id;
        const user = await userModel.findById(_id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        console.log(user);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getUserById;