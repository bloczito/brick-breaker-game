import {Vector} from "~/types";

export class Brick {
    private brickImage: HTMLImageElement = new Image();

    constructor(
        private brickWidth: number,
        private brickHeight: number,
        private position: Vector,
        private brickEnergy: number,
        image: string
    ) {
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage.src = image
    }


    get width(): number {
        return this.brickWidth;
    }

    set width(value: number) {
        this.brickWidth = value;
    }

    get height(): number {
        return this.brickHeight;
    }

    set height(value: number) {
        this.brickHeight = value;
    }

    get pos(): Vector {
        return this.position;
    }

    set pos(value: Vector) {
        this.position = value;
    }

    get energy(): number {
        return this.brickEnergy;
    }

    set energy(value: number) {
        this.brickEnergy = value;
    }


    get image(): HTMLImageElement {
        return this.brickImage;
    }

    set image(value: HTMLImageElement) {
        this.brickImage = value;
    }
}