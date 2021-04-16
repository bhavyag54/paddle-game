export default class Ball {
    
    constructor(gameWidth, gameHeight) {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.image = document.getElementById("img_ball");

        this.position = {x:200, y:200};
        this.speed = {x:2,y:2};

        this.size = 20;

    }


    draw(ctx) {
        ctx.drawImage(
            
            this.image, 
            this.position.x, 
            this.position.y,
            this.size, 
            this.size
            );
    }


    update(deltaTime) {

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        
        if(this.position.x+this.size > this.gameWidth || this.position.x<0)
        {
            this.speed.x = -this.speed.x;
        }

        if(this.position.y+this.size > this.gameHeight || this.position.y<0)
        {
            this.speed.y = -this.speed.y;
        }
    }
}