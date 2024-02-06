//console.log("hello world!");
require('dotenv').config() 
const express = require('express')
const app = express()
const port=4000

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/Home',(req, res) =>{
    res.send('home')
})
app.get('/p',(req, res) =>{

res.send("this is profile")
})
app.get('/youtube',(req, res) =>{
res.send("<h1> this is youtube</h1>")
})

app.listen(process.env.PORT,() =>{
    console.log(`listen on port ${port}`)
})