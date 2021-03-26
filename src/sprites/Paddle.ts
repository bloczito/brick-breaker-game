import {Vector} from "~/types";

export class Paddle {

    private _image: HTMLImageElement = new Image();
    private _moveLeft: boolean;
    private _moveRight: boolean;


    constructor(
        private _speed: number,
        private _width: number,
        private _height: number,
        private _position: Vector,
        image: string
    ) {
        this._speed = _speed;
        this._width = _width;
        this._height = _height;
        this._position = _position;
        this._moveLeft = false;
        this._moveRight = false;
        this._image.src = image;

        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    }

    handleKeyDown = (e: KeyboardEvent) : void => {
        if (e.code=== "ArrowLeft" || e.key === "ArrowLeft") this._moveLeft = true;
        if (e.code=== "ArrowRight" || e.key === "ArrowRight") this._moveRight = true;
    }

    handleKeyUp = (e: KeyboardEvent) : void => {
        if (e.code=== "ArrowLeft" || e.key === "ArrowLeft") this._moveLeft = false;
        if (e.code=== "ArrowRight" || e.key === "ArrowRight") this._moveRight = false;
    }

    movePaddle(): void {
        if (this._moveLeft) this.pos.x -= this._speed;
        if (this._moveRight) this.pos.x += this._speed;
    }



    get height(): number {
        return this._height;
    }

    get width():number {
        return this._width;
    }

    get pos(): Vector {
        return this._position;
    }

    get image(): HTMLImageElement {
        return this._image
    }

    get isMovingLeft(): boolean {
        return this._moveLeft;
    }

    get isMovingRight(): boolean {
        return this._moveRight;
    }
}