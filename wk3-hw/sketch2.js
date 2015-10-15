/*
TOMMY PAYNE
POLYGONS & PATHS
printing code homework week 3

design for stepped and repeated line segments across the width of the page
add some polygons and paths
*/

var r = new Rune({
    container: "#canvas",
    width: 1000,
    height: 700,
    debug: true
  });


var width = 1000;
var height = 700;
var origAngle;
var strokeWidthStep = [1, 16, 24];

for (var i = 0; i < width; i ++){
    r.line(i*7, 1, i*10, i*12)
    .fill(false)
    .stroke(255)
    // .strokeWidth(i * Rune.random(strokeWidthStep[i]))
}

var wetPoly = r.path(500, 350)
  .lineTo(666, 377)
  .lineTo(766, 477)
  .lineTo(-266, 377)
  .fill(false)
  .stroke(255)
  .strokeWidth(6);

var dryPoly = r.polygon()






r.draw();
