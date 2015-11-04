/*
Tommy Payne
Grid Systems
Grid homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    // debug: true
  });


r.text("Modern Mathematics", 25, 100)
                  // .fill(120, Rune.random(100, 255), Rune.random(2, 255))
                  .fill(0)
                  .stroke(false)
                  .fontSize(34)
                  .textAlign("left")
                  .fontWeight("bold")
                  .fontFamily("Helvetica");

r.text("by Unknown", 25, 65)
            .fill(0)
            .stroke(false)
            .fontSize(14)
            .textAlign("left")
            .fontWeight("bold")
            .fontFamily("Helvetica")

var grid = r.grid({
    x: 25,
    y: 25,
    width: r.width - 50,
    height: r.height - 50,
    columns: 4,
    rows:6
});

//triangle object looped thru to draw randomly on the grid
for(var i = 0; i < 6; i++){

    var x = grid.vars.moduleWidth;
    var y = grid.vars.moduleHeight;
    var tri = r.triangle(0, 0,
      0,  (y+grid.vars.moduleHeight),
      (x + grid.vars.moduleWidth), (y+grid.vars.moduleHeight))
      .fill(Rune.random(200, 255), 12, Rune.random(2, 255), 0.40)
      .stroke(false);

    var randomCol = Math.ceil(Rune.random(0,3));
    var randomRow = Math.ceil(Rune.random(2, 5));
    grid.add(tri, randomCol, randomRow);
}

//rect object looped thru to draw randomly on the grid
for(var i = 0; i < 3; i++){

    var x = grid.vars.moduleWidth;
    var y = grid.vars.moduleHeight;
    var square = r.rect(0, 0, x + grid.vars.moduleWidth, y+grid.vars.moduleHeight)
      .fill(Rune.random(200, 255), 12, Rune.random(2, 255), 0.40)
      .stroke(false);

    var randomCol = Math.ceil(Rune.random(1,3));
    var randomRow = Math.ceil(Rune.random(2, 5));
    grid.add(square, randomCol, randomRow);
  }

var whiteTri = r.triangle(0, 0,
    0,  (y+grid.vars.moduleHeight)/2,
    (x + grid.vars.moduleWidth)/2, (y+grid.vars.moduleHeight)/2)
    .fill(255)
    .stroke(false);
    grid.add(whiteTri, 2, 5);

    var whiteTri2 = r.triangle(0, 0,
        0,  (y+grid.vars.moduleHeight)/2,
        (x + grid.vars.moduleWidth)/2, (y+grid.vars.moduleHeight)/2)
        .fill(255)
        .stroke(false);
        grid.add(whiteTri2, 4, 3);

r.draw ();
// });
