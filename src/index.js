const express = require('express');
const { json } = require('express/lib/response');
const routes = require('./routes/routes.js');

const app = express()

app.use(express.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use(routes)

app.listen(process.env.PORT || 5000)