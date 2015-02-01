//global variables
var score = 0;
var elem = document.getElementById("level");			
var level = elem.value;
var start = false;
//enemy class
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	// *Set initial bounds tied to the position the enemy was
	// *instantiated.
	this.x = x;
	this.y = y;
	this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

/*
 * return an array containing x and y
 * @returns {Array}
 */
Enemy.prototype.getPos = function() {
    this.pos = [];
    this.pos.push(this.x);
    this.pos.push(this.y);

    return this.pos;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x1 = this.x - 10;
	this.x2 = this.x + 80;
	this.y1 = this.y -10;
	this.y2 = this.y + 75;

	// If the enemy is on screen, move him at a rate multiplied
	// by dt and by the level (to increase game difficulty)
	if (this.x < 606) {
		this.x += 150 * dt * level;
	}
	// When the enemy runs off the screen, move him to the other 
	// side to start over
	else {
	function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min))+min;
	}
	var reUp = getRandom(-100, -500);
	this.x = reUp;
	}
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, image) {
	this.x = x;
	this.y = y;
	this.sprite = image;//'images/char-boy.png';
	this.render = function(dt) {
	//	console.log(Resources);
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	this.handleInput = function(input) {
		if (input === 'up') {
			this.y -= 82;
		}
		if (input === 'down') {
			if (this.y < 350){
				this.y += 82;
			}
		}
		if (input === 'left') {
			if (this.x > 1){
				this.x -= 101;
			}
		}
		if (input === 'right') {
			if (this.x < 505) {
				this.x += 101;
			}
		}
		// Keeps the player in bounds and controls what
		// happens when he reaches the water: awards him
		// 100 points, moves him back to start, and increases
		// the enemy speed when score more than multiple of 1000
		if (this.y < 50) {
			this.x = 203;
			this.y = 400;
			score += 100;
			document.getElementById("score").value = score;			
			if(score === level * 1000){
				document.getElementById("level").value ++;
			}
			
		}
	}
	
};
//player's position undates
Player.prototype.update = function(){
	this.x1 = this.x - 5;
	this.x2 = this.x + 75;
	this.y1 = this.y - 5;
	this.y2 = this.y + 50;
}

/*
* return an array containing x and y
* @return {array}
 */
Player.prototype.getPos = function() {
    this.pos = [];
    this.pos.push(this.x);
    this.pos.push(this.y);

    return this.pos;
};
// reset the position of player
Player.prototype.reset = function() {
    // initial position
    this.x = 201;
    this.y = 400;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player(203, 400, 'images/char-boy.png');

// TO DO: Create a function or method of Enemy to generate 
// Enemies at random. They can appear at random intervals 
// in any section of road only 
var allEnemies =[];
createTheEnemies();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
	
	//if (start)
        player.handleInput(allowedKeys[e.keyCode]);
   // else
    //    loading(allowedKeys[e.keyCode]);

    //player.handleInput(allowedKeys[e.keyCode]);
});

//create an enemy array
function createTheEnemies() {
   for (var i=0;i<3; i++) {
      // pick a random line (1, 2 or 3)
     // var randomLine = randomGenerator(0,2);
	  //var pos = [-200 * (i + 1) - (Math.floor(Math.random()*5) * 200), i * 80 + 60];
	  var pos = [-200 * (i + 1), i * 80 + 60];
      
      //console.log(pos[0] + ";" + pos[1]);   
      var speed = level;//randomGenerator(1,5);
	  console.log("speed:" + speed);   
     
	  //generatePos();
      var enemy = new Enemy(pos[0], pos[1],speed);
      allEnemies.push(enemy);
   }
}

