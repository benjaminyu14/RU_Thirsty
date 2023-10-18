const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const waterDropletRoutes = require('/Users/noobd/ruthirsty-app/RU_Thirsty/ruthirsty/server/WaterDropletRoutes'); // Import your routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection setup (in db.js)
require('./db'); // Assuming your MongoDB connection setup code is in db.js

// Routes
app.use('/Users/noobd/ruthirsty-app/RU_Thirsty/ruthirsty/server/WaterDropletRoutes', waterDropletRoutes); // Use your water droplet routes at /api/waterDroplets

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
