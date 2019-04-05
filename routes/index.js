// @desc public routes
// @routes /index

// require
const express = require('express');
const router = express.Router();
var path = require('path');
var nodemailer = require("nodemailer");

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

// contact me - POST
router.post('/contact', (req, res) => {
  var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  var mailOptions = {
    to: process.env.GMAIL_PRIMARY,
    from: process.env.GMAIL_EMAIL,
    subject: 'Portfolio Contact',
    text: 'Someone is trying to contact you from your portfolio:\n\n' +
      'Name: ' + req.body.contactName + '\n' +
      'Email: ' + req.body.contactEmail + '\n' +
      'Message: ' + req.body.contactMessage
  };

  smtpTransport.sendMail(mailOptions, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect('/');
    }
  });
  // function(user, done) {
  //     var smtpTransport = nodemailer.createTransport({
  //       service: 'Gmail',
  //       auth: {
  //         user: process.env.GMAIL_EMAIL,
  //         pass: process.env.GMAIL_PASSWORD
  //       }
  //     });
  //     var mailOptions = {
  //       to: user.username,
  //       from: process.env.GMAIL_EMAIL,
  //       subject: 'Your password has been changed',
  //       text: 'Hello,\n\n' +
  //         'This is a confirmation that the password for your account ' + user.username + ' at SetList has just been changed.\n'
  //     };
  //     smtpTransport.sendMail(mailOptions, function(err) {
  //       req.flash('success', 'Success! Your password has been changed and you are now logged in.');
  //       done(err);
  //     });
  //   }
});

// set up router
module.exports = router;
