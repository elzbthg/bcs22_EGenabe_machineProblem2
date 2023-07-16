//ITCS227 Source Code Template for AT AY 2022-2023
/*

    Program: E-commerce API
    Programmer: Maria Elizabeth Genabe
    Section: AN22
    Start Date: July 16, 2023
    End Date: July 17, 2023

*/
//1:30AM
// productController.js
const Product = require('../models/Product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    // Get product data from request body
    const { name, description, price } = req.body;

    // Create a new product
    const product = new Product({ name, description, price });

    // Save the product to the database
    await product.save();

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
};

// Retrieve all products
exports.getAllProducts = async (req, res) => {
  try {
    // Find all products in the database
    const products = await Product.find();

    res.json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
};

// Retrieve all active products
exports.getActiveProducts = async (req, res) => {
  try {
    // Find all active products in the database
    const activeProducts = await Product.find({ isActive: true });

    res.json({ activeProducts });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving active products' });
  }
};
