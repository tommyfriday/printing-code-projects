
  var r = new Rune({
    container: "#canvas",
    width: 2000,
    height: 1000,
    debug: true
  });

var x = 300;
var y = 150;
var ellipseRadius = 300;
var triX = 200;
var triY = 170;

r.ellipse(769, 657, 310, 310)
.fill(255)
.stroke(0)
.strokeWidth(130)


//repeated triangle
    for (var i = 0; i<200; i++){
      r.triangle((triX++)*1.4, (triY++)*1.9, 600, 600, 850, 470)
      .fill(false)
      .stroke(0)
      .strokeWidth(0.1)
    };
// r.rect(0, 1000, 1500, 100, 400)
// .fill(0)
// .stroke(0)

// for (i = 0; i<100; i++){
//   r.rect(x--, y++, 200, 200)
//     //.fill(255, 0, 0)
//     .fill(false)
//     .stroke(255)
//   };

/*
th following are hard coded values for heavy stroke ice cream

r.ellipse(400, 270, 200, 200)
.fill(false)
.stroke(255)
.strokeWidth(30)

r.ellipse(600, 270, 200, 200)
.fill(false)
.stroke(255)
.strokeWidth(30)
*/

/*
  r.triangle(400, 370, 500,600, 600, 370)
  //  .fill(0, 255, 0)
  .fill(false)
    .stroke(255)
    .strokeWidth(30)
*/

/*
    // small ellipse
    for (var i = 0; i<35; i++){
      r.ellipse((x++ * 2), (y++ * 2.8), 220, 200)
      .fill(false)
        //.fill(0, 0, 255)
        .stroke(0)
        .strokeWidth(0.3)
    };

    // small ellipse
    for (var i = 0; i<55; i++){
      r.ellipse((x++ * 2), (y * 3.1), 330, 330)
      .fill(false)
      .stroke(0)
      .strokeWidth(0.5)
    };

    // small ellipse
    for (var i = 0; i<25; i++){
      r.ellipse((x-- * 1.7), (y-- * 2.8), 240, 200)
      .fill(false)
        //.fill(0, 0, 255)
        .stroke(0)
        .strokeWidth(0.8)
    };

    */
/*
// ellipse group to the right
for (var i = 0; i<300; i++){
  r.ellipse((x++ * 3.5), (y++ * 2.5), 650, 650)
  .fill(false)
    //.fill(0, 0, 255)
    .stroke(255)
        .strokeWidth(0.2)
};

for (var i = 0; i<300; i++){
  r.ellipse((x++ * 3.5), (y++ * 2.5), 650, 650)
  .fill(false)
    //.fill(0, 0, 255)
    .stroke(255)
        .strokeWidth(0.2)
};

//tallest ellipse group
// for (var i = 0; i<700; i++){
//   r.ellipse(((x++)-400), ((y++)-200), 650, 650)
//   .fill(false)
//     //.fill(0, 0, 255)
//     .stroke(255)
//     .strokeWidth(0.1)
// };

//lowest ellipse group
for (var i = 0; i<700; i++){
  r.ellipse(((x++)-700), ((y++)-500), 650, 650)
  .fill(false)
    //.fill(0, 0, 255)
    .stroke(255)
    .strokeWidth(0.1)
};
*/
  r.draw();
