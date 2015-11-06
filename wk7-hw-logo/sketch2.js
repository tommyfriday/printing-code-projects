/*
Tommy Payne
Logo design in javascript, ICEBERGS
Grid homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    debug: true,
    frameRate: 24
  });

  var originX = 50;
  var originY = 250;
  var circleRadius = 6;

r.text("ICEBERGS", 85, 485)
                .fill(0)
                .stroke(false)
                .fontSize(17)
                .textAlign("left")
                .fontWeight("bold")
                .fontFamily("Swistblnk Monthoers")

//path to draw top of iceberg
  var top = r.path(160, 150)
          // .moveTo(300,400)
          // .lineTo()
          .lineTo(90, -40)
          .lineTo(140, -70)
          .lineTo(190, -30)
          .lineTo(225, 45)
          .lineTo(-30, 45)
          .closePath()
          .fill(0)
          .stroke(false);

//path to draw bottom of iceberg, this part is dynamic and can change each time
for(var i = 0; i < 50; i++){
        // vec.x += Rune.random(5, -5)
        // vec.y += Rune.random(5, -5)
        // var x += Rune.random(-5, 5);
        // var y += Rune.random(-5, 5);
        var bottom = r.polygon(130, 200)
        // var x = Math.sin(Rune.random(130, 450))
        // var y = Math.cos(Rune.random(200, 650))
            // .lineTo(x*i, y*i)
            // .lineTo(x, y)
            // .lineTo(x, y)
        .lineTo(255, 0)
        .lineTo(260, 45)
        .lineTo(280, 100)
        .lineTo(270, 180)
        .lineTo(185, 274)
        .lineTo(145, 305)
        .lineTo(110, 270)
        .lineTo(110, 257)
        .lineTo(60, 220)
        .lineTo(50, 200)
        .lineTo(0, 190)
        .lineTo(-20, 105)
        .lineTo(20, 30)
        .lineTo(0, 0)
        //.fill(false)
        .stroke(false);
}

var poly2 = bottom.toPolygon({ spacing:25 })
  .move(0, 0, true);

for(var i = 0; i < poly2.vars.vectors.length; i++) {
  var vec = poly2.vars.vectors[i];
  //vec.x += Rune.random(-5, 5);
  //vec.y += Rune.random(-5, 5);

  //r.circle(poly2.vars.x + vec.x, poly2.vars.y + vec.y, 5, 5)
  //  .fill(0)
}

/*
// make a polygon as a rectangle
var poly = r.polygon(130, 200)
  .lineTo(0, 0)
  .lineTo(255, 0)
  .lineTo(266, 35)
  .lineTo(220, 200)
  .lineTo(200, 300)
  .lineTo(140, 170)

  // .lineTo(0, 300)
  .fill(false)
  .stroke(false);

var poly2 = poly.toPolygon({ spacing:5 })
    .move(0, 0, true);

for(var i = 0; i < poly2.vars.vectors.length; i++) {
    var vec = poly2.vars.vectors[i]; //whats going on here?
    vec.x += Rune.random(-5, 5);
    vec.y += Rune.random(-5, 5);
    r.polygon(0,0)
    .lineTo(poly2.vars.x + vec.x, poly2.vars.y + vec.y)
    .lineTo(poly2.vars.x * vec.x, poly2.vars.y * vec.y)
    .lineTo(poly2.vars.x * vec.x, poly2.vars.y * vec.y)

    // r.rect(poly2.vars.x + vec.x, poly2.vars.y + vec.y, 11, 11)
      .fill(0)
      .stroke(0);
}
*/
  r.draw ();
