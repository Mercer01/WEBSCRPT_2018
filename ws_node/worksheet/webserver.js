const http = require('http');
const url = require('url');
const util = require('./utility');

const server = http.createServer(
  (request, response) => {
    const parsedUrl = url.parse(request.url, true);
    if (parsedUrl.pathname === '/add') {
      response.setHeader("Content-Type", "text/plain");
      let sum = util.add(parseFloat(parsedUrl.query.a), parseFloat(parsedUrl.query.b));
      response.end(sum.toString());
    } else {
      response.statusCode = 404;
      response.end('Not found!\n');
    }
  }
);
server.listen(8080);
// then go to http://localhost:8080/hello
// and http://localhost:8080/foo