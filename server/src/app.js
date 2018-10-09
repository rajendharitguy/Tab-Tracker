
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/req', (req, res) => {
  res.send('Hello ghng World!')
})

app.listen(process.env.PORT || 8081)

// Run app, then load http://localhost:port in a browser to see the output.
