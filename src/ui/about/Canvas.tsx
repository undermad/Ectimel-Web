import React, {useEffect, useRef} from "react";
import {Effect} from "../home/Effect.ts";
import {motion} from "framer-motion";


type CanvasProps =
    React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;


const Canvas: React.FC<CanvasProps> = ({...props}) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d', {willReadFrequently: true});
        if (!context) return;


        const effect = new Effect(canvas.width, canvas.height, canvas);


        function animate() {
            if (!canvas) return;
            if (!context) return;
            context.clearRect(0, 0, canvas.width, canvas.height)
            effect.draw(context);
            effect.update();
            requestAnimationFrame(animate);
        }

        setTimeout(() => {
            effect.init(context);
            animate();

        }, 100)


    }, [])


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
