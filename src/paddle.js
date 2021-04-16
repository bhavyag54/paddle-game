export default class Paddle {

    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.width = 150;
        this.height = 20;

        this.maxSpeed = 5;
        this.speed = 0;

        this.position = {
            x:gameWidth/2 - this.width/2,
            y:gameHeight - this.height - 10
        };
    } 

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = '#1ac';
        ctx.fillRect(this.position.x, this.position.y,this.width, this.height);

    }

    update(deltaTime) {

        this.position.x += this.speed;

        if(this.position.x < 10) 
        {
            this.position.x = 10;
            this.speed = 0;
        }
        if(this.position.x + this.width + 10 > this.gameWidth) 
        {
            this.position.x = this.gameWidth - this.width - 10;
            this.speed = 0;
        }
    }
}