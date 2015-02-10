'use strict';

var transforms = require('../lib/transform');
var expect = require('chai').expect;
var readFile = require('../lib/read_file');

describe("maxRed function" , function () {
  it("should change the R palette value to 255" , function () {
    transforms.maxRed(readFile.bitmapObject);
    for (var i = 0; i < 256; i++){
      expect(readFile.bitmapObject.palette[i].R).to.eql(255);
    };
  });
});

describe("maxGreen function" , function () {
  it("should change the G palette value to 255" , function () {
    transforms.maxGreen(readFile.bitmapObject);
    for (var i = 0; i < 256; i++){
      expect(readFile.bitmapObject.palette[i].G).to.eql(255);
    };
  });
});

describe("maxBlue function" , function () {
  it("should change the B palette value to 255" , function () {
    transforms.maxBlue(readFile.bitmapObject);
    for (var i = 0; i < 256; i++){
      expect(readFile.bitmapObject.palette[i].B).to.eql(255);
    };
  });
});

describe("randomize function" , function () {
  it("should change the palette" , function () {
    var originalPalette = readFile.bitmapObject
    var newPalette = transforms.randomize(readFile.bitmapObject);
    expect(originalPalette).to.not.eql(newPalette);
  });
})
