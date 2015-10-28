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

  // // Create a new Rune.Font object
  // var f = new Rune.Font("AlfaSlabOne-Regular.ttf");
  //
  // f.load(function(err) {

    // Get a path of the text "Rune" from the font
    // // a x,y 200,200 and font size 120.
    // var path = f.toPath("The Unbearable Lightness of Being", 25, 25, 18)
    //   .fill(25, 10, 0)

r.text("The Unbearable Lightness of Being", 25, 40)
      .fill(20, Rune.random(200, 255), Rune.random(2, 255), 0.20)
      .stroke(false)
      .fontSize(14)
      .textAlign("left")
      .fontFamily("Special Elite");

r.text("Milan Kundera", 25, 60)
            .fill(200)
            .stroke(false)
            .fontSize(14)
            .textAlign("left")
            .fontFamily("Special Elite")

var grid = r.grid({
    x: 25,
    y: 25,
    width: r.width - 50,
    height: r.height - 50,
    columns: 4,
    rows:6
});

//triangle object looped thru to draw randomly on the grid
for(var i = 0; i < 10; i++){

    var x = grid.vars.moduleWidth;
    var y = grid.vars.moduleHeight;
    var tri = r.triangle(0, 0,
      0,  (y+grid.vars.moduleHeight),
      (x + grid.vars.moduleWidth), (y+grid.vars.moduleHeight))
      .fill(20, Rune.random(200, 255), Rune.random(2, 255), 0.20)
      .stroke(false);

    var randomCol = Math.ceil(Rune.random(0,3));
    var randomRow = Math.ceil(Rune.random(2, 5));
    grid.add(tri, randomCol, randomRow);
}

//rect object looped thru to draw randomly on the grid
for(var i = 0; i < 4; i++){

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

r.draw ();
// });
