/*
Tommy Payne 2015
Printing Code homework
HYPNOTIC
*/

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 700
});

// r.circle(r.width/2, r.height/2, 60)
//   .fill(false)
//   .stroke(0)
//   .strokeWidth(1);

var num = 10;
var numDegrees = 360 / num;
var radius = 10;

for(var i = 0; i < num; i++){

  for(var j = 0; j < 5; j++) {

    //by incrementing j (the radius) steps out from the centre
    var centralRadius = 120 + (j * 30);
    var x = r.width/2 + Math.cos(Rune.radians(i * numDegrees)) * centralRadius;
    var y = r.height/2 + Math.sin(Rune.radians(i * numDegrees)) * centralRadius;

    // r.circle(x, y, radius*3)
    //   .fill(false)
    //   .stroke(0);
  }
}

var bendy = r.path(400, 600)
  .curveTo(-50, -10, -50, -90)
  .curveTo(300, -400, 200, -400)
  .fill(false);


r.draw();
