var express = require('express');
var router = express.Router();
var path = require("path");
// Use at least Nodemailer v4.1.0
const nodemailer = require('nodemailer');
let mongoose = require('mongoose');

let Course = require('../models/course');
let MadLib = require('../models/madlib');

router.options('/courses', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
    res.setHeader("Access-Control-Max-Age", "1728000");
    res.status(200).send();
});

router.get('/courses', async function(req, res) {

  var allowedOrigins = ['https://amandalewisdev.com', 'https://dev.amandalewisdev.com'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  await Course.find().lean().sort({semesterInt: 1}).exec(
      function (err, query) {
          if (err) {
              return res.status(400).json({"success": false, "error": err});
          }
          else {
              return res.status(200).json({"success": true, "courses": query});
          }
      }
  );
});

router.post('/course', function(req, res) {
  var newCourse = new Course({
    courseNumber: req.body.courseNumber,
    courseName: req.body.courseNumber,
    semesterTaken: req.body.semesterTaken,
    grade: req.body.grade
  });
  newCourse.save(function(err, data) {
    if (err) {
      console.log(err);
      res.status(400).send({"success": false, "error": err});
    } 
    else {
      console.log(data);
      res.status(201).send({"success": true});
    }
  });
});

router.post('/courses', function(req, res) {
    var body = req.body;
    var added = true;
    for(var i = 0; i < body.courses.length; i ++) {
        var newCourse = new Course({
            courseNumber: body.courses[i].courseNumber,
            courseName: body.courses[i].courseNumber,
            semesterTaken: body.courses[i].semesterTaken,
            grade: body.courses[i].grade
        });
        newCourse.save(function(err) {
            if (err) {
                console.log(err);
                added = false;
                res.status(400).send({"success": false, "error": err});
            }
        });
    }
    if (added) {
        res.status(201).json({"success": true});
    }
    else {
        res.status(400).send({"success": false});
    }
});

router.options('/madLib', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
    res.setHeader("Access-Control-Max-Age", "1728000");
    res.status(200).send();
});

/**
 * Gets a random madlib based on javascript's math random number generator
 */
router.get('/madLib', async function (req, res) {

    var allowedOrigins = ['https://amandalewisdev.com', 'https://dev.amandalewisdev.com'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    MadLib.countDocuments({}).exec(function (err, count) {
        if (count > 0) {
            var random = Math.floor(Math.random() * count);

            MadLib.findOne().skip(random).exec(
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    else {
                        console.log(result);
                        res.status(200).json(result);
                    }
                });
        }
    })
});

/**
 * Gets all mad libs in the collection. only for PoC, will probably not be used
 */
router.get('/madLibs', async function (req, res) {

    MadLib.find({}).exec(
        function (err, result) {
            if (err) {
                console.log(err);
                return res.status(400).json({"success": false, "error": err});
            }
            else {
                console.log(result);
                return res.status(200).json({"success": true, "madLibs": result});
            }
        });
});

/**
 * Inserts a mad lib into the db
 */
router.post('/madLib', function (req, res) {
    var body = req.body;
    var newMadLib = new MadLib(body);
    newMadLib.save(function(err, data) {
        if (err) {
            console.log(err);
            res.status(400).send({"success": false, "error": err});
        }
        else {
            console.log(data);
            res.status(201).send({"success": true});
        }
    });
});

module.exports = router;
