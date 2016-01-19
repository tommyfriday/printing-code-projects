/*
Tommy Payne
Wet and Dry design homework for Printing Code Fall 2015
relief of liquor flask in black and white
or single paint drip
*/

var r = new Rune({
    container: "#canvas",
    width: 800,
    height: 800,
    // debug: true
  });

var width = 800;
var height = 800;

r.rect(0, 0, width, height)
  .fill(255)
  .stroke(false);

/*
draw stroke, of curving ribbon down the page
*/

function drawLine (x, y, numDrips, spacing){

    var paintLeft, paintRight;

  for (var b = 0; b < numDrips; b++){

    for (var i=0; i<47; i++){
          var ribbon = r.path(x, y)
              .curveTo(-80, 500, 300, 310)
              .curveTo(45, 150, 255, 429)
              .curveTo(35, 470, 388, 520)
              .curveTo(135, 770, 488, 620)
              .curveTo(35, 570, 388, 520)
              .curveTo(335, 570, 488, 1620)
              // .closePath()
              // .curveTo(150, 25, i * Rune.random(paintDripsX[i]), i * Rune.random(paintSpacesSteps[i]))
              .fill(false)
              .strokeWidth(0.5)
              .stroke(0);
            }
      x += spacing;
  }
}
drawLine(100, 10, 47, 3);

r.rect(480, height-10, 150, 10)
  .fill(255)
  .stroke(false);

/*
var paintDripsX = 350;
var paintDripsY = 400;

drawDrips(300, 0, width, height, 1, 95); //calls the function

//function to draw many drips
function drawDrips (x, y, width, height, numDrips, spacing){
  var paintLeft, paintRight;

  for (var b = 0; b < numDrips; b++){


      for(var i = 0; i<7; i++){
          paintLeft = r.path(x+70, y+60)
                .curveTo(-40, 500, 20, 250)
                .curveTo(-45, 500, 20, 500)
                .curveTo(-25, 500, 20, 700)
                // .closePath()
                .fill(0)
                .stroke(false)
                // .rotate(-25);
      }

      for(var i = 0; i<7; i++){
          paintRight = r.path(x+70, y+60)
                .curveTo(40, 500, 20, 250)
                .curveTo(45, 500, 20, 500)
                .curveTo(125, 500, 20, 700)
                // .closePath()
                .fill(0)
                .stroke(false)
                // .rotate(-25);
      }

        x += spacing;
  }
}
*/
  r.draw ();
