const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const itemModel = require("../../Models/ItemsModel");

const secret = process.env.KEY;

const addItem = async (req, res, next) => {
    const { itemName, itemCategory, itemPrice } = req.body;
    console.log("Inside additem ",req.body);

    if (!itemName || !itemCategory || !itemPrice ) {

        return res.status(400).json({ error: "All fields are required." });
    }
    try {

        const newItem = await itemModel.create({
            name: itemName,
            category: itemCategory,
            oldPrice: itemPrice,
        });

        const payload = {
            id: newItem._id,
        };

        const allitems = await itemModel.find();

        console.log("Entering JWT");
        console.log("Exiting JWT");
        return res.status(200).json({
            message: "Item added successfully",
            items: allitems
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = addItem;



        // const token = jwt.sign(payload, process.env.KEY, { expiresIn: "96h" });
            // token: token,