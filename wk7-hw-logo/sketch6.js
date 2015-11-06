/*
Tommy Payne
Logo design in javascript, ICEBERGS  v6
Grid homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    debug: true,
    frameRate: 24
  });

  r.text("ICEBERGS", 85, 515)
              .fill(0)
              .stroke(false)
              .fontSize(17)
              .textAlign("left")
              .fontWeight("bold")
              .fontFamily("Swistblnk Monthoers")

  var toppy = r.polygon(130, 185)
            toppy.lineTo(280,0)
            toppy.lineTo(250, -80)
            toppy.lineTo(190, -120)
            toppy.lineTo(140, -80)
            toppy.lineTo(60, -60)
            toppy.lineTo(30, -50)
            toppy.lineTo(0,0)
            .fill(0)
            .stroke(false);

//path to draw bottom of iceberg, this part is dynamic and can change each time
var bottom = r.polygon(130, 200)
        bottom.lineTo(280, 0) //last point on zigzag
        bottom.lineTo(300, 45)
        bottom.lineTo(280, 80)
        bottom.lineTo(310, 180)
        // bottom.lineTo(285, 274)
        bottom.lineTo(215, 305)
        bottom.lineTo(180, 324)
        bottom.lineTo(150, 340)//tip of bottom
        bottom.lineTo(110, 320)
        bottom.lineTo(110, 307)
        bottom.lineTo(40, 260)
        // bottom.lineTo(20, 200)
        // bottom.lineTo(0, 190)
        bottom.lineTo(-20, 105)
        bottom.lineTo(20, 60)
        bottom.lineTo(0, 0)
        .fill(0)
        .stroke(0);


  // var radius = 100;
  // var points = [3, 4, 6, 40];
  //
  // for(var i = 0; i < points.length; i++) {
  //
  //   var shape = r.polygon(r.width/2, 125 + (i * 200));
  //   var spacing = 360/points[i];
  //
  //   for(var j = 0; j < points[i]; j++) {
  //     var x = Math.cos(Rune.radians(j * spacing)) * radius;
  //     var y = Math.sin(Rune.radians(j * spacing)) * radius;
  //     shape.lineTo(x, y);
  //   }
  //
  // }


r.draw();
