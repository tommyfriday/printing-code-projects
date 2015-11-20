/*
Tommy Payne
Perlin Noise class exercise
Random and modulo
*/

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });

var bungle = r.path(100,100)
    .fill(false).stroke(0).strokeWidth(3)

//random squiggle -------------------------
for (var i = 0; i < 30; i ++){
  var x = i * 12;
  var y = Rune.random(10, 40);
  bungle.lineTo(x,y);
}

//zigzag -------------------------------
var bungle2 = r.path(100,180)
    .fill(false).stroke('hsv', 210, 90, 178).strokeWidth(4)

for (var i = 0; i < 30; i ++){
  var x = i * 12;
  var y = (i % 2)*20;
  bungle2.lineTo(x,y);
}
if (i == 0){
  bungle2.moveTo(0, 200)
}

// perlin line -------------------------
var noise = new Rune.Noise();
// noise.noiseSeed(50);
noise.noiseDetail(0.4);

var bungle3 = r.path(100,240)
    .fill(false).stroke('hsv', 10, 66, 178).strokeWidth(5)

for (var i = 0; i < 30; i ++){
  var x = i * 12;
  var y = noise.get(i * 0.2)* 40;
  bungle3.lineTo(x,y);
}

// polygon edge changed with perlin noise ------------------
// var blueBungle = r.polygon(100, 350).fill(255,0,0).stroke(false)
//     .lineTo(20, 50)
//     .lineTo(60, 100);




r.draw();
