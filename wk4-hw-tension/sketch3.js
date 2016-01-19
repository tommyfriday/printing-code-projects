/*
Tommy Payne
Bad color
Tense design homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });

var numColors = 20;
var angle = 360 / numColors;
var radius = 150;

for(var i = 0; i < numColors; i++) {

  var current = i * angle;
  var x = Math.cos(Rune.radians(current)) * radius;
  var y = Math.sin(Rune.radians(current)) * radius;

  r.line((r.width / 2) + x, (r.height / 2) + y, 800, 700)
    .stroke('hsv', 100, Rune.random(8, 81), Rune.random(80, 100))
    .strokeWidth(5);

  r.line((r.width / 2) + x, (r.height / 2) + y, 0, 0)
    .stroke('hsv', 360, Rune.random(8, 100), Rune.random(90, 100))
    .strokeWidth(5);

  // r.circle((r.width / 2) + x, (r.height / 2) + y, 20)
  //   .fill('hsv', curAngle, 80, 90)
  //   .stroke(false);


}




r.draw ();
