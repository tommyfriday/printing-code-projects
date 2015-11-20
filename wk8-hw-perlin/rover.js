

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });
//background color
r.rect(0, 0, 800, 700)
  .fill('hsv', 0, 55, 20)
  // .fill(30, 20, 20)
  .stroke(false);

  // perlin line -------------------------
  var noise = new Rune.Noise();
  noise.noiseSeed(50);
  noise.noiseDetail(0.3);

  var bungle3 = r.path(-9, 420) //coral line
      .fill(false).stroke('hsv', 10, 66, 78).strokeWidth(15);

  var bungleMustard = r.path(-179, 380) //mustard line
          .fill(false).stroke('hsv',25, 76, 68).strokeWidth(35);

  var bungleFat = r.path(-49, 520)
    .stroke('hsv', 0, 80, 8).strokeWidth(155)

  for (var i = 0; i < 230; i ++){
    var x = i * 12;
    var y = noise.get(i * 0.1)* 40;
    bungleFat.lineTo(x,y);
    bungle3.lineTo(x,y);
    bungleMustard.lineTo(x, y);
  }

var noise = new Rune.Noise().noiseDetail(4);
var radius = 180;
var numPoints = 60;
var angle = 360 / numPoints;
var noiseStep = 0;
var points = [ 20, 30, 60]

//inside for loop create circular polygon
for (var i = 0; i < points.length; i++){

  var bungle = r.polygon(550, r.height/2);
  var spacing = 360/points[i];

      for (var j = 0; j < points[i]; j++){
            var noiseRadius = (noise.get(noiseStep) * 30 ) + radius;
            var x = Math.cos(Rune.radians(j * spacing)) * noiseRadius;
            var y = Math.sin(Rune.radians(j * spacing)) * noiseRadius;
            bungle.lineTo(x,y).stroke(false).fill('hsv', 20, 55, 18);
            noiseStep += .2;
      }
}

//change first poly into second and place ellipses spaced on edge
var bungle2 = bungle.toPolygon({ spacing:16 });
// var noise = new Rune.Noise();

for(var i = 0; i < bungle2.vars.vectors.length; i++) {
  var vec = bungle2.vars.vectors[i]; //dont understand this line
  // bungle2.scale(2;)
  //vec.x += Rune.random(-55, 55);
  //vec.y += Rune.random(-5, 15);
  // var y = noise.get(i * 0.2)* 40;
  // r.circle(bungle2.vars.x + vec.x, bungle2.vars.y + vec.y, 7)
  r.ellipse(bungle2.vars.x + vec.x, bungle2.vars.y + vec.y,
    Rune.random(12, 16), Rune.random (14, 17))
    .stroke(false)
    .fill(255)
    .rotate(15, 550, r.height/2);

    // r.circle(bungle2.vars.x + vec.x, bungle2.vars.y + vec.y,25)
    //   .stroke(false)
    //   .fill('hsv', 20, 55, 18);
    //change to ellipses, add modifier for size and random rotation around centre
}

//big white dot bottom right
// r.ellipse(170, 590, 70, 68)
//   .fill(255)
//   .stroke(false);

//square polygon border circles ___________________________________
// make a polygon as a rectangle
var poly = r.polygon(0, 0)
  .lineTo(30, 30)
  .lineTo(r.width - 30, 30)
  .lineTo(r.width - 30, r.height - 30)
  .lineTo(30, r.height - 30)
  .fill(false)
  .stroke(false);

var poly2 = poly.toPolygon({ spacing:10 })
  .stroke(false);

for(var i = 0; i < poly2.vars.vectors.length; i++) {
  var vec = poly2.vars.vectors[i];
  vec.x += Rune.random(-2, 3);
  vec.y += Rune.random(-2, 3);

  r.circle(poly2.vars.x + vec.x, poly2.vars.y + vec.y, 2)
  .fill(255)
  .stroke(false);
}


r.draw();
//
