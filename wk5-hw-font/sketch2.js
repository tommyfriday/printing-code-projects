var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 600
});


var circleRadius = 6;
var numLines = 360;
var angle = 360 / numLines;
var originX = 50;
var originY = 50;

var w1 = r.group(10, 10)
  for (var i = 0; i < 36; i++){
  // draw a circle at that x and y
  r.line(originX, originY,
    i*(Math.cos(Rune.radians(14)) * circleRadius),
    i*(Math.cos(Rune.radians(14)) * circleRadius),w1)
    .move (100, 300)
    .fill(false)
    .stroke(3, 123,223)
    .strokeWidth(1);
  }

  var w2 = r.group(50, 10)
    for (var i = 0; i < 36; i++){
    // draw a circle at that x and y
    r.line(originX, originY,
    i*(Math.cos(Rune.radians(4)) * circleRadius),
    i*(Math.cos(Rune.radians(4)) * circleRadius), w2)
      .move (200, 300)
      .fill(false)
      .stroke(3, 123,223)
      .strokeWidth(1);
    }

    // var w3 = r.group(10,10)
    //   for (var i = 0; i < 36; i++){
    //   // draw a circle at that x and y
    //   r.line(originX+40, originY,
    //   i*(Math.cos(Rune.radians(14)) * circleRadius),
    //   i*(Math.cos(Rune.radians(14)) * circleRadius), w3)
    //     .fill(false)
    //     .stroke(12, 245, 233)
    //     .strokeWidth(1);
    //   }

      var e = r.group(200, 10)
        for (var i = 0; i < 36; i++){
        // draw a circle at that x and y
        r.line(originX, originY-50,
        i*(Math.cos(Rune.radians(4)) * circleRadius),
        i*(Math.cos(Rune.radians(4)) * circleRadius), e)
          .move (200, 130)
          .fill(false)
          .stroke(3, 123,223)
          .strokeWidth(1);
        }

        var e2 = r.group(200, 10)
          for (var i = 0; i < 56; i++){
          // draw a circle at that x and y
          r.line(originX, originY,
          i*(Math.cos(Rune.radians(4)) * circleRadius),
          i*(Math.cos(Rune.radians(4)) * circleRadius), e2)
            .move (200, 300)
            .fill(false)
            .stroke('hsv', 23, 123, 123)
            .strokeWidth(1);
          }


    var b = r.group(480, 140)
      for (var i = 0; i < 36; i++){
      // draw a circle at that x and y
      r.line(originX, originY,
      i*(Math.cos(Rune.radians(4)) * (circleRadius*0.2)),
      i*(Math.cos(Rune.radians(4)) * circleRadius), b)
        .move (250, 90)
        .fill(false)
        .stroke('hsv', 23, 123, 123)
        .strokeWidth(1);
      }

    var b2 = r.group(480, 10)
      for (var i = 0; i < 36; i++){
      // draw a circle at that x and y
      r.line(originX, originY,
      i*(Math.cos(Rune.radians(14)) * circleRadius),
      i*(Math.cos(Rune.radians(14)) * circleRadius), b2)
        .move (130, 300)
        .fill(false)
        .stroke(3, 123,223)
        .strokeWidth(1);
      }

// draw an ellipse in the center of screen
// r.circle(r.width / 2, r.height / 2, circleRadius)
//   .fill('hsv', 100, 23, 88)
//   .stroke(false)
//
// for (var j = 0; j < numLines; j++){
//   // draw an ellipse on the edge of the other ellipse, on 45 degrees
//   var x = Math.cos(Rune.radians(45)) * circleRadius;
//   var y = Math.sin(Rune.radians(45)) * circleRadius;
//   r.circle((r.width / 2) + x, (r.height/2) + y, 10)
//     .fill(255);
//
//     for (var i = 0; i < 360; i++){
//     // draw a circle at that x and y
//     r.line(x, y, i*2, i*2)
//       .move (100, 300)
//       .fill(false)
//       .stroke(3)
//       .strokeWidth(1);
//     }
//   }

// now find the x,y of the new point that is 300px and 45 degrees away from the center point
// notice how we need to convert our degrees to radians with the radians() function
// var x = Math.cos(Rune.radians(45)) * 300;
// var y = Math.sin(Rune.radians(45)) * 300;



  r.draw();
