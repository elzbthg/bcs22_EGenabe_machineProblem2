//ITCS227 Source Code Template for AT AY 2022-2023
/*

		Program: E-commerce API
		Programmer: Maria Elizabeth Genabe
		Section: AN22
		Start Date: July 16, 2023
		End Date: July 17, 2023

*/
//1:30AM
// cartRoutes.js
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Add product to cart
router.post('/add', cartController.addToCart);

// Change product quantity in cart
router.put('/change-quantity', cartController.changeProductQuantity);

// Remove product from cart
router.delete('/remove', cartController.removeFromCart);

module.exports = router;
