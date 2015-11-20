var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    // debug: true,
    //frameRate: 24
  });

/*
create an empty polygon in the middle
use sin and cos to draw points around the radius
instead of the radius being static multiply it by perlin noise

*/

var noise = new Rune.Noise();
var numPoints = 60;
var pointDegree = 360 /numPoints;
var myCircle = r.polygon(r.width/2, r.height/2)
.fill(false)
.stroke(0);

for (var i = 0; i < numPoints; i ++){

  var radius = 200 + (noise.get(i) * 20);
  var x = Math.cos(Rune.radians(i * pointDegree)) * 100); //the number at the end matters most
  var y = Math.sin(Rune.radians(i * pointDegree)) * 100);
  myCircle.lineTo(x,y);
}




  r.draw();
