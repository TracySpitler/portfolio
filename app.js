// include the express dependency then instantiate it
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// set view engine
app.set('view engine', 'ejs');

// public folder for js and css files
app.use(express.static(path.join(__dirname, "public")));

// routes
const index = require('./routes/index');
app.use('/', index);

// 404 error handling
app.use(function(req, res, next) {
  if (!req.route)
    res.status(404).render('fourohfour');
  next();
});

// export the app
module.exports = app;
