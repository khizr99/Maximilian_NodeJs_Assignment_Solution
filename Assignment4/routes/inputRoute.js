const express = require('express');
const router = express.Router();

const names = [];

router.get('/', (req,res,next) => {
    res.render('inputUser', {
        pageTitle: 'Form For Users',
        path: '/'
    });
});

router.post('/', (req,res,next) => {
    names.push({name: req.body.name});
    res.redirect('/users');
});

exports.routes = router;
exports.names = names;
