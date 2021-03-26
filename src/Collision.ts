import {Brick, Paddle, Ball} from "~/sprites";
import {CanvasView} from "~/view/CanvasView";

export class Collision {
    checkBallCollision(ball: Ball, padddle: Paddle, view: CanvasView) {
        //Collision with paddle
        if (
            ball.pos.x + ball.width > padddle.pos.x &&
            ball.pos.x < padddle.pos.x + padddle.width &&
            ball.pos.y + ball.height === padddle.pos.y
        ) {
            ball.changeYDirection();
        }

        //Collision with Walls
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) {
            ball.changeXDirection();
        }

        //Collision with ceil
        if (ball.pos.y < 0) {
            ball.changeYDirection();
        }
    }

    isCollidingBricks(ball: Ball, bricks: Brick[]): boolean {
        let colliding = false;

        bricks.forEach((brick, i) => {
            if (Collision.isCollidingBrick(ball, brick)) {
                ball.changeYDirection();

                if (brick.energy === 1) {
                    bricks.splice(i, 1);
                } else {
                    brick.energy -= 1;
                }
                colliding = true;
            }
        });

        return colliding;
    }

    private static isCollidingBrick(ball: Ball, brick: Brick): boolean {
        if (
            ball.pos.x < brick.pos.x + brick.width &&
            ball.pos.x + ball.width> brick.pos.x &&
            ball.pos.y < brick.pos.y + brick.height &&
            ball.pos.y + ball.height > brick.pos.y
        ) {
            return true;
        }

        return false;
    }

}