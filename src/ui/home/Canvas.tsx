import React, {useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {Particle} from "./Particle.ts";
import {IMAGE_AVATAR_BASE64} from "../about/ImageBase64.ts";
import {randomIntFromInterval} from "../../utils/utility.tsx";
import {MousePosition} from "./MousePosition.ts";


export const Canvas: React.FC<{
    width: number;
    height: number;
    gap: number;
    maxSize: number;
    animation: boolean;
}> = (props) => {

    const width: number = props.width;
    const height: number = props.height;

    let particlesArray: Particle[] = [];

    const image: HTMLImageElement = new Image();
    image.src = 'data:image/png;base64,' + IMAGE_AVATAR_BASE64;
    const imagePositionX: number = 0;
    const imagePositionY: number = 0;
    const imageWidth: number = props.width;
    const imageHeight: number = props.height;
    const gap: number = props.gap;
    const mouse: MousePosition = new MousePosition();

    const canvasRef = useRef<HTMLCanvasElement | null>(null);



    const init = (context: CanvasRenderingContext2D) => {
        context.drawImage(
            image,
            imagePositionX,
            imagePositionY,
            imageWidth,
            imageHeight);

        const pixels = context.getImageData(0, 0, width, height).data;
        for (let y = 0; y < height; y += (gap)) {
            for (let x = 0; x < width; x += (gap)) {
                const index = (y * width + x) * 4;
                const opacity = pixels[index + 3];
                const red = pixels[index];

                if (opacity > 0 && red < 100) {

                    const color = 'rgb('
                        + randomIntFromInterval(125, 145) + ','
                        + randomIntFromInterval(100, 120) + ','
                        + randomIntFromInterval(80, 90) + ')';

                    particlesArray.push(new Particle(
                        mouse,
                        props.maxSize,
                        color,
                        (x + randomIntFromInterval(1, 3)),
                        (y + randomIntFromInterval(1, 3))));
                }

            }
        }
        console.log(particlesArray)
    }


    const draw = (context: CanvasRenderingContext2D) => {
        particlesArray.map((particle) => {
            particle.draw(context)
        })
    }

    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.addEventListener('mousemove', (event) => {
            mouse.mouseX = event.clientX - canvas.offsetLeft;
            mouse.mouseY = event.clientY - canvas.offsetTop;
        })

        const update = () => {
            particlesArray.map((particle) => {
                particle.update();
            })
        }

        const animate = () => {
            if (!context) return;
            context.clearRect(0, 0, width, height)
            draw(context);
            if (props.animation) {
                update();
                requestAnimationFrame(animate);
            }
        }

        init(context);
        animate();

        return () => {
            particlesArray = [];

        }


    })


    return (
        <motion.canvas
            animate={{
                opacity: 1,
                x: 0
            }}
            initial={{
                opacity: 0,
                x: 50,
            }}
            transition={{type: "tween", duration: 1.1}}
            width={props.width} height={props.height} ref={canvasRef}/>
    );
}

export default Canvas;
