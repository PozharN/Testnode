const http = require('http');

const hostname ='0.0.0.0';
const port = 3000;
var i = 0;

var server=http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
  res.write('Hello World, count=' + i++);
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/  counter=${i}`);
});