// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes'); 
const logger = require('./middleware/logger');  // Custom logger middleware
const auth = require('./middleware/auth');  // Custom authentication middleware 
const errorHandler = require('./middleware/errorHandler');  // Custom error handling middleware 


// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware setup
app.use(bodyParser.json());
app.use(logger);     // Logs every request
app.use(auth);       // Checks for authentication


// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});


// Routes
app.use('/api/products', productRoutes);

// Error Handler (must be last)
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

