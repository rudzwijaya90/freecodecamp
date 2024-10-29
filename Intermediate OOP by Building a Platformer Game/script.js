const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p") //child selector > to target p paragraph element
const ctx = canvas.getContext("2d"); //canvas element for 2D
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5; //to bring player back down after player jumps
let isCheckpointCollisionDetectionActive = true;

//to make game responsive to different screen sizes
const proportionalSize = (size) => { 
    return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

//define characteristics player
class Player {
    constructor() {
      this.position = {
        x: proportionalSize(10),
        y: proportionalSize(400)
      };
      this.velocity = {
        x: 0,
        y: 0
      };
      this.width = proportionalSize(40);
      this.height = proportionalSize(40);
    }
    draw() {
      //for creating width, height, position and fill color
      ctx.fillStyle = "#99c9ff";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {
      this.draw();
      this.position.x += this.velocity.x; //when player move, adjust the position
      this.position.y += this.velocity.y; //when player jump, adjust the position
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        //to prevent player jump past the height of the canvas
        if (this.position.y < 0) {
          this.position.y = 0;
          this.velocity.y = gravity;
        }
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
      if (this.position.x < this.width) { //to make sure player stays within the boundaries of the canvas screen and doesn't move too far off to the left.
        this.position.x = this.width;
      }
      if (this.position.x >= canvas.width - this.width * 2) { //to make sure player not exceeded the right edge of the canvas
        this.position.x = canvas.width - this.width * 2;
      }
    }
  }

  const player = new Player(); //new Player() object

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clearRect() Web API
    player.update();
    if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
      player.velocity.x = 5;
    } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
      player.velocity.x = -5;
    } else {
      player.velocity.x = 0;
    }
  };

  const keys = {
    rightKey: {pressed: false},
    leftKey: {pressed: false},
  };

  const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive ) {
      player.velocity.x = 0;
      player.velocity.y = 0;
      return;
    }
    switch (key) {
      case "ArrowLeft":
        keys.leftKey.pressed = isPressed;
        if (xVelocity === 0) {
          player.velocity.x = xVelocity;
        }
        player.velocity.x -= xVelocity;
        break;
      case "ArrowUp":
      case " ":
      case "Spacebar":
        player.velocity.y -= 8;
        break;
      case "ArrowRight":
        keys.rightKey.pressed = isPressed;
        if (xVelocity === 0) {
          player.velocity.x = xVelocity;
        } 
        player.velocity.x += xVelocity;
    }
  };

  const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";
    //player.draw();
    animate();
  };

  startBtn.addEventListener("click", startGame);
  
  window.addEventListener("keydown", ({key}) => { //destructuring assignment to get the key property from the event object
    movePlayer(key, 8, true);
  });

  window.addEventListener("keyup", ({key}) => {
    movePlayer(key, 0, false);
  });