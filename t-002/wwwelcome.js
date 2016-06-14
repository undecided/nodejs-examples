http = require('http');

const PORT = 8080;

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("hello world")
}).listen(PORT)

console.log("==== Instructions ====");
console.log("Point your browser to http://localhost:" + PORT);
