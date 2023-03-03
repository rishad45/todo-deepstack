const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('./dbConnect')
const http = require('http')

const indexRoute = require('./Route/index')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(cors(
    {
        origin: 'http://localhost:3000', // allow the server to accept request from different origin
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // allow session cookie from browser to pass through
    },
));
dbConnect()
app.use('/', indexRoute);
const server = http.createServer(app)
server.listen(5000, () => {
    console.log('Server started')
})


module.exports = app