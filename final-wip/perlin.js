/*
Tommy Payne
"the look of scent"
Perlin/modulo lines to make organic forms

prompt: RIFT
notes of citrus, 
*/

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 700,
    debug: true
  });

// perlin line -------------------------
var noise = new Rune.Noise();
noise.noiseSeed(Rune.random(50, 2));
//noise.noiseDetail(0.4);

var xStep = 15;

for (var i = 0; i < 30; i ++){
  noise.noiseDetail(i*10);

  var bungle3 = r.path(10, 40 + (i*13)) //adding i here steps the line down the page
      .fill(false).stroke('hsv', 10, 66, 178).strokeWidth(5);

      var noiseStep = 0;

      for(var x = 0; x < r.width; x += xStep){
        var y = noise.get(noiseStep) * 140;
        //use the IF statement and moveTo to remove the little line at the start of perlin lines
        if(x == 0) {
          bungle3.moveTo(x, y);
        } else {
          bungle3.lineTo(x, y);
        }
        noiseStep += 0.1;
    }
}

// polygon edge changed with perlin noise ------------------
// var blueBungle = r.polygon(100, 350).fill(255,0,0).stroke(false)
//     .lineTo(20, 50)
//     .lineTo(60, 100);


/*
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
*/



r.draw();
