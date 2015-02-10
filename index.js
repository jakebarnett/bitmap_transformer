'use strict';

var readFile = require('./lib/read_file.js');
var transform = require('./lib/transform.js');
var writeFile = require('./lib/write_file.js');
var fs = require('fs');

var buffer = fs.readFileSync("./" + process.argv[2]);
var bitmapObject = readFile.bitmapObject;
var newFile = process.argv[3];

if (process.argv[4] == "random") {
  transform.randomize(bitmapObject);
} else if (process.argv[4] == "red") {
  transform.maxRed(bitmapObject);
} else if (process.argv[4] == "green") {
  transform.maxGreen(bitmapObject);
} else if (process.argv[4] == "blue") {
  transform.maxBlue(bitmapObject);
} else {
  console.log("Please provide a color argument");
}

writeFile.rewriteBuffer(bitmapObject, buffer);

writeFile.writeFile(newFile, buffer);
