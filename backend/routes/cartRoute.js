const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { addToCart, removeFromCart, getCartItem } = require('../controller/cartController');





const cartRouter = express.Router();



cartRouter.post('/addtocart',authMiddleware,addToCart)
cartRouter.post('/removefromcart',authMiddleware,removeFromCart)
cartRouter.post('/getcartitem',authMiddleware,getCartItem)


module.exports = cartRouter;