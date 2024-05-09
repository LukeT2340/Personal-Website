// Import express module
const express = require('express');
const path = require('path');

// Create new app
const app = express();

// Get app to use the static files in the /public directory
app.use(express.static(path.join(__dirname, 'public')));

// Website home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use process.env.PORT if it exists, otherwise use port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
