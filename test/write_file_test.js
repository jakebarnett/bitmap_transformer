'use strict';

var expect = require('chai').expect,
  writeFile = require('../lib/write_file'),
  readFile = require('../lib/read_file'),
  fs = require('fs');

describe("app.rewriteBuffer" , function () {
  it("should write the new palette info into the buffer", function () {
    var buffer = fs.readFileSync("test.bmp");
    var newBuffer = writeFile.rewriteBuffer(readFile.bitmapObject, buffer);
    expect(buffer).to.not.eql(newBuffer);
  });
})
