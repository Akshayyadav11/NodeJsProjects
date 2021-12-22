// let a = 1,
//     b = 2,
//     c
// console.log('Addition is:')
// c = a + b
// console.log(c);

// var http = require('http')
// var calc = require('./calc.js')

// http.createServer(function(req, res) {
//     result = calc.add(1, 1)
//     res.write("Result : " + result);


//     res.end()

// }).listen(9000)


var fs = require('fs')

fs.readFile('calc.js', 'utf8', function(err, data) {
    console.log(data);
})

fs.writeFile('calc1.js', 'console.log("data write")', function(err, data) {
    console.log('file saved');
})


// fs.appendFile('calc.js', 'console.log("data write")', function(err, data) {
//     console.log('file saved');
// })

fs.unlink('calc1.js', function(err) {
    console.log('deleted');
})