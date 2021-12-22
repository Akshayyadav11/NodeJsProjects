var express = require('express')

var app = express()


app.get('/', function(req, res) {
    res.send('Hello world');
})

app.get('/alien', function(req, res) {
    res.send('Hello alien');
})

app.listen(9000, function(req, res) {
    console.log("server started");
})