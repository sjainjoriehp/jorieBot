
const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

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
