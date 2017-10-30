// part 3 - using fs.readFileSync
var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2])
console.log(fileContents.toString().split('\n').length-1)


// part 4 - using fs.readFileSync
fs.readFile(process.argv[2], function(error, data) {
  if(error) {
    console.log('error')
    throw error
  } else {
    console.log(data.toString().split('\n').length-1)
  }
})
