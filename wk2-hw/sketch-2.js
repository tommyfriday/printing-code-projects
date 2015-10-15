/*
Tommy Payne
The Martian book cover design homework for Printing Code Fall 2015
*/

  var r = new Rune({
    container: "#canvas",
    width: 1300,
    height: 1000,
    debug: true
  });

r.rect(0, 0, 1200, 1000)
  .fill(0);

var width = 1200;
var height = 700;

//big white planet
// r.ellipse(200, 600, 900,900)
//   .fill(255);

//small white planet
// r.ellipse(960, 260 , 20, 20)
  // .fill(255);

// r. line(0, 190, width, 190)
//     .strokeWidth(0.4)
//     .stroke(255);
//
//     r. line(0, 210, width, 210)
//         .strokeWidth(0.4)
//         .stroke(255);

        for(i = 0; i < 800; i++){
          // r.rect((i)*11, 190, 11, 20)
          r.rect(Rune.random((i)*11), 190, 11, 20)
            .fill(Rune.random(255), Rune.random(1))
        }

                for(i = 0; i < 800; i++){
                  r.rect((i)*11, 150, 2, 20)
                    .fill(Rune.random(255), Rune.random(1))
                }

                        for(i = 0; i < 800; i++){
                          r.rect((i)*11, 230, 2, 20)
                            .fill(Rune.random(255), Rune.random(1))
                        }

var diameter = 20;
var height = 20;

drawRings(1000, 200, diameter, height);

function drawRings(x, y, diameter, height){

  // draw rings from location specified above
  for (var i = 0; i<150; i ++){
  r.ellipse(x, y, diameter * i, height * i)
    .fill(false)
    .stroke(Rune.random(255), Rune.random(1))
    .strokeWidth(0.8);
      }

  // call the function again. We need an if statement,
  // otherwise it goes on forever
  // if(diameter > 1000){
  //   drawRings(x, y, diameter - 30);
  // }
}

//variables for for loop below which draws black circle overlays
var strokeWidthStep = 10;
var width = 100;
var height = 120;

var ringWidth = [680,1080,1280]
var ringHeight = [580, 980, 1320]
var strokeWidthStep = [10, 164, 24]

for(var i = 0; i < 6; i ++){
  r.ellipse(1000, 200, i * Rune.random(ringWidth[i]), i * Rune.random(ringHeight[i]))
  .fill(false)
  .stroke(0)
  .strokeWidth(i * Rune.random(strokeWidthStep[i]));
}

    //creates 100 random stars
    // for(var i = 0; i < 100; i++) {
    //   r.ellipse(Rune.random(r.width), Rune.random(r.height), 3, 3)
    //   .fill(255)
    //   .stroke(false);
    // }

    r.draw();
