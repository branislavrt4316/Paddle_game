import Paddle from "/src/paddle.js";
import InputHandler from "/src/inputs.js";
import Ball from "/src/ball.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800; //canvas width
const GAME_HEIGHT = 600; //canvas height

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle); // call constructor for InputHandler

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear everything on the screen
  paddle.update(deltaTime);
  paddle.draw(ctx); // draw a paddle

  ball.update(deltaTime); //move a Ball
  ball.draw(ctx); // draw a Ball

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
