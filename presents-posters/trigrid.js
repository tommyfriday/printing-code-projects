var r = new Rune({
    container: "#canvas",
    width: 300,
    height: 700,
    // debug: true
  });

  var grid = r.grid({
      x: 5, //gutter
      y: 5, //gutter
      width: r.width - 10,
      height: r.height - 10,
      columns: 4,
      rows:12
  });

  //triangle object looped thru to draw randomly on the grid
  for(var i = 0; i < 20; i++){

      var x = grid.vars.moduleWidth;
      var y = grid.vars.moduleHeight;
      var tri = r.triangle(0, 0,
        0,  (y+grid.vars.moduleHeight),
        (x + grid.vars.moduleWidth), (y+grid.vars.moduleHeight))
        .fill(0, .1)
        .stroke(255);

      var randomCol = Math.ceil(Rune.random(0,3));
      var randomRow = Math.ceil(Rune.random(1, 11));
      grid.add(tri, randomCol, randomRow);
  }



  r.draw();
