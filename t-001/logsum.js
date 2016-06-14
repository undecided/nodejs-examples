fs = require('fs');

const filename = process.argv[2];

if(!filename) {
  console.log("Usage: " + process.argv.slice(0,2).join(' ') + " filename.txt");
  process.exit(0);
}

output = {};

fs.readFile(filename, function(err, data) {
  if(err) {
    console.log(err.message);
    console.log("\n == An error occurred. == ")
    console.log("Please check that " + filename + " exists.")
  }

  var contents = data.toString();
  var lines = contents.split(/\s*\r?\n\s*/);

  for(var line of lines) {
    var tokens = line.split(/\s+/).slice(-2);
    if(tokens.length >= 2) {
      var key = tokens[0]
      output[key] = output[key] || 0;
      output[key] += parseInt(tokens[1], 10);
    }
  }
})

process.addListener('exit', function() {
  console.log(output);
})
