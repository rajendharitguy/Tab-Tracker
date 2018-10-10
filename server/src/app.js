const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combind'))
app.use(bodyParser.json())
app.use(cors())

app.get('/req', (req, res) => {
  res.send({
    message: 'hello world i am coming'
  })
})

app.listen(process.env.PORT || 8081)

// Run app, then load http://localhost:port in a browser to see the output.
