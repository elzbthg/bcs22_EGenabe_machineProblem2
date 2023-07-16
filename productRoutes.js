//ITCS227 Source Code Template for AT AY 2022-2023
/*

		Program: E-commerce API
		Programmer: Maria Elizabeth Genabe
		Section: AN22
		Start Date: July 16, 2023
		End Date: July 17, 2023

*/
//1:30AM
// productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/', productController.createProduct);

// Retrieve all products
router.get('/', productController.getAllProducts);

// Retrieve all active products
router.get('/active', productController.getActiveProducts);

module.exports = router;
