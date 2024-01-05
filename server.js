const express = require('express')
const bodyParser = require('body-parser');
const app = express()
 const api = require('./server/routes/api')


const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/expensesDB", {
  useNewUrlParser: true,
}).catch((err) => console.log(err)).catch((err) => console.log(err))

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }))
 app.use('/', api)

app.get("/help", function (req, res) {
  console.log("found")
  res.end()
});


const port = 2800
app.listen(port, function () {
  console.log(`Running on port ${port}`)
})