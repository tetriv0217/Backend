require('dotenv').config()
const express = require('express') //common js
// import express from "express"//This is module js
const app = express()

const port = 4000

const tejas = {
    name:"Tejas",
    work : "Developer"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('tejasdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Tejas is the best</h1>')
})
app.get('/github',(req,res)=>{
    res.json({tejas})
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port http://localhost:${process.env.PORT} `)
})