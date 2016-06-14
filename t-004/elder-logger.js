
var logger = function (req, res, next) {
  console.log([
    new Date().toISOString(),  // The date of the request
    req.method,                // HTTP Verb
    req.originalUrl            // Request path
  ].join("  "));
  next();
};


module.exports = logger;
