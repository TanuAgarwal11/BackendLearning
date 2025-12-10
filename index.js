// console.log("I am learning Backend");
// using dotenv
require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("I am Tanu Agarwal")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Welcome to youtube </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
