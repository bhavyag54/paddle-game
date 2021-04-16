import Paddle from '../src/paddle';
import InputHandler from '../src/input';
import Ball from '../src/ball';

let canvas = document.getElementById('gameScreen');

let ctx = canvas.getContext('2d');

const GAME_WIDTH = canvas.clientWidth;
const GAME_HEIGHT = canvas.clientHeight;

ctx.clearRect(0,0, GAME_WIDTH,GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

paddle.draw(ctx);

let lastTime = 0;

let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);


function gameLoop(timestamp) {

    let deltaTime = timestamp - lastTime;

    lastTime = timestamp;

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

    paddle.update(deltaTime);

    paddle.draw(ctx);

    ball.update(deltaTime);
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);

