var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://amanda:' + encodeURIComponent(process.env.MONGO_PW) + '@localhost:27017/courses?authSource=admin&w=1', {useNewUrlParser: true, useUnifiedTopology: true }, function (error) {

  if (error) console.log(error);
  else
    console.log(" **** DB connection successful ****");
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);

app.use('public', express.static(path.join(__dirname, 'client/public')));

//production mode
if(process.env.NODE_ENV === 'production') {   
    app.use(express.static(path.join(__dirname, 'client/build'))); 
    app.get('/', (req, res) => {    
        res.sendFile(path.join(__dirname + 'client/build/index.html'));  
    });
}
else {
  app.get('/', (req, res) => {  
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  });
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.disable('etag');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
