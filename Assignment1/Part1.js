//1. Spin Up a Node.js-driven Server(on port 3000)

const http = require('http');
const server = http.createServer((req,res) => {
        console.log(req);
});

server.listen(3000);