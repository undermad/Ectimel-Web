import {useEffect, useState} from "react";
import {MouseLargeCircle} from "./MouseLargeCircle.tsx";
import {MouseSmallCircle} from "./MouseSmallCircle.tsx";

type MousePosition = {
    x: number;
    y: number;
}

function Mouse() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({x: 0, y: 0})

    const allocatePosition = (e: MouseEvent): void => {
        setMousePosition({x: e.clientX, y: e.clientY})
    }

    useEffect((): void => {
        window.addEventListener('mousemove', allocatePosition)
    }, [])


    return (
        <div className={"absolute"}>
            <MouseLargeCircle positionX={mousePosition.x} positionY={mousePosition.y}/>
            <MouseSmallCircle positionX={mousePosition.x} positionY={mousePosition.y}/>
        </div>
    );
}

export default Mouse;