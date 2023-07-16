//ITCS227 Source Code Template for AT AY 2022-2023
/*

		Program: E-commerce API
		Programmer: Maria Elizabeth Genabe
		Section: AN22
		Start Date: July 16, 2023
		End Date: July 17, 2023

*/
//1:30AM
// orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/', orderController.createOrder);

// Retrieve authenticated user's orders
router.get('/user/:userId', orderController.getUserOrders);

// Retrieve all orders (admin only)
router.get('/all', orderController.getAllOrders);

module.exports = router;
