/*
4. Add the "/create-user" route and parse the incoming data(i.e. the username) and 
    simply log it to the console
*/

const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  // Send a HTML response with some "Page not found text
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
        console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(3000);
