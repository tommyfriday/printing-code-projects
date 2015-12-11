/*
Tommy Payne 2015
Printing Code homework
SQUARE TWIST
what does a scent look like?

HYPNOTIC

*/

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 700
});

// r.circle(r.width/2, r.height/2, 60)
//   .fill(false)
//   .stroke(0)
//   .strokeWidth(1);

var num = 10;
var numDegrees = 360 / num;
var radius = 10;

// i = number of circles rotating around centre
for(var i = 0; i < num; i++){

//j = number of shapes radiating from centre to edge
  for(var j = 0; j < 6; j++) {

          var centralRadius = 72 + (j * 10);
          var x = r.width/2 + Math.cos(Rune.radians(i * numDegrees)) * centralRadius;
          var y = r.height/2 + Math.sin(Rune.radians(i * numDegrees)) * centralRadius;

          tRect();
          // weirdEllipse();
          // tTriangle();
          // equiTriangle();
          // tPolygon();
          // tEllipse();
          // tCircle();
          // infinity();
          // neverending();
          // curvy();
          // hexPoly();
          // triPoly();


  }
}

var numLines = 30;
var angle = 360/numLines;

for(var i = 0; i < numLines; i++){

      var x = Math.cos(Rune.radians(i * angle)) * radius;
      var y = Math.sin(Rune.radians(i * angle)) * radius;
      // neverending();
      //.rotate(i * angle, 0, 0, true);
}

function curvy(){

  var bendy = r.path(400, 600)
    .curveTo(-50, -10, -50, -90)
    .curveTo(300, -400, 200, -400)
    .fill(false);

}

function neverending(){
      r.line(x, y, 200, 500)
          .strokeWidth(15)
          .stroke(0, 0.5);
}


function tRect(){
      r.rect(x, y, 140, 140)
        .fill(false)
        .rotate((i * numDegrees)+45, 20,20, true)
        .stroke(0)
        // .strokeWidth(Rune.random(1, 5))
    }

function weirdEllipse(){

      r.ellipse(x, y, 5, 43)
          .fill(false)
          // .rotate(15, r.width/2, r.height/2)
          .stroke(0);
          // .strokeWidth(Rune.random(2, 4));

          r.ellipse(x, y, 43, 5)
          .fill(false)
          // .rotate(15, r.width/2, r.height/2)
          .stroke(0);
}
function hexPoly(){
      // r.polygon(x, y)
      r.path(x, y)
        // .lineTo(15, 20)
        .curveTo(10, -50, 15, 20)
        .lineTo(30, 15)
        .lineTo(2, 10)
        .lineTo(0, 0)
        .closePath()
        .rotate((i * numDegrees)+45, 20,20, true)
          .fill(false)
          .stroke('hsv', 160, 55, 78)
          // .stroke('hsv', 230, Rune.random(8, 30), Rune.random(89, 100))
          // .strokeWidth(Rune.random(0.5, 3))
          // .scale(4)
          // .strokeWidth(3);
}

function triPoly(){
      r.polygon(x, y)
        .lineTo(5, 10)
        .lineTo(10, 5)
        .lineTo(1, 0)
        .rotate((i * numDegrees)+45, 20,20, true)
          .fill(false)
          .stroke('hsv', 160, 55, 78)
          // .stroke('hsv', 230, Rune.random(8, 30), Rune.random(89, 100))
          // .strokeWidth(Rune.random(0.5, 3))
          // .scale(14);
}

function equiTriangle(){
      r.triangle(x, y, 110, 120, x, 125)
          .fill(false)
          .stroke('hsv', 160, 55, 78)
          .strokeWidth(3)
          // .scale(4);

}

function tTriangle(){
      r.triangle(x, y, 300, 300, x*0.5, y*0.5)
          .fill(false)
        //   // .rotate(15)
          .stroke(false)
          .fill(Rune.random(10, 200))
}

function infinity(){
    r.path(x-200, y-200)
      // .moveTo(r.width/2, r.height/2)
      .lineTo(300, 300)
      .lineTo(400, 300)
      .lineTo(400, 400)
      // .lineTo(300, 400)
      .closePath()
      .fill(false)
      .stroke('hsv', 260, 55, 78, 0.1)
      .strokeWidth(6)
  }

function tPolygon(){
        r.polygon(x, y)
            .lineTo(120, 120)
            .lineTo(90, 210)
            .lineTo(-40, 190)
            .lineTo(190, 260)
            .lineTo(200, 200)
            .fill(false)
            .stroke(0)
            .strokeWidth(2);
      }

function tEllipse(){
        r.ellipse(x, y, 3, 43)
          .fill(false)
          // .rotate(15)
          .stroke(0)
          .strokeWidth(Rune.random(2, 8));
}

function tCircle(){
        r.circle(x, y, radius*3)
          .fill(false)
          // .rotate(15)
          .stroke('hsv', 230, Rune.random(8, 30), Rune.random(89, 100))
          .strokeWidth(4);
    }

r.draw();
