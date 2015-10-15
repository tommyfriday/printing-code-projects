POLYGONS & PATHS
WEEK 3 in class

- polygon has an X and Y and a lot of points inside it
- you chain the lineTo element, just like you chain the properties of r.rect or r.ellipse

e.g.
r.polygon(100, 200)
    .lineTo(0,0)
    .lineTo(50, 55)
    .lineTo(-100, 100)
    .fill(0)
    .stroke(255);

- unless you tell it explicitly: lineTo(0,0) Rune.js will always return to 0,0

- Math.random gives you a random number from -1 to 1

SIN & COSINE
- Basic shapes all come from the same "god" algorithm SIN and COSINE
- COSINE starts at 1 and oscillates between 1 and -1: make it X
- SIN starts at 0: then -1 to 1: make it Y
- need to multiply it by the radius of the circle to get the radians

- a lineTo is drawing a straight line between two points
- a curveTo draws a bezier between two points by using a third point to draw out the handle

    .moveTo
    .lineTo
    .curveTo
    .fillRule("nonzero" / "evenodd")

PATHS
- you must close a path by calling closePath()
- instead of vectors you have anchors
