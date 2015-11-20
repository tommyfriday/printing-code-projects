/*
Tommy Payne
Logo design in javascript, ICEBERGS  wavy line v5
Grid homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    // debug: true,
    frameRate: 24
  });

r.text("ICEBERGS", 85, 515)
            .fill(0)
            .stroke(false)
            .fontSize(17)
            .textAlign("left")
            .fontWeight("bold")
            .fontFamily("Swistblnk Monthoers")

r.text("bistro", 85, 535)
            .fill(0)
            .stroke(false)
            .fontSize(17)
            .textAlign("left")
            .fontWeight("bold")
            .fontFamily("Swistblnk Monthoers")

var sinLength = 280;
//path to draw top of iceberg
var curly = r.path(130, 185)

for(var i = 0; i < sinLength; i++){
  var x = i;
  curly.lineTo(i, (Math.sin(x/8)) * 6)
  //the number inside the sin equation changes the x frequency
  //the number that multiplies at the end changes the Y height
}
  curly.lineTo(250, -80)
  curly.lineTo(190, -120)
  curly.lineTo(140, -80)
  curly.lineTo(60, -60)
  curly.lineTo(30, -50)
  curly.lineTo(0, 0)
  curly.stroke(0)
  curly.fill(0)

  //path to draw bottom of iceberg, this part is dynamic and can change each time
var botSinLength = 280;
var bottom = r.path(130, 200)

  for (var j = 0; j < botSinLength; j++){ //must be uneven length in for loop for polygon to close
    var b = j;
    bottom.lineTo(j, (Math.sin(b/8)) * 6)
    }
          bottom.lineTo(280, 6) //last point on zigzag
          bottom.lineTo(300, 45)
          bottom.lineTo(280, 80)
          bottom.lineTo(310, 180)
          // // bottom.lineTo(285, 274)
          bottom.lineTo(215, 305)
          bottom.lineTo(180, 324)
          bottom.lineTo(150, 340)//tip of bottom
          bottom.lineTo(110, 320)
          bottom.lineTo(110, 307)
          bottom.lineTo(40, 260)
          // // bottom.lineTo(20, 200)
          // // bottom.lineTo(0, 190)
          bottom.lineTo(-20, 105)
          bottom.lineTo(20, 60)
          bottom.lineTo(0, 0)
          bottom.fill(0)
          bottom.stroke(0);

// old bottom iceberg, nice shape
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




  r.draw ();
