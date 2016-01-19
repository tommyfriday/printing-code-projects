/*
Tommy Payne
Tension object
present for Jenny and James
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
    .stroke('hsv', 115, Rune.random(8, 20), Rune.random(49, 100))
  //    .stroke('hsv', current, Rune.random(80, 81), Rune.random(90, 91))
    .strokeWidth(5);

    r.line((r.width / 2) + x, (r.height / 2) + y, 0, 0)
      .stroke('hsv', 115, Rune.random(8, 20), Rune.random(49, 100))
  //      .stroke('hsv', current, Rune.random(80, 30), Rune.random(90, 100))
      .strokeWidth(5);

/*______________

      r.line((r.width / 2) + x, (r.height / 2) + y, 0, 700)
        .stroke('hsv', 115, Rune.random(8, 20), Rune.random(49, 100))
      //    .stroke('hsv', current, Rune.random(80, 81), Rune.random(90, 91))
        .strokeWidth(5);

        r.line((r.width / 2) + x, (r.height / 2) + y, 800, 0)
          .stroke('hsv', 115, Rune.random(8, 20), Rune.random(49, 100))
      //      .stroke('hsv', current, Rune.random(80, 30), Rune.random(90, 100))
          .strokeWidth(5);
*/

  console.log(current);

}




r.draw ();
