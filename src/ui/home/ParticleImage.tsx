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
                <div className={"w-[750] h-[1000]"}>
                    <Canvas animation={true} gap={5} maxSize={3} width={750} height={1000}/>
                </div>
                :

                <div className={"w-[300] h-[400]"}>
                    <Canvas animation={false} gap={3} maxSize={2} width={300} height={400}/>
                </div>
            }
        </>
    );
}
export default ParticleImage;