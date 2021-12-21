// let a = 1,
//     b = 2,
//     c
// console.log('Addition is:')
// c = a + b
// console.log(c);

var http = require('http')

http.createServer(function(req, res) {
    res.write("welcome");
    res.end()

}).listen(9000)