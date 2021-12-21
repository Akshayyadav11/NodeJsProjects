// let a = 1,
//     b = 2,
//     c
// console.log('Addition is:')
// c = a + b
// console.log(c);

var http = require('http')
var calc = require('./calc.js')

http.createServer(function(req, res) {
    result = calc.add(1, 1)
    res.write("Result : " + result);


    res.end()

}).listen(9000)