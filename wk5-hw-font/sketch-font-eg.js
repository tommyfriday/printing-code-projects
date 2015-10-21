var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 500
});


// Create a new Rune.Font object
var f = new Rune.Font("AlfaSlabOne-Regular.ttf");

// load() will actually load the font file and call the function
// when the loading is done.
f.load(function(err) {

  // Get a path of the text "Rune" from the font
  // a x,y 200,200 and font size 120.
  var path = f.toPath("POP", 150, 200, 180)
    .fill(25, 10, 0)


  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  // r.stage.add(path);

  // Just for fun, convert the path to polygons.
  var polys = path.toPolygons({ spacing:25 });

  // loop through the points and change them a little bit
  for(var i = 0; i < polys.length; i++) {

    var poly = polys[i];
    poly.move(0, 200, true);

    for(var j = 0; j < poly.vars.vectors.length; j++) {
      var vec = poly.vars.vectors[j];
      vec.x += Rune.random(-3, 3);
      vec.y += Rune.random(-3, 3);
      r.circle(poly.vars.x + vec.x, poly.vars.y + vec.y, 7, 7)
      .fill('hsv', 45, Rune.random(80, 100), Rune.random(69, 100))
      .stroke('hsv', 45, Rune.random(80, 100), Rune.random(69, 100))
    }

  }

  r.draw();
});
