var express = require('express')
var app = express()
require('dotenv').config()

app.use(express.static('public'));

app.get('/maps_api_key', function (req, res) {
  const API_KEY = String(process.env.API_KEY)
  console.log("Sending API KEY: " + API_KEY)
  res.type('text/plain')
  res.send(API_KEY)
})

app.listen(3000, function () {
  console.log('Started samples on port 3000')
})
