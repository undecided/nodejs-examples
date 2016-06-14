
// ==== EDIT THIS LINE ====
const STATIC_ROOT="../"
// ========================


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// ==== THIS IS THE LINE THAT DOES ALL THE HARD WORK ====
app.use(express.static(path.join(__dirname, STATIC_ROOT)));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

console.log("==== Instructions ====");
console.log("This project serves static files. Currently, it will serve everything in the nodejs examples.");
console.log("For example, point your browser to http://localhost:3000/t-001/input.txt");
console.log("To change the served directory, edit app.js - at the top of the file is a constant.");
console.log("Edit that, then restart this server to see the changes take effect.");
