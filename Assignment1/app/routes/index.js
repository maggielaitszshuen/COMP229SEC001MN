/*<!---File name: index.server.routes.js-->
<!---Student name: Tsz Shuen Lai-->
<!---Student ID: 301278443-->
<!---Date: 1 Jun 2023-->*/
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
res.render('about', { title: 'About' });
});

/*
router.get('/products', function(req, res, next) {
res.render('products', { title: 'Products' });
});*/

router.get('/projects', function(req, res, next) {
res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
res.render('contact', { title: 'Contact' });
});

router.get('/services', function(req, res, next) {
res.render('services', { title: 'Services' });
});

// router.get('/redirect', function(req, res, next) {
// res.render('index', { title: 'Home' });
// });

module.exports = router