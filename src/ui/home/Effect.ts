import {Particle} from "./Particle.ts";
import {IMAGE_AVATAR_BASE64} from "../about/ImageBase64.ts";
import {randomIntFromInterval} from "../../utils/utility.tsx";


export class Effect {

    width: number;
    height: number;
    particlesArray: Particle[];
    image: HTMLImageElement;
    imagePositionX: number;
    imagePositionY: number;
    imageWidth: number;
    imageHeight: number;
    gap: number;
    mouseRadius: number;
    mouseX: number;
    mouseY: number;
    canvas: HTMLCanvasElement;


    constructor(width: number, height: number,canvas: HTMLCanvasElement) {
        this.width = width;
        this.height = height;
        this.particlesArray = [];
        this.image = new Image();
        this.image.src = 'data:image/png;base64,' + IMAGE_AVATAR_BASE64;
        this.imageWidth = width;
        this.imageHeight = height;
        this.imagePositionX = 0;
        this.imagePositionY = 0;
        this.gap = 5;
        this.mouseRadius = 100;
        this.mouseX = 0;
        this.mouseY = 0;
        this.canvas = canvas;



        this.canvas.addEventListener('mousemove', (event) => {
            this.mouseX = event.clientX - this.canvas.offsetLeft;
            this.mouseY = event.clientY - this.canvas.offsetTop;
        })
    }

    init(context: CanvasRenderingContext2D) {
        context.drawImage(
            this.image,
            this.imagePositionX,
            this.imagePositionY,
            this.imageWidth,
            this.imageHeight);

        const pixels = context.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += (this.gap)) {
            for (let x = 0; x < this.width; x += (this.gap)) {
                const index = (y * this.width + x) * 4;
                const opacity = pixels[index + 3];
                const red = pixels[index];
                if (opacity > 0 && red < 100) {
                    const color = 'rgb(' + randomIntFromInterval(125, 145) + ',' + randomIntFromInterval(100, 120) + ',' + randomIntFromInterval(80, 90) + ')';
                    this.particlesArray.push(new Particle(this, color, (x + randomIntFromInterval(1, 3)), (y + randomIntFromInterval(1, 3))));
                }

            }
        }
        console.log(this.particlesArray)
    }

    draw(context: CanvasRenderingContext2D) {
        this.particlesArray.map((particle) => {
            particle.draw(context)
        })
    }

    update() {
        this.particlesArray.map((particle) => {
            particle.update();
        })
    }


}