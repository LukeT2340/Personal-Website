// Import express module
const express = require('express')

// Create new app
const app = express()

// Get app to use the static files in the /public directory
app.use(express.static(__dirname + '/public'))

// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
    })

// About me page
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})

// Projects page
app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/public/projects.html')
})

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

// Run server
app.listen(80, ()=>{
    console.log("Server running at http://127.0.0.1")
})