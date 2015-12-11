/*
Tommy Payne 2015
Printing Code homework
IMPERFECT

what does a scent look like?
*/

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 600
});

var size = 50;
var numberCols = 20;
var angle = 360 / numberCols;


for(var x = 0; x < r.width; x += size){

  var curAngle = x * angle;

    for(var y = 0; y < r.height; y += size){

      if((x == 150 && y == 150) || (x == 350 && y == 350)) {

      } else {
        // r.ellipse(x+50, y+50, 25, 25)
        r.rect(x+50, y+50, 25, 25)
          .fill('hsv', curAngle, 80, 90)
          .stroke(false);

          r.ellipse(x+25, y+25, 10, 10)
          .fill(0)
          .stroke(false);
      }

    }
  }


r.draw();
