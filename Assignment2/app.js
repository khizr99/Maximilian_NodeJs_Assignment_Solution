/*
PART-1. Create a npm project and install Express.js(Nodemon if you want)
*/

//SOLUTION:-

/*
Commands:

...CREATING A NPM PROJECT
i. npm init
ii. npm start //Optional. Used in Local version. 
iii. npm run start-server //Optional. Used in Local version. 

...INSTALLING Nodemon AND Express.js
i. npm install --save-dev nodemon(development dependency) 
    or npm install --save nodemon(production dependency) or npm install -g nodemon(global dependency)

ii. Use nodemon app.js(where app.js file is entry point) to start the server if the version is global otherwise use npm start.
iii. npm install --save express or npm install express or npm i express
*/

/*
PART-2. Create an Express.js app which funnels the requests through 2 middleware functions that
    log something to the console and return one response
*/

const http = require('http');
const express = require('express');
const app = express();

app.use((req,res,next)=> {
    console.log("Hello! This is first MiddleWare");
    next();
});
app.use((req,res,next)=> {
    console.log("Hello! This is second MiddleWare");
    res.send("<p>Hello! I am returning a response from 2nd MiddleWare</p>")
});
const server = http.createServer(app);

server.listen(3000);
/*
PART-3. Handle requests to "/" and "/users" such that each requests only has one handler/middleware
    that does something with it(e.g. send dummy response).
*/

const express = require('express');
const app = express();

app.use('/users', (req,res,next)=> {
    res.send('<h1>Hello! This is a 1st dummy response</h1>');
    
});
app.use('/', (req,res,next)=> {
   res.send('<h1>Hello! This is a 2nd dummy response</h1>'); 
});

app.listen(3000);// Instead using [const server = http.createServer(app); server.listen(3000);]

