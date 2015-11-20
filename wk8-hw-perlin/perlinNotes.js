PERLIN NOISE NOTES IN CLASS
NOV 16, 2015

//start with the incremeneter
//start with multiplier
//then seed then detail
//each number affects the others

var noise = new Rune.Noise();
noise.noiseSeed(5);
noise.noiseDetail(0.4); //smooths the line out, values start at 1 but it can take a float


var perlinPath = r.path(100,100);

for (var i = 0; i < sinLength; i++){
  var x = i * 10;
  var y = noise.get(i * 0.1)* 100;

  //this moves the seed of the line to 0,50 which must happen inside the for loop
  if(i == 0){
  perlinPath.moveTo(0, 50)
  }

  perlinPath.lineTo(x, y)

}
