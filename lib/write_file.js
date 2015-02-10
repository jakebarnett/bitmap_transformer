'use strict';

var fs = require('fs'),
  app = exports = module.exports = {}; //jshint ignore: line

//writes the new palette info to the buffer
app.rewriteBuffer = function (bitmapObject, buffer) {
  for (var i = 0; i < 256; i += 4){
    buffer.writeUInt8(bitmapObject.palette[i].R, 54 + i);
    buffer.writeUInt8(bitmapObject.palette[i].G, 54 + i + 1);
    buffer.writeUInt8(bitmapObject.palette[i].B, 54 + i + 2);
    buffer.writeUInt8(bitmapObject.palette[i].A, 54 + i + 3);
  }
};

app.writeFile = function (newFile, buffer) {
  fs.writeFileSync(newFile , buffer);
};
