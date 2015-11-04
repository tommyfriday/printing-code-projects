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

      // var b = r.group(10, 10)
      //   for (var i = 0; i < 66; i++){
      //     r.rect(Rune.random(50, 350), Rune.random(100, 320),3, 3,b)
      //     // .move (100, 300)
      //     .fill(false)
      //     .stroke(233, 123,223)
      //     .strokeWidth(4);
      //   }
    // r.circle(originX, originY,
    //   i*(Math.cos(Rune.radians(14)) * circleRadius),
    //   i*(Math.cos(Rune.radians(14)) * circleRadius),roses)

    r.text("ICEBERGS", 85, 515)
                .fill(0)
                .stroke(false)
                .fontSize(14)
                .textAlign("left")
                // .fontWeight("bold")
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
/*
for(var i = 0; i < 50; i++){
        vec.x += Rune.random(5, -5)
        vec.y += Rune.random(5, -5)
        var bottom = r.path(130, 200)
        // var x = Math.sin(Rune.random(130, 450))
        // var y = Math.cos(Rune.random(200, 650))
            .lineTo(x*i, y*i)
            .lineTo(x, y)
            .lineTo(x, y)
                    // .lineTo(255, 0)
                    // .lineTo(220, 200)
                    // .lineTo(200, 300)
                    .closePath()
                    .fill(0)
                    .stroke(false);
}
*/

// make a polygon as a rectangle
var poly = r.polygon(130, 200)
  .lineTo(0, 0)
  .lineTo(255, 0)
  .lineTo(220, 200)
  .lineTo(200, 300)
  // .lineTo(0, 300)
  .fill(false)
  .stroke(false);

var poly2 = poly.toPolygon({ spacing:5 })
    .move(0, 0, true);

for(var i = 0; i < poly2.vars.vectors.length; i++) {
    var vec = poly2.vars.vectors[i]; //whats going on here?
    vec.x += Rune.random(-5, 5);
    vec.y += Rune.random(-5, 5);
    r.rect(poly2.vars.x + vec.x, poly2.vars.y + vec.y, 11, 11)
      .fill(0)
      .stroke(false);
}


  r.draw ();
