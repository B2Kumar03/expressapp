require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req,res)=>{
    res.send("<h1>Please login before going to cart page.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})