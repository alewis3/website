/**
 * @apiDefine 500 Error 500
 * Server Error.
 */

/**
 * @apiDefine SuccessfulUpdate
 *
 * @apiSuccessExample UpdatedResponse:
 *      HTTP/1.1 200 OK
 *      {
 *          "success": true
 *      }
 */

/** @apiDefine ServerError
 *
 * @apiErrorExample ServerError:
 *      HTTP/1.1 500 INTERNAL SERVER ERROR
 *      {
 *          "success": false,
 *          "error": {
 *              // An error object will be here
 *          }
 *      }
 */

/**
 * @api {get} /api/courses Get Courses
 * @apiName GetCourses
 * @apiGroup Courses
 * @apiDescription This endpoint will be called when the page needs to load all courses
 *
 * @apiSuccess {Boolean} success Will be true if the courses were grabbed from the DB
 * @apiSuccess {String} courses The courses from the db
 * @apiSuccess {String} courses._id The id of that course
 * @apiSuccess {String} courses.courseNumber The course number of that course
 * @apiSuccess {String} courses.courseName The name of that course
 * @apiSuccess {String} courses.semesterTaken The semester that course was taken
 * @apiSuccess {String} courses.grade The grade of that course
 * @apiSuccess {String} courses.semesterInt An int representing what semester I took that course (for ordering purposes)
 *
 * @apiError (500) {Boolean} success Will be false if the items could not be grabbed for some reason.
 * @apiError (500) {Object} error An error object with more information on the failure.
 *
 * @apiSuccessExample SuccessResponse:
 *      HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "courses": [
 *              {
 *                  "_id": "5db64007b8772b92c71b1506",
 *                  "courseNumber": "COSC 1123",
 *                  "courseName": "Concepts I Lab",
 *                  "semesterTaken": "Fall 2016",
 *                  "grade": "A",
 *                  "semesterInt": 1
 *              },
 *              {
 *                  "_id": "5db64007b8772b92c71b1506",
 *                  "courseNumber": "COSC 1323",
 *                  "courseName": "Concepts I",
 *                  "semesterTaken": "Fall 2016",
 *                  "grade": "A",
 *                  "semesterInt": 1
 *              }
 *          ]
 *      }
 * @apiUse ServerError
 */

/**
 * @api {post} /api/course Create a new course entry
 * @apiName PostCourse
 * @apiGroup Courses
 * @apiDescription This endpoint will be called when a new course is to be made.
 *
 * @apiParam {String} courseNumber The number of the course
 * @apiParam {String} courseName The name of the course
 * @apiParam {String} semesterTaken The semester the course was taken
 * @apiParam {String} grade The grade of the course
 * @apiParam {Number} semesterInt The int representing what semester the course was taken
 *
 * @apiSuccess {Boolean} success Will be true if the course info could be saved
 *
 * @apiError (500) {Boolean} success Will be false if the items could not be set for some reason.
 * @apiError (500) {Object} error An error object with more information on the failure.
 *
 * @apiUse SuccessfulUpdate
 * @apiUse ServerError
 */

/**
 * @api {post} /api/courses Create multiple new course entries
 * @apiName PostCourses
 * @apiGroup Courses
 * @apiDescription This endpoint will be called when multiple new courses are to be made.
 *
 * @apiParam {Object[]} courses The list of courses to add
 * @apiParam {String} courses.courseNumber The number of the course
 * @apiParam {String} courses.courseName The name of the course
 * @apiParam {String} courses.semesterTaken The semester the course was taken
 * @apiParam {String} courses.grade The grade of the course
 * @apiParam {Number} courses.semesterInt The int representing what semester the course was taken
 *
 * @apiSuccess {Boolean} success Will be true if all course info could be saved
 *
 * @apiError (500) {Boolean} success Will be false if the items could not be set for some reason.
 * @apiError (500) {Object} error An error object with more information on the failure.
 *
 * @apiUse SuccessfulUpdate
 * @apiUse ServerError
 */

/**
 * @api {get} /api/madLib Get Random Madlibs
 * @apiName GetMadlibs
 * @apiGroup MadLibs
 * @apiDescription This endpoint will be called when the page needs to load all courses
 *
 * @apiSuccess {Boolean} success Will be true if the courses were grabbed from the DB
 * @apiSuccess {String} courses The courses from the db
 * @apiSuccess {String} courses._id The id of that course
 * @apiSuccess {String} courses.courseNumber The course number of that course
 * @apiSuccess {String} courses.courseName The name of that course
 * @apiSuccess {String} courses.semesterTaken The semester that course was taken
 * @apiSuccess {String} courses.grade The grade of that course
 * @apiSuccess {String} courses.semesterInt An int representing what semester I took that course (for ordering purposes)
 *
 * @apiError (500) {Boolean} success Will be false if the items could not be grabbed for some reason.
 * @apiError (500) {Object} error An error object with more information on the failure.
 *
 * @apiSuccessExample SuccessResponse:
 *      HTTP/1.1 200 OK
 *      {
 *          "success": true,
 *          "courses": [
 *              {
 *                  "_id": "5db64007b8772b92c71b1506",
 *                  "courseNumber": "COSC 1123",
 *                  "courseName": "Concepts I Lab",
 *                  "semesterTaken": "Fall 2016",
 *                  "grade": "A",
 *                  "semesterInt": 1
 *              },
 *              {
 *                  "_id": "5db64007b8772b92c71b1506",
 *                  "courseNumber": "COSC 1323",
 *                  "courseName": "Concepts I",
 *                  "semesterTaken": "Fall 2016",
 *                  "grade": "A",
 *                  "semesterInt": 1
 *              }
 *          ]
 *      }
 * @apiUse ServerError
 */