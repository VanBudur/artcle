// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route for your worker
app.get('/worker', (req, res) => {
    // Your worker logic here
    res.send('Hello');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Worker server is running on port ${PORT}`);
});
