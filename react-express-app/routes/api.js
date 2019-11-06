var express = require('express');
var router = express.Router();
var path = require("path");
// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');
let mongoose = require('mongoose');

let Course = require('../models/course');

router.options('/sendEmail', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
  res.setHeader("Access-Control-Max-Age", "1728000");
  res.status(200).send();
});

router.post('/sendEmail', function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'https://amandalewisdev.com/,https://dev.amandalewisdev.com/');

  console.log(req.body);
  testmail(req.body.first, req.body.last, req.body.email, req.body.subject, req.body.msg);
  res.status(200).send(req.body);
});

router.get('/getCourses', async function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'https://amandalewisdev.com/,https://dev.amandalewisdev.com/');

  var query = await Course.find({}).lean().sort({semesterInt: 1}).exec();
  res.status(200).send({query});
});

router.post('/insertCourse', function(req, res, next) {
  var newCourse = new Course({
    courseNumber: req.body.courseNumber,
    courseName: req.body.courseNumber,
    semesterTaken: req.body.semesterTaken,
    grade: req.body.grade
  });
  newCourse.save(function(err, data) {
    if (err) {
      console.log(err);
      res.status(400).send({"added": "false"});
    } 
    else {
      console.log(data);
      res.status(201).send({"added": "true"});
    }
  });
})

function mail(fname, lname, email, subject, msg) {

  // Create a SMTP transporter object
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'tricklewis66@gmail.com',
           pass: process.env.GMAIL_PWD
       }
   });

  // Message object
  let message = {
      from: fname + ' ' + lname + ' <' + email + '>',
      to: 'Amanda Lewis <amandalewis66@gmail.com>',
      subject: subject,
      html: '<p>' + msg + '</p>'
  };

  transporter.sendMail(message, (err, info) => {
    if(err)
      console.log(err);
    else
      console.log(info);
  });
}

function testmail(fname, lname, email, subject, msg) {

  // Generate SMTP service account from ethereal.email
  nodemailer.createTestAccount((err, account) => {
      if (err) {
          console.error('Failed to create a testing account. ' + err.message);
          return process.exit(1);
      }

      console.log('Credentials obtained, sending message...');

      // Create a SMTP transporter object
      let transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
              user: account.user,
              pass: account.pass
          }
      });

      // Message object
      let message = {
          from: fname + ' ' + lname + ' <' + email + '>',
          to: 'Amanda Lewis <amandalewis66@gmail.com>',
          subject: subject,
          text: msg,
          html: '<p>' + msg + '</p>'
      };

      transporter.sendMail(message, (err, info) => {
          if (err) {
              console.log('Error occurred. ' + err.message);
              return process.exit(1);
          }

          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });
  });
}

module.exports = router;
