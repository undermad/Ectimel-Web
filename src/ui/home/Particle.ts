import {Effect} from "./Effect.ts";
import {randomIntFromInterval} from "../../utils/utility.tsx";

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
    dx: number;
    dy: number;
    distance: number;
    angle:number;
    friction: number;
    force: number;


    constructor(effect: Effect, color: string, x: number, y: number) {
        this.effect = effect;
        this.color = color;
        this.x =x;
        this.y = y;
        this.originX = x
        this.originY = y
        this.size = randomIntFromInterval(1, 4);
        this.velocityX = 0;
        this.velocityY = 0;
        this.ease = 0.1
        this.dx = 0;
        this.dy = 0;
        this.distance = 0
        this.angle = 0;
        this.friction = 0.98
        this.force = -3;
    }

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }

    update() {
        this.dx = this.effect.mouseX - this.x;
        this.dy = this.effect.mouseY - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;

        if (this.distance < this.effect.mouseRadius) {
            this.angle = Math.atan2(this.dy, this.dx)
            this.velocityX += this.force * Math.cos(this.angle);
            this.velocityY += this.force * Math.sin(this.angle);

        }


        this.x += (this.velocityX *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.velocityY *= this.friction) + (this.originY - this.y) * this.ease;
    }


}