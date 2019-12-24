import Paddle from "/src/paddle.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600); //clear everything on the screen
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();