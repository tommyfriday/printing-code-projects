/*
Tommy Payne 2015
Printing Code homework
COS+SIN HYPNOTIC
*/

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    // debug: true
  });


r.circle(r.width/2, r.height/2, 30)
.fill(0);

var num = 60;
var numDegrees = 360/num;
var radius = 10;
var a = 0;

// first for loop
// i = stepped amount around edge
// j = number of circles as they expand
for(var i = 0; i < num; i++){

  a += Math.PI/6;
  var x1 = r.width/2 + Math.cos(a) * 230;
  var y1 = r.height/2 + Math.sin(a) * 230;

    var x2 = r.width/2 + Math.cos(a) * 200;
    var y2 = r.height/2 + Math.sin(a) * 200;

      var x3 = r.width/2 + Math.cos(a) * 165;
      var y3 = r.height/2 + Math.sin(a) * 165;

    r.circle(x1, y1, 10)
      .fill(false)
      .stroke(0);

      r.circle(x2, y2, 12)
        .fill(false)
        .stroke(0);

        r.circle(x3, y3, 14)
          .fill(false)
          .stroke(0);




            // for (var j = 0; j < 4; j++){
            // var x = Math.cos(Rune.radians(i * numDegrees) * (j*50));
            // var y = Math.sin(Rune.radians(i * numDegrees) * (j*50));

  // }
}


r.draw();
