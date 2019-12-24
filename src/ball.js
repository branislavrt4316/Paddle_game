export default class Ball {
  constructor(game) {
    this.image = document.getElementById("img_ball");

    this.gameWidth = game.gameWidth; // Width of canvas
    this.gameHeight = game.gameHeight; // Height of canvas

    this.position = { x: 10, y: 10 }; // Start position for the Ball
    this.speed = { x: 4, y: 2 }; // Ball speed
    this.size = 36; // Ball size
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

    //keep Ball inside of canvas
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
  }
}
