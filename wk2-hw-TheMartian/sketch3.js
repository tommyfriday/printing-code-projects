
  var r = new Rune({
    container: "#canvas",
    width: 1200,
    height: 800,
    debug: true
  });


// var x1 = random()
// var y1 = random()
// var x2 = random()
// var y2 = random()
//
//   r.line(x1,y1,x2,y2)

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    for (var i = 0; i <800; i++) {
    	var x = Math.floor(Math.random() * (r.width))
    	var y = Math.floor(Math.random() * (r.height))
    	// r.line(x, y, x+5, y+5)
      r.line(x, y, x+5, y+5)
      .strokeWidth(0.8)
      .stroke(255)
    }

//base white rect
    r.ellipse(600, 400,600, 400)
      .fill(0)

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      for (var i = 0; i <800; i++) {
      	var x = Math.floor(Math.random() * (r.width))
      	var y = Math.floor(Math.random() * (r.height))
      	r.line(x, y, x+5, y+5)
        .strokeWidth(0.8)
        .stroke(0)
      }

for (var i = 0; i <)

  r.draw();
