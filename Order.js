//ITCS227 Source Code Template for AT AY 2022-2023
/*

    Program: E-commerce API
    Programmer: Maria Elizabeth Genabe
    Section: AN22
    Start Date: July 16, 2023
    End Date: July 17, 2023

*/
//1:30AM
// Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      productName: String,
      quantity: Number,
    },
  ],
  totalAmount: Number,
  purchasedOn: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
