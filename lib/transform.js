'use strict';

var  app = exports = module.exports = {}; //jshint ignore: line

//maxes out the R value of each color in the palette array.
app.maxRed = function (bitmapObject) {
  for(var i = 0; i<256; i++) {
   bitmapObject.palette[i].R = 255;
  }
};

//maxes out the R value of each color in the palette array.
app.maxGreen = function (bitmapObject) {
  for(var i = 0; i<256; i++) {
   bitmapObject.palette[i].G = 255;
  }
};

//maxes out the R value of each color in the palette array.
app.maxBlue = function (bitmapObject) {
  for(var i = 0; i<256; i++) {
   bitmapObject.palette[i].B = 255;
  }
};

/*randomly chooses R/G/B and assings a random value 1-255 for each color
in the palette array.*/
app.randomize = function(bitmapObject) {
  for(var i = 0; i<256; i++) {
    var rgb =Math.floor((Math.random() * 3) + 1);
    var randValue = Math.floor((Math.random() * 255) + 1);
    if (rgb === 1) {
      bitmapObject.palette[i].R = randValue;
    } else if (rgb === 2) {
      bitmapObject.palette[i].G = randValue;
    } else {
      bitmapObject.palette[i].B = randValue;
    }
  }
};
