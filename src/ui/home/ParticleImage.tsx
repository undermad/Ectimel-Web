import Canvas from "../about/Canvas.tsx";


const ParticleImage: React.FC = () => {
    const width = 750;
    const height = 1000;


    // const drawArt = (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    //     const effect = new Effect(width, height, canvas);
    //     effect.init(context);
    //
    //     function animate() {
    //         context.clearRect(0, 0, width, height)
    //         effect.draw(context);
    //         effect.update();
    //         requestAnimationFrame(animate);
    //     }
    //
    //     animate();
    // }


    return (
        <div className={`w-[${width}px] h-[${height}px]`}>
            <Canvas width={width} height={height}/>
        </div>
    );
}
export default ParticleImage;