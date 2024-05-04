const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
    })

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})

app.get('/portfolio', (req, res) => {
    res.sendFile(__dirname + '/public/portfolio.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})

app.listen(80, ()=>{
    console.log("Server running at http://127.0.0.1")
})