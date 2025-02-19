const express = require("express");
const router = express.Router();
const userModel = require("../../Models/USerModel");

const updateUserCart = async (req, res) => {
    console.log("inside updateUserCart");
    const userId = req.params.id;
    const { item_id } = req.body;
    console.log("user id: ", userId);
    console.log("item id: ", item_id);

    try {
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (!user.cart.id.includes(item_id)) {
            user.cart.id.push(item_id);
            user.cart.quantity.push(1);
        }

        await user.save();

        res.status(200).json({ message: 'Cart updated successfully', user: user });
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = updateUserCart;