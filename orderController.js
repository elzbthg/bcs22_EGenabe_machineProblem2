//ITCS227 Source Code Template for AT AY 2022-2023
/*

    Program: E-commerce API
    Programmer: Maria Elizabeth Genabe
    Section: AN22
    Start Date: July 16, 2023
    End Date: July 17, 2023

*/
//1:30AM
// orderController.js
const Order = require('../models/Order');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    // Get order data from request body
    const { userId, products, totalAmount } = req.body;

    // Create a new order
    const order = new Order({ userId, products, totalAmount });

    // Save the order to the database
    await order.save();

    res.status(201).json({ message: 'Order created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Retrieve authenticated user's orders
exports.getUserOrders = async (req, res) => {
  try {
    // Get user ID from request params
    const { userId } = req.params;

    // Find all orders associated with the user in the database
    const orders = await Order.find({ userId });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user orders' });
  }
};

// Retrieve all orders (admin only)
exports.getAllOrders = async (req, res) => {
  try {
    // Find all orders in the database
    const orders = await Order.find();

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving all orders' });
  }
};
