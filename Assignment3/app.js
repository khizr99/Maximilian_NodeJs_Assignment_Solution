/*
..........Important Bits for this Assignment.................

const path = require('path');

const rootDir = require('../util/path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js)
app.use(bodyParser.urlencoded({extended:false}));//Used for Parsing Incoming Requests
app.use(adminRoutes) or app.use('/admin',adminRoutes)
app.use(express.static(path.join(__dirname,'public')));
res.status(404).send('<h1></h1>');
console.log(req.body);
app.get();
app.post();

...creating routes folder
const rootDir = require('../util/path');
const path = require('path');
const router = express.Router();
router.use();
router.post();
res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
Now, res.sendFile(path.join(rootDir, 'views', 'shop.html'));

module.exports = router;

...creating views folder(It is used to serve the files to the user)
html files
[
   i. body>>header>>nav>>ul>>li
   ii. body>>main>>form(etc.)
]

...Creating Util folder and path.js as file
const path = require('path');

module.exports = path.dirname(process.mainModule.filename); or module.exports = path.dirname(require.main.filename);

...Creating a Public folder for serving static files
*/


/*
1. Create a npm project and install Express.js(Nodemon if you want)
*/

//npm init
//npm i nodemon express

/*
2. Create an Express.js app which serves two HTML files(of your choice/with your content)
    for "/" and "/users"
*/

// const express = require('express');
// const app = express();
// const userListRoutes = require('./routes/userList');
// const usersRoutes = require('./routes/users');

// app.use(usersRoutes);
// app.use(userListRoutes);
// app.use((req,res,next) => {
//     res.status(404).send('<h1>Page Not Found</h1>')
// });
// app.listen(3000);
/*
3. Add some static(.js or .css) files to your project that should be required by at 
    least one of your HTML files.
*/

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userListRoutes = require('./routes/userList');
const usersRoutes = require('./routes/users');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(usersRoutes);
app.use(userListRoutes);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);