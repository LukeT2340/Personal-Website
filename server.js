// Import express module
const express = require('express')

// Create new app
const app = express()

// Get app to use the static files in the /public directory
app.use(express.static(__dirname + '/public'))

// Website home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    })