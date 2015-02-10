'use strict';

var readFile = require('../lib/read_file.js');
var expect = require("chai").expect;


describe("read_file.js" , function () {

  it("should create an object" , function () {
    expect(typeof(readFile.bitmapObject)).to.eql("object");
  });

  it("should have 256 colors in the palette", function () {
    expect(readFile.bitmapObject.palette.length).to.eql(256);
  });
})
