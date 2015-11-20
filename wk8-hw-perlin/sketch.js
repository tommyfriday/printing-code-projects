/*
Tommy Payne
Perlin Noise homework
*/

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });

// perlin line -------------------------
var noise = new Rune.Noise();
// noise.noiseSeed(50);
noise.noiseDetail(0.4);

var x1, y1 = 20;
var myWidth = Rune.random(30, 50);
var myHeight = Rune.random(15, 25);

var giant = r.rect(x1, y1, myWidth, myHeight)
              .fill(255, 120, 200).stroke(false);
// var bungle3 = r.path(100,240)
//     .fill(false).stroke('hsv', 10, 66, 178).strokeWidth(5)

for (var i = 0; i < 30; i ++){
  var x = i * 12;
  var y = noise.get(i * 0.2)* 40;
  giant.moveTo(x, y, myWidth*x, myHeight*y);
}

// polygon edge changed with perlin noise ------------------
// var blueBungle = r.polygon(100, 350).fill(255,0,0).stroke(false)
//     .lineTo(20, 50)
//     .lineTo(60, 100);




r.draw();
