

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });

r.rect(0, 0, 800, 700)
  .fill(0);

var a, b, h, xpos,ypos,oxpos,oypos,t,ot,d,od;
var centerX = r.width/2;
var centerY = r.height/2;

r.on('mousemove', function(mouse) {
  console.log("the mouse moved to", mouse.x, mouse.y);
});

function draw() {

  a = mouse.x;
  b = 60;
  h = mouse.y;

  for(var i = 1; i < 361; i += 1) {
    t = radians(i);
    ot = radians(i - 1);
    d = a * t;
    od = a * ot;

    oxpos = (a-b) * cos(ot) + h * cos(od);
    oypos = (a-b) * sin(ot) + h * sin(od);

    xpos = (a-b) * cos(t) + h * cos(d);
    ypos = (a-b) * sin(t) + h * sin(d);

    r.line(centerX+oxpos, centerY+oypos, centerX+xpos, centerY+ypos)
    .stroke(255,0,0)
    .strokeWidth(3);

    // stroke(i-1,360,360);
    // line(centerX+oxpos, centerY+oypos, centerX+xpos, centerY+ypos);
  }
}


r.draw();
