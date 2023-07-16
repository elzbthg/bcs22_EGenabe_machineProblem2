//ITCS227 Source Code Template for AT AY 2022-2023
/*

    Program: E-commerce API
    Programmer: Maria Elizabeth Genabe
    Section: AN22
    Start Date: July 16, 2023
    End Date: July 17, 2023

*/
//1:30AM
// authUtils.js
const jwt = require('jsonwebtoken');

// Generate JWT token
const generateToken = (userId, isAdmin) => {
  const payload = {
    userId,
    isAdmin,
  };

  // Sign the token with a secret key
  const token = jwt.sign(payload, 'your-secret-key', { expiresIn: '1h' });

  return token;
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
