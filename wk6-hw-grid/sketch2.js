/*
Tommy Payne
Grid Systems V2
Grid homework for Printing Code Fall 2015
*/
var r = new Rune({
    container: "#canvas",
    width: 500,
    height: 700,
    // debug: true
  });

  // // Create a new Rune.Font object
  // var f = new Rune.Font("AlfaSlabOne-Regular.ttf");
  //
  // f.load(function(err) {

    // Get a path of the text "Rune" from the font
    // // a x,y 200,200 and font size 120.
    // var path = f.toPath("The Unbearable Lightness of Being", 25, 25, 18)
    //   .fill(25, 10, 0)

    r.text("Modern Mathematics", 25, 100)
            .fill(0)
            .stroke(false)
            .fontSize(34)
            .textAlign("left")
            .fontWeight("bold")
            .fontFamily("TitilliumWeb-Black")

    r.text("Devore, Jay L., Berk, Kenneth N.", 25, 115)
                .fill(0)
                .stroke(false)
                .fontSize(14)
                .textAlign("left")
                .fontWeight("bold")
                .fontFamily("TitilliumWeb-Black")

var grid = r.grid({
    x: 25,
    y: 25,
    width: r.width - 50,
    height: r.height - 50,
    columns: 8,
    rows:12
});

//triangle object looped thru to draw randomly on the grid
for(var i = 0; i < 20; i++){

    var x = grid.vars.moduleWidth;
    var y = grid.vars.moduleHeight;
    var tri = r.triangle(0, 0,
      0,  (y+grid.vars.moduleHeight),
      (x + grid.vars.moduleWidth), (y+grid.vars.moduleHeight))
      // .fill(Rune.random(0,255), 0.40)
      .fill(Rune.random(200, 255), 12, Rune.random(2, 255), 0.40)
      .stroke(false);

    var randomCol = Math.ceil(Rune.random(0,7));
    var randomRow = Math.ceil(Rune.random(4, 11));
    grid.add(tri, randomCol, randomRow);
}

//rect object looped thru to draw randomly on the grid
for(var i = 0; i < 8; i++){

    var x = grid.vars.moduleWidth;
    var y = grid.vars.moduleHeight;
    var square = r.rect(0, 0, x + grid.vars.moduleWidth, y+grid.vars.moduleHeight)
    .fill(Rune.random(200, 255), 12, Rune.random(2, 255), 0.40)
      .stroke(false);

    var randomCol = Math.ceil(Rune.random(1,7));
    var randomRow = Math.ceil(Rune.random(5, 11));
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
        .fill(0)
        .stroke(false);
        grid.add(whiteTri2, 6, 9);


r.draw ();
// });
