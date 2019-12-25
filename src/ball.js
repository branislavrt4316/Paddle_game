import { detectCollision } from "/src/colisionDetection.js";

export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth; // Width of canvas
    this.gameHeight = game.gameHeight; // Height of canvas

    this.game = game;

    this.size = 16; // Ball size
    this.reset();
  }

  reset() {
    this.position = { x: 10, y: 400 }; // Start position for the Ball
    this.speed = { x: 6, y: -4 }; // Ball speed
  }

  draw(ctx) {
    //drawing Ball
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    //make moving a Ball
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    //wall on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // bottom of the game

    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
