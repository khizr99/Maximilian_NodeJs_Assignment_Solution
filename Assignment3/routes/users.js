const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();


router.get('/users', (req,res,next) => {
    res.sendFile(path.join(rootDir,'views','AddUser.html'));
});

router.post('/users', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});




module.exports = router;