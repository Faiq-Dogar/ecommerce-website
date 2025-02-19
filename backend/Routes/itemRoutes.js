const express = require('express');

const getItemController = require('./../controllers/itemController/getItems');
const addItemController = require('./../controllers/itemController/addItem');


const ItemRouter = express.Router();

ItemRouter.get("/", getItemController);
ItemRouter.post("/additem", addItemController);



module.exports = ItemRouter;