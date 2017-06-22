// Global variables
var canvas, ctx, w, h;

var balls = [];

var player = {
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    color: 'red'
}

// Initialize DOM
window.onload = function() {
    console.log("The DOM is ready!");

    canvas = document.querySelector("#myCanvas");

    // often useful
    w = canvas.width;
    h = canvas.height;

    // important; we will draw with this object
    ctx = canvas.getContext('2d');

    // create 10 balls
    balls = createBalls(10);

    // ready to go!
    mainLoop();
};

function mainLoop() {
    // 1 - clear the canvas
    ctx.clearRect(0, 0, w, h);

    // draw the ball and the player
    drawFilledRectangle(player);
    drawAllBalls(balls);

    // animate the ball that is bouncing all over the walls
    moveAllBalls(balls);

    // ask for a new animation frame
    requestAnimationFrame(mainLoop);
}

function createBalls(n) {
    // empty array
    var ballArray = [];

    // create n balls
    for (var i = 0; i < n; i++) {
        var b = {
            x: w/2,
            y: h/2,
            radius: 5 + 30 * Math.random(), // b/w 5 and 35
            speedX: -5 + 10  * Math.random(), // between -5 and +5
            speedY: -5 + 10 * Math.random(), // between -5 and +5
            color: getARandomColor(),
        }
        
        // add ball to the array
        ballArray.push(b);
    }

    // returns the array full of randomly created balls
    return ballArray;
}

function getARandomColor() {
    var colors = ['red', 'blue', 'yellow', 'cyan', 'purple', 'pink', 'green'];
    
    // a value between 0 and colors.length-1
    // Math.round = rounded value
    // Math.randon () a value between 0 and 1
    var colorIndex = Math.round((colors.length - 1) * Math.random());
    var c = colors[colorIndex];

    // returns the randon color
    return c;
}

function drawAllBalls(ballArray) {
    ballArray.forEach(function(b) {
        drawFilledCircle(b);
    });
}

function moveAllBalls(ballArray) {
    // Iterate on all balls in array
    ballArray.forEach(function(b) {
        // b is the current ball in the array
        b.x += b.speedX;
        b.y += b.speedY;

        testCollisionBallWithWalls(b);
    });
}

function testCollisionBallWithWalls(b) {
    // COLLISION with vertical walls
    if ((b.x + b.radius) > w) {
        // the ball hit the right wall
        // change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = w - b.radius;
    } else if ((b.x - b.radius) < 0) {
        // the ball hit the left wall
        // change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = b.radius;
    }

    // COLLISION with horizontal walls
    // Not in the else as the ball can
    // touch both horizontal and vertical
    // walls in the corners
    if ((b.y + b.radius) > h) {
        // the ball his the right wall
        // change horizontal direction
        b.speedY = -b.speedY;

        // put the ball at the collision point
        b.y = h - b.radius;
    } else if ((b.y - b.radius) < 0) {
        // the ball hit the left wall
        // change horizontal direction
        b.speedY = -b.speedY;

        // put the ball at the collision point
        b.y = b.radius;
    }
}

function drawFilledRectangle(r) {
    // GOOD PRACTIcE! Save the context, use 2d transformations
    ctx.save();

    // translate the ordinary coordinate system, draw relative to it
    ctx.translate(r.x, r.y);

    ctx.fillStyle = r.color;

    // (0, 0) is the top left corner of the monster
    ctx.fillRect(0, 0, r.width, r.height);

    // GOOD PRACTIcE: restor the content
    ctx.restore();
}

function drawFilledCircle(c) {
    ctx.save();

    ctx.translate(c.x, c.y);

    ctx.fillStyle = c.color;

    ctx.beginPath();

    ctx.arc(0, 0, c.radius, 0, 2*Math.PI);
    ctx.fill();

    ctx.restore();
}