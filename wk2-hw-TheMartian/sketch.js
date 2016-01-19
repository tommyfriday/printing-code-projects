
  var r = new Rune({
    container: "#canvas",
    width: 1200,
    height: 700,
    debug: true
  });

var width = 1200;
var height = 700;

// function stems(x1,y1,x2,y2){
//   for( var i = 0; i < width; i += 40){
//     r.line(x1, y1, x2, y2)
//     .stroke(0);
//
// }
// }

//new Rune.Line(x1, y1, x2, y2)

// var myLines = r.group(x, y);

r.ellipse(width/2, height/2, 500,500)
.fill(0);

for(var x = 0; x < 1200; x+= 5)
  {
    for(var y = 0; y < 1000; y+= 10)
    {
      var stems = r.line(x, y, x, 0)
        .stroke(0);
    }
  }

// for(var x = 0; x < 1200; x += 150){
//     for(var y=0; y < 1000; y =+ 100){
//       var blocks = r.rect(x,y,x,100)
//       .fill(255)
//       .stroke(false);
//     }
// }

for (var j=0; j< 1200; j+=6)
  {
    for (var k=0; k < 1000; k += 100)
    {
var dashboard = r.rect(j, k, j, 50)
    .fill(255)
    .stroke(false);
  }
}





    r.draw();
