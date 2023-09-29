import Canvas from "./Canvas.tsx";
import {useCallback, useState} from "react";


const ParticleImage: React.FC = () => {
    const width = 750;
    const height = 1000;
    //
    // const [width, setWidth] = useState<number>(null);
    // const [height, setHeight] = useState<number>(null);
    // const div = useCallback(node => {
    //     if (node !== null) {
    //         setHeight(node.getBoundingClientRect.height)
    //         setWidth(node.getBoundingClientRect.width)
    //     }
    // }, [])


    return (
        <div  className={`w-[${width}px] h-[${height}px]`}>
            <Canvas width={width} height={height}/>
        </div>
    );
}
export default ParticleImage;