/* 
2. Handle two Routes: "/" and "/users"
    i. Return some greeting text on "/"
    ii.Return a list of dummy users(e.g. <ul><li>User 1</li></ul>)
*/
const http = require('http');

const server = http.createServer((req,res) => {

    const url = req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><h1>Hello! How are you? </h1></body>');
        res.write('</html>');
        return res.end();
    }

    if(url==='/users'){
        res.write('<html>');
        res.write('<head><title>List of dummy users</title></head>');
        res.write('<body><ul><li>User 1</li></ul><ul><li>User 2</li></ul><ul><li>User 3</li></ul></body>');
        res.write('</html>');    
        return res.end();
    }

});

server.listen(3000);