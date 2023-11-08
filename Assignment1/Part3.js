/*
3. Add a form withe a "username"<input> to the "/" page and submit a POST request to 
    "/create-user" upon a button click
*/
const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === "/"){
        res.write('<html>');
        res.write('<head><title>MY Form</title></head>');
        res.write('<body><form action"/create-user" method="POST"><input type="text" name="username"></input><button>Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);