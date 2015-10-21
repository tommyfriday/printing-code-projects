/*
Tommy Payne
based on 1960s paintings by Philip Guston
Artlines
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

// r.ellipse (400, 200, 60, 300)
//   .fill('hsv', Rune.random(30,360), Rune.random(1, 36), Rune.random(36, 90))
//   .stroke(false);
//   //360, 100, 100
//
// r.circle((width/2), 200, 22)
//   .fill('hsv', 25, 100, 125)
//   .stroke(false);

var middle = r.path(200,0)
      .lineTo(400, 200)
      .curveTo(530, 260, 400, 400)
      .lineTo(220, 520)
      .curveTo()

      .fill(false)
      .stroke(0)
      // .stroke('hsv', Rune.random(100, 200), Rune.random(2,125), Rune.random(45,50))
      .strokeWidth(10);


  r.draw ();
