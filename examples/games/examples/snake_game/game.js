// variable to obtain the canvas context
var canvas = null, ctx = null;

// variables for the movement of the player
var x = 50, y = 50;
var lastPress = null;

//constants for the keys
const KEY_LEFT = 37,
      KEY_UP = 38,
      KEY_RIGHT = 39,
      KEY_DOWN = 40;
let dir = 0;


// variables to measure frames per seconds
var lastUpdate = 0, fps = 0, frames = 0, acumDelta = 0;

// support for older browsers
window.requestAnimationFrame = (function () {
  return window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || function (callback) {
      window.setTimeout(callback, 17);
    };
}());

// function to measure the fps
function measureFPS() {
  var now = Date.now(),
      deltaTime = (now - lastUpdate)/1000;

  if (deltaTime > 1) {
    deltaTime = 0;
  }

  lastUpdate = now;
  frames++;
  acumDelta += deltaTime;
  if (acumDelta > 1) {
    fps = frames;
    frames = 0;
    acumDelta -=1;
  }
}

// functions

function act() {
  x += 2;
  if (x > canvas.width) {
    x = 0;
  }
}

function paint(ctx) {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0';
  ctx.fillRect(x, y, 10, 10);

  ctx.fillText('Last Press: ' + lastPress, 0, 20);

  ctx.fillStyle = '#fff';
  ctx.fillText('FPS: ' + fps, 10, 10);

}

// game initialitation
function init() {
  canvas = document.getElementById('canvas');
  ctx    = canvas.getContext('2d');
  run();
}

// loop for the game
function run() {
  window.requestAnimationFrame(run);
  measureFPS(ctx);
  act();
  paint(ctx);
}

// initialization of the game
window.addEventListener('load', init, false);
document.addEventListener('keydown', function (event) {
  lastPress = event.which;
  console.log(lastPress);
}, false);
