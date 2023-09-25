import {Effect} from "./Effect.ts";

export class Particle {
    effect: Effect;
    x: number;
    y: number;
    originX: number;
    originY: number;
    size: number;
    color: string;
    velocityX: number;
    velocityY: number;
    ease: number;




    constructor(effect: Effect, color: string, x: number, y: number) {
        this.effect = effect;
        this.color = color;
        this.x = Math.random() * this.effect.width * -54;
        this.y = Math.random() * this.effect.height *10;
        // this.x = x;
        // this.y = y;
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.size = this.effect.gap;
        this.velocityX =  0;
        this.velocityY = 0;
        this.ease = 0.05
    }

    draw(context: CanvasRenderingContext2D){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size,this.size)
    }

    update(){
        this.x += (this.originX - this.x) * this.ease;
        this.y += (this.originY - this.y) * this.ease;
    }

    wrap(){

    }

}