/*
Tommy Payne
Tense design homework for Printing Code Fall 2015
*/

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });

var width = 800;
var height = 800;
var ellipseXpos, ellipseYpos, diameter;

r.ellipse (400, 200, 60, 300)
  .fill('hsv', Rune.random(30,360), Rune.random(1, 36), Rune.random(36, 90))
  .stroke(false);
  //360, 100, 100

r.circle((width/2), 200, 22)
  .fill('hsv', 25, 100, 125)
  .stroke(false);

// var middle = r.path(400,600)
//       .lineTo(400, 100)
//       .lineTo(410, 110)
//       .lineTo(420, 120)
//
//       .fill(false)
//       .stroke('hsv', Rune.random(100, 200), Rune.random(2,125), Rune.random(45,50))
//       .strokeWidth(10);


  r.draw ();
