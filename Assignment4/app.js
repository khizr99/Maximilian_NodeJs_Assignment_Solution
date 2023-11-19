/*
1. Create a npm project and install Express.js (Nodemon if you want) and also templating engine
*/

//npm i nodemon express ejs

/*
2. Add two routes:
   i. "/" => Holds a <form> that allows users to input their name
   ii. "/users" => Outputs an <ul> with the usernames (or some error text)
*/
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

const inputUserRoutes = require('./routes/inputRoute');
const outputUserRoutes = require('./routes/userRoute');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(inputUserRoutes.routes);
app.use(outputUserRoutes);
app.use((req,res,next) => {
   res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
