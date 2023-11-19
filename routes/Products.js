const express = require('express');
const ProductsRouter = express.Router();
const Controllers = require("../controllers/ProductsController")

ProductsRouter.get('/' , Controllers.getprodacts);
ProductsRouter.get('/:Id' , Controllers.getOneProdact);
ProductsRouter.post('/:id' , Controllers.postOneProdact);


module.exports = ProductsRouter;