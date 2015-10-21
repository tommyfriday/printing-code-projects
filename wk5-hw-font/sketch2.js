/*
Tommy Payne
Generative Typography
Font homework for Printing Code Fall 2015
*/

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400
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
      for (var i = 0; i < 34; i++){
      // draw a circle at that x and y
      r.line(originX, originY, 55 + i * 2, 20+i * 5, b)
        .move (230, 90)
        .fill(false)
        .stroke('hsv', 23, 123, 123)
        .strokeWidth(1);
      }

    var b2 = r.group(480, 10)
      for (var i = 0; i < 36; i++){
      // draw a circle at that x and y
      r.line(originX, originY,i * 5.8, i * 5.8, b2)
        .move (130, 300)
        .fill(false)
        .stroke(3, 123,223)
        .strokeWidth(1);
      }

  r.draw();
