var express = require('express');
var router = express.Router();
var path = require("path");
// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');
let mongoose = require('mongoose');
require('../schemas/courseSchema');
let Course = mongoose.model('Course');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../files/index.html'));
});

router.get('/style.css', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../files/style.css'));
});

router.get('/execute.js', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../files/execute.js'));
});

router.get('/images/cover.png', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../files/images/cover.png'));
});

router.get('/images/linkedin.jpg', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../files/images/linkedin.jpg'));
});

router.options('/sendEmail', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
  res.setHeader("Access-Control-Max-Age", "1728000");
  res.status(200).send();
});

router.post('/sendEmail', function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  console.log(req.body);
  testmail(req.body.fname, req.body.lname, req.body.email, req.body.subject, req.body.message);
  res.status(200).send(req.body);
});

router.get('/courses', async function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  var query = await Course.find({}).sort({courseNumber: 1}).exec();
  res.status(200).send(query);
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
          text: "Hey",
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
