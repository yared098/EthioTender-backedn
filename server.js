// server.js
const express = require('express');
const cors = require('cors');
const tenderRoutes = require('./routes/tenderRoutes'); // Import routes

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // For parsing application/json

// Use tender routes
app.use('/api', tenderRoutes); // Prefix all routes with /api

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
