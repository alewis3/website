var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseNumber: {
        type: String,
        minlength: 9,
        maxlength: 9,
    },
    courseName: {
        type: String
    },
    semesterTaken: {
        type: String
    },
    semesterInt: {
        type: Number
    },
    grade: {
        type: String
    }
});

var courseModel = mongoose.model('Course', courseSchema);

module.exports = courseModel;