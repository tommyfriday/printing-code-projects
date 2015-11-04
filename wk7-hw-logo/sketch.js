/*
Tommy Payne
Logo design in javascript
Grid homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    debug: true
  });


  // r.circle(200, 350, 35)
  //   .fill(244,34,123)
  //   .stroke(false);

//yellow triangle
  var flowerBunch = r.group(0, 20)
  r.triangle(100, 350, 250, 600, 200, 370, flowerBunch)
  .fill(244,234,123)
  .stroke(false);

//pink triangle
  r.triangle(200, 370, 250, 600, 350, 350)
  .fill(244,134,123)
  .stroke(false);

  var originX = 50;
  var originY = 250;
  var circleRadius = 6;

  // var roses = r.group(10, 10)
  //   for (var i = 0; i < 66; i++){
  //     r.circle(Rune.random(50, 350), Rune.random(100, 320),circleRadius*3,roses)
  //     // .move (100, 300)
  //     .fill(false)
  //     .stroke(233, 123,223)
  //     .strokeWidth(4);
  //   }

      var b = r.group(10, 10)
        for (var i = 0; i < 66; i++){
          r.rect(Rune.random(50, 350), Rune.random(100, 320),3, 3,b)
          // .move (100, 300)
          .fill(false)
          .stroke(233, 123,223)
          .strokeWidth(4);
        }
    // r.circle(originX, originY,
    //   i*(Math.cos(Rune.radians(14)) * circleRadius),
    //   i*(Math.cos(Rune.radians(14)) * circleRadius),roses)


  // var paint = r.path(paintDripsX, paintDripsY)
  //         // .moveTo(300,400)
  //         // .lineTo()
  //         .curveTo(-40, 500, 30, 10)
  //         .curveTo(45, -50, 55, 10)
  //         .curveTo(35, 470, 88, 20)
  //         .lineTo(90, -30)
  //         .lineTo(1, -30)
  //         .closePath()
  //
  //         // .curveTo(150, 25, i * Rune.random(paintDripsX[i]), i * Rune.random(paintSpacesSteps[i]))
  //         .fill(0)
  //         .stroke(0)




  r.draw ();
