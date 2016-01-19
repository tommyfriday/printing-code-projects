/*
Tommy Payne
Wet and Dry design homework for Printing Code Fall 2015
relief of liquor flask in black and white
*/

var r = new Rune({
    container: "#canvas",
    width: 1000,
    height: 700,
    // debug: true
  });

var width = 1000;
var height = 700;

r.rect(width-700, height-330, 400, 200)
  .fill(false)
  .stroke(0);

//flask cap elements - parent group to draw the flask
var groupCap = r.group(r.width / 2, r.height / 2);
  r.rect(-40, -15, 80, 15, groupCap)
    .fill(0)
    .stroke(false);

    r.rect(-40, -35, 80, 10, groupCap)
      .fill(0)
      .stroke(false);

      r.rect(-30, -25, 60, 10, groupCap)
        .fill(0)
        .stroke(false);

        r.rect(-30, 0, 60, 10, groupCap)
          .fill(0)
          .stroke(false);

var paintSpacesSteps = [300, 350, 380, 410, 460, 475, 500]; //space betweeb paint drips
var paintDripsX = 350;
var paintDripsY = 400;
var dripLength = [200, 85, 120, 145, 156, 190, 180];

for(var i = 0; i<7; i++){
  var paint = r.path(paintDripsX, paintDripsY)
          // .moveTo(300,400)
          // .lineTo()
          .curveTo(-40, 500, 30, 10)
          .curveTo(45, -50, 55, 10)
          .curveTo(35, 470, 88, 20)
          .lineTo(90, -30)
          .lineTo(1, -30)
          .closePath()

          // .curveTo(150, 25, i * Rune.random(paintDripsX[i]), i * Rune.random(paintSpacesSteps[i]))
          .fill(0)
          .stroke(0)
}

// paintDrips (300, 400, paintSpaces, dripLength);
// function paintDrips()

// draw wet paint path -- inside for loop
// var p = r.path(300, 400)
//     .lineTo(100, 170)
//     .curveTo(12, 84, 110, 20)
//     .curveTo(190, 80, 190, 200)
//     .fill(false)
//     .stroke(0)

    //i want to draw a sin wave that looks like wet paint
    //which has random variation in it

// for (var i = 0; i<10; i++){
//     var p = r.path(400, 400)
//         // .lineTo(100,100)
//         .curveTo(i*12, 104, i*(-13), -200))
//         // .curveTo(190, 200, 190, 200)
//         .fill(false)
//         .stroke(0)
//   }

var wet = r.polygon(width/2, height/2);
var numPoints = 200;
var numDegrees = 360/numPoints;

// the radians amount has to match, as does the radius amount
var x = Math.cos(Rune.radians(45)) * 300;
var y = Math.sin(Rune.radians(45)) * 300;
// use the Rune.radians in built function and parse in 45 degrees so the second circle will be placed
// at 45 degrees along the perimeter of the first circle

// r.circle(x,y,20);


// var p = r.path(600, 600)
//   .lineTo(100,100)
//   . curveTo(100, 190, -100, 190, -100, 100)
// curveTo arguments are first control point, second control point and the current position of the pen

  r.draw ();
