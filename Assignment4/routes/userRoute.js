const express = require('express');
const userData = require('./inputRoute');
const router = express.Router();


router.get('/users', (req,res,next) => {
    const names = userData.names;
    res.render('userList', {
        naam: names,
        pageTitle: 'List of Users',
        path: '/users'
    });
});


module.exports = router;