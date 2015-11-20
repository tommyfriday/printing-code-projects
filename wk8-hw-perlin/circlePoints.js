
var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    // debug: true
  });

var group = r.group(r.width/2, r.height/2);

// var myCircle = r.circle(r.width/2, r.height/2, 300);
var radius = 150;
var numRects = 36;
var angle = 360 / numRects;

// for (var i = 0; i < numRects; i++){
//
//     var x = Math.cos(Rune.radians(i * angle)) * radius;
//     var y = Math.sin(Rune.radians(i * angle)) * radius;
//     r.line((r.width / 2) + x, (r.height / 2) + y, x, y, group)
//       .fill(false).stroke(255, 0, 0);
//
//     r.circle(x+12, y+12, 4, group)
//     .fill(255, 0, 0).stroke(false);
// }

r.on('mousemove', function(mouse){

var radiusA = mouse.x;
var radiusB = 60;
var h = mouse.y;
var oxpos, oypos, t, ot, d, od;

for (var i = 0; i < numRects; i++){

  t = Rune.radians(i);
  ot = Rune.radians(i - 1);
  d = radiusA * t;
  od = radiusA * ot;

  oxpos = (radiusA - radiusB)* Math.cos(ot)+ h * Math.cos(od);
  oypos = (radiusA - radiusB)* Math.sin(ot)+ h * Math.sin(od);

    // var x = Math.cos(Rune.radians(i * angle)) * radius;
    // var y = Math.sin(Rune.radians(i * angle)) * radius;
    // r.line(x, y, 3, 3, group)
    //   .fill(false).stroke(255, 0, 255);

    // r.circle(x+12, y+12, 4, group)
    // .fill(255, 0, 0).stroke(false);

var xpos = (radiusA - radiusB) * Math.cos(t)+ h * Math.cos(((radiusA-radiusB) / radiusB) * t);
var ypos = (radiusA - radiusB) * Math.sin(t)+ h * Math.sin(((radiusA-radiusB) / radiusB) * t);

  r.line(xpos, ypos, 133, 133, group)
        .fill(false).stroke(0, 0, 255);

        console.log("mouse has moved to", mouse.x, mouse.y);
}

});








r.draw();
