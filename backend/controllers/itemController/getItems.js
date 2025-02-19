const express = require("express");
const router = express.Router();
const itemModel = require("../../Models/ItemsModel");

const getAllItems = async (req, res, next) => {
    try {
        console.log("Inside getAllItems' Try block");
        const allitems = await itemModel.find();
        console.log(allitems);
        return res.status(200).json(allitems);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = getAllItems;