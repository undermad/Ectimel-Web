import Canvas from "./Canvas.tsx";
import {useEffect, useState} from "react";


const ParticleImage: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 1450);

    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });


    return (
        <>
            {isDesktop ?
                <Canvas mouseRadius={3000} gap={5} maxSize={3} width={750} height={1000}/>
                :
                <Canvas mouseRadius={0} gap={3} maxSize={2} width={300} height={400}/>
            }
        </>
    );
}
export default ParticleImage;