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


var num = 7;
var numDegrees = 360/num;

// first for loop
// i = stepped amount around edge
// j = number of circles as they expand
for(var i = 0; i < num; i++){

    for (var j = 0; j<4; j++){
    var x = Math.cos(Rune.radians(i * numDegrees)) * (j*50);
    var y = Math.sin(Rune.radians(i * numDegrees)) * (j*50);

    r.circle(r.width/2, r.height/2, (j*10))
      .fill(false)
      .stroke(0);
  }
}
