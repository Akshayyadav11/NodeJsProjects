var express = require('express')

var app = express()


app.get('/', function(req, res) {
    res.send('Hello world');
})

app.get('/alien', function(req, res) {
    const id = req.query.id
    res.send('Hello alien : ' + id);
})


app.get('/alien/:id', function(req, res) {
    const id = req.params.id

    res.send('Hello alien: ' + id);
})

app.listen(9000, function(req, res) {
    console.log("server started");
})