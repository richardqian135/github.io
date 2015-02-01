/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */

var Engine = (function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        patterns = {},
        lastTime;

    canvas.width = 505;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    // collision
    this.collision = false;

    // images of characters
    var charImages = [
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png'];

    // image of Selector
    var selectorImage = 'images/Selector.png';

    function main() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */

		update(dt);
		render();
		
        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    function init() {

        reset();
        lastTime = Date.now();
        main();

    }

    function update(dt) {
        if (this.collision)
        {
            var elem = document.getElementById("level")
			level = elem.value;
			this.collision = false;
            init();
        }
        else
        {
            updateEntities(dt);
            checkCollisions();
        }
    }

    function checkCollisions()
    {
        // player-enemies collisions
        allEnemies.forEach(function(enemy) {

            if (!this.collision)
            {
                // height of the sprite  of enemy and player is 171
                // width of the sprite of enemy and player is 101

                var pos;
                // enemy
                pos = enemy.getPos();
                var enemyX = pos[0] + 171 / 2;
                var enemyY = pos[1] + 101 / 2;

                // player
                pos = player.getPos();
                var playerX = pos[0] + 171 / 2;
                var playerY = pos[1] + 101 / 2;

                // check collisions
                // compute distance between enemy and player
                var distance = computeDist(enemyX, enemyY, playerX, playerY);
                // when they collide, distance is about 5.0990195135927845
                if (distance < 60)
                    this.collision = true;
            }
        });
    }

    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
    }

    function render() {
        var rowImages = [
                'images/water-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/stone-block.png',
                'images/grass-block.png',
                'images/grass-block.png'
            ],
            numRows = 6,
            numCols = 5,
            row, col;

        for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
            }
        }

        renderEntities();
    }

    function renderEntities() {
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        player.render();
    }

    function reset() {
        // reset player
        player.reset();
        // reset enemies
		allEnemies = [];
		createTheEnemies();
	}

    // resources loading
    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png',
        'images/char-cat-girl.png',
        'images/char-horn-girl.png',
        'images/char-pink-girl.png',
        'images/char-princess-girl.png',
        'images/Gem Blue.png',
        'images/Gem Green.png',
        'images/Gem Orange.png',
        'images/Heart.png',
        'images/Key.png',
        'images/Rock.png',
        'images/Selector.png',
        'images/Star.png'
    ]);
    Resources.onReady(init);

    global.ctx = ctx;

    // helper functions
    // compute the distance between two (x,y) points
    function computeDist(x1, y1, x2, y2)
    {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
})(this);
