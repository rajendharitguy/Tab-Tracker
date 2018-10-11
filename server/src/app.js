const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `hello world i ${req.body.email} coming`
  })
})

app.listen(process.env.PORT || 1234)

// Run app, then load http://localhost:port in a browser to see the output.
