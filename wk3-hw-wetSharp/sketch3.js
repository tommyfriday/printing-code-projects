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
put both for loops inside another for loop and repeat the drip clumps across the page
repetition = wet
*/

var paintDripsX = 350;
var paintDripsY = 400;

drawDrips(0, 0, width, height, 7, 95);

function drawDrips (x, y, width, height, numDrips, spacing){
  var paintLeft, paintRight;

  for (var b = 0; b < numDrips; b++){


      for(var i = 0; i<7; i++){
          paintLeft = r.path(x+70, y+20)
                .curveTo(-40, 500, 20, 250)
                .curveTo(-45, 500, 20, 500)
                .curveTo(-25, 500, 20, 700)
                // .closePath()
                .fill(0)
                .stroke(false);
      }

      for(var i = 0; i<7; i++){
          paintRight = r.path(x+70, y+20)
                .curveTo(40, 500, 20, 250)
                .curveTo(45, 500, 20, 500)
                .curveTo(125, 500, 20, 700)
                // .closePath()
                .fill(0)
                .stroke(false);
      }

        x += spacing;
  }
}

  r.draw ();
