export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;

    this.width = 150; //widht for paddle
    this.height = 20; // height for paddle

    this.maxSpeed = 10; //max speed for paddle
    this.speed = 0; //speed in this moment for paddle

    this.position = {
      //position for paddle
      x: game.gameWidth / 2 - this.width / 2, //position paddle in center of canvas
      y: game.gameHeight - this.height - 5 //horisontal position of paddle
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed; //move left paddle
  }

  moveRight() {
    this.speed = this.maxSpeed; //move right paddle
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    // this func draw the paddle
    ctx.fillStyle = "#0ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    //update paddle

    this.position.x += this.speed; // moving paddle left or right

    if (this.position.x < 0) this.position.x = 0; // paddle can't go outside of canvas (for left side)
    if (this.position.x + this.width > this.gameWidth)
      // paddle can't go outside of canvas (for right side)
      this.position.x = this.gameWidth - this.width;
  }
}
