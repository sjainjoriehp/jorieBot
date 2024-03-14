
const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const bcrypt=require('bcrypt')
var app = express()

app.use(cors())


//Code to generate a secret token
// async function encry(){
//   const salt = await bcrypt.genSalt(10);
// const secPass = await bcrypt.hash(process.env.SECRET_TOKEN, salt);
// const passwordCompare =await bcrypt.compare(process.env.SECRET_TOKEN,"$2b$10$NjAWi4RnyE9dAMD/PTtz2.4Jl7/v0YeyV10LSHojyYJhTZnxpWlou")
// console.log(passwordCompare)
// }

// console.log("Secret key",encry())



//connectToMongo
const port = process.env.PORT||5000

app.use(express.json())

//Routes
app.use('/api',require('./routes/BotInfo.Route'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ss', (req, res) => {
  res.send('Hello ss!')
})

app.listen(port, () => {

  connectToMongo();
  console.log(`ChatBot Backend app listening on port ${port}`)
})
