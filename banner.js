var canvas = document.getElementById("bannerCanvas");
var c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

c.fillStyle = "#FFFFFF";
//c.fillRect(0, 0, canvas.width, canvas.height);

/*Console.log("test");




var framerate = 60;
var particleArray = [];

// util functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomVelocity(r) {
  this.output = Math.random() * r;
  if (Math.random() < 0.5) {
    this.output *= -1;
  }
  return this.output;
}


// particle function
function Particle (x, y) {
	this.x = x;
	this.y = y;
	this.dx = randomVelocity(2);
	this.dy = randomvelocity(2);

	this.radius = 20;
	
	this.update = function() {
		c.beginPath();
		c.fillStyle = "#04D4F0";
		
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		c.fill();
		c.closePath();
	}

	this.x += this.dx;
	this.y += this.dy;

}

//runtime functions

function init() {
	for (var i = 0; i < 100; i++) {
		particleArray.push(new Particle(randomIntFromRange(0, canvas.width), randomIntFromRange(0, canvas.height)));
	}
}

function animate() {
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < particleArray.length; i++) {
		particleArray[i].update();
	}
	Console.log("test");
}

init();
setInterval(animate, 1000/framerate);
*/