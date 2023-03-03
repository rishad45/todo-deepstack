const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('./dbConnect')
const app = express()
const http = require('http')
const indexRoute = require('./Route/index')
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
))
dbConnect()
const server = http.createServer(app)
server.listen(5000, () => {
    console.log('Server started')
})


module.exports = app