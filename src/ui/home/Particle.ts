import {randomIntInRange} from "../../utils/utility.tsx";
import {MousePosition} from "./MousePosition.ts";

export class Particle {

    x: number;
    y: number;
    originX: number;
    originY: number;
    maxSize: number;
    color: string;
    velocityX: number;
    velocityY: number;
    ease: number;
    dx: number;
    dy: number;
    distance: number;
    angle: number;
    friction: number;
    force: number;
    mouse: MousePosition;


    constructor(mouse: MousePosition, maxSize: number, color: string, x: number, y: number) {
        this.mouse = mouse
        this.color = color;
        this.x = x;
        this.y = y;
        this.originX = x
        this.originY = y
        this.maxSize = randomIntInRange(1, maxSize);
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
        context.arc(this.x, this.y, this.maxSize, 0, Math.PI * 2);
        context.fill();
    }

    update() {
        this.dx = this.mouse.mouseX - this.x;
        this.dy = this.mouse.mouseY - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;

        if (this.distance < this.mouse.radius) {
            this.angle = Math.atan2(this.dy, this.dx)
            this.velocityX += this.force * Math.cos(this.angle);
            this.velocityY += this.force * Math.sin(this.angle);

        }


        this.backToOrigin();
    }

    backToOrigin() {
        this.x += (this.velocityX *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.velocityY *= this.friction) + (this.originY - this.y) * this.ease;
    }





}