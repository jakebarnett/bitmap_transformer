'use strict';

var fs = require('fs'),
  buffer = fs.readFileSync(process.argv[2] || "test.bmp"),
  app = exports = module.exports = {}; //jshint ignore: line

/*creates a an object from the .bmp file containing header info and a palette
array.*/
var bitmapObject = {};
bitmapObject.type = buffer.toString('utf-8' , 0 , 2);
bitmapObject.size = buffer.readUInt32LE(2);
bitmapObject.startOfPixels = buffer.readUInt32LE(10);
bitmapObject.width = buffer.readUInt32LE(18);
bitmapObject.height = buffer.readUInt32LE(22);
bitmapObject.colorDepth = buffer.readUInt16LE(28);
bitmapObject.paletteSize = buffer.readUInt32LE(46);
bitmapObject.headerSize = buffer.readUInt32LE(14);
bitmapObject.palette = [];

for(var i = 0; i < 256; i++){
  bitmapObject.palette[i] = {
    R : buffer.readUInt8(54 + i),
    G : buffer.readUInt8(54 + i + 1),
    B : buffer.readUInt8(54 + i + 2),
    A : buffer.readUInt8(54 + i + 3),
  };
}

app.bitmapObject = bitmapObject;

