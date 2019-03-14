// @desc public routes
// @routes /index

// require
const express = require('express');
const router = express.Router();
var path = require('path');

// landing page - GET
router.get('/', (req, res) => {
  res.render('index');
});

// projects page - GET
router.get('/projects', (req, res) => {
  res.render('projects');
});

// about page - GET
router.get('/about', (req, res) => {
  res.render('about');
});

// contact page - GET
router.get('/contact', (req, res) => {
  res.render('contact');
});

// set up router
module.exports = router;
