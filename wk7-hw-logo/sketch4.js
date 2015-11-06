/*
Tommy Payne
Logo design in javascript, ICEBERGS v4
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

r.text("ICEBERGS", 85, 515)
            .fill(0)
            .stroke(false)
            .fontSize(17)
            .textAlign("left")
            .fontWeight("bold")
            .fontFamily("Swistblnk Monthoers")
            //GRILL CODE - text and iceberg

              r.text("grill", 85, 535)
                          .fill(0)
                          .stroke(false)
                          .fontSize(17)
                          .textAlign("left")
                          .fontWeight("bold")
                          .fontFamily("Swistblnk Monthoers")
                          
//path to draw top of iceberg
// var topSpacing = 20;
var spacing = 20;

var toppy = r.polygon(130, 180)

for (var i = 0; i < 15; i++){ //must be uneven length in for loop for polygon to close
    console.log(i % 2)
    toppy.lineTo(spacing * i, (i % 2) * 20)
  }
          // toppy.lineTo(210, -40)
          toppy.lineTo(250, -80)
          toppy.lineTo(190, -120)
          toppy.lineTo(140, -80)
          toppy.lineTo(60, -60)
          toppy.lineTo(30, -50)
          // toppy.lineTo(70, -30)
          toppy.lineTo(0,0)
          // toppy.lineTo(140, -70)
          // toppy.lineTo(190, -30)
          // toppy.lineTo(250, 45)
          // toppy.lineTo(-30, 45)
          .fill(0)
          .stroke(false);

//path to draw bottom of iceberg, this part is dynamic and can change each time
var bottom = r.polygon(130, 200)
var incr = 20;
for (var i = 0; i < 15; i++){ //must be uneven length in for loop for polygon to close
    console.log(i % 2)
    bottom.lineTo(spacing * i, (i % 2) * 20)
  }
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

        // r.text("bistro", 85, 505)
        //             .fill(0)
        //             .stroke(false)
        //             .fontSize(17)
        //             .textAlign("left")
        //             .fontWeight("bold")
        //             .fontFamily("Swistblnk Monthoers")

        // var bottom = r.polygon(130, 200)
        //           .lineTo(280, 0)
        //           .lineTo(270, 45)
        //           .lineTo(280, 100)
        //           .lineTo(270, 180)
        //           .lineTo(185, 274)
        //           .lineTo(145, 305)
        //           .lineTo(110, 270)
        //           .lineTo(110, 257)
        //           .lineTo(60, 220)
        //           .lineTo(50, 200)
        //           .lineTo(0, 190)
        //           .lineTo(-20, 105)
        //           .lineTo(20, 60)
        //           .lineTo(0, 0)
        //           .fill(0)
        //           .stroke(false);


/*
//ALIMENTARI CODE - text and iceberg
  r.text("alimentari", 85, 505)
              .fill(0)
              .stroke(false)
              .fontSize(17)
              .textAlign("left")
              .fontWeight("bold")
              .fontFamily("Swistblnk Monthoers")

  var bottom = r.polygon(130, 200)
            .lineTo(280, 0) //last point on zigzag
            .lineTo(270, 45)
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
            .lineTo(20, 60)
            .lineTo(0, 0)
            .fill(0)
            .stroke(false);
*/

  r.draw ();
