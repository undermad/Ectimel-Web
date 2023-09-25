import Canvas from "./Canvas.tsx";
import {Effect} from "./Effect.ts";

const About: React.FC = () => {

    const width = 750;
    const height = 1000;


    const drawArt = (context: CanvasRenderingContext2D) => {
        const effect = new Effect(width, height);
        effect.init(context);
        console.log(effect)

        function animate() {
            context.clearRect(0,0,width,height)
            effect.draw(context);
            effect.update();
            requestAnimationFrame(animate);
        }
        animate();

    }


    return (
        <div className={`w-[${width}px] h-[${height}px]`}>
            <Canvas draw={drawArt} width={width} height={height}/>
        </div>
    );
}

export default About;
