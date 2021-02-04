const http = require('http');
const fs = require('fs')

const hostname = '10.0.0.108';
const port = 3000;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/html');
  fs.createReadStream('index.html').pipe(res)
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});