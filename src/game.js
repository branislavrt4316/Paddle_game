import Paddle from "/src/paddle.js";
import InputHandler from "/src/inputs.js";
import Ball from "/src/ball.js";
import { buildLevel, level1 } from "/src/levels.js";

export default class Game {
  constructor(gameWidth, gameHeight, bricksPerRow) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);

    let brickss = buildLevel(this, level1);

    this.gameObjects = [this.ball, this.paddle, ...brickss];

    new InputHandler(this.paddle); // call constructor for InputHandler
  }

  update(deltaTime) {
    this.gameObjects.forEach(object => object.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
