import {useEffect, useState} from "react";
import {motion} from "framer-motion";

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

            {/*LARGE CIRCLE*/}
            <motion.div
                animate={{
                    x: mousePosition.x - 15,
                    y: mousePosition.y - 15,
                }}
                transition={{ type: "tween", duration: .1}}
                className={`w-[30px] h-[30px] border rounded-full border-ectimel-mouse pointer-events-none absolute`}>
            </motion.div>

            {/*SMALL CIRCLE*/}
            <motion.div
                animate={{
                    x: mousePosition.x - 3,
                    y: mousePosition.y - 3,
                }}
                transition={{ type: "tween", duration: .04}}
                className={`w-[6px] h-[6px] border rounded-full border-ectimel-mouse pointer-events-none absolute bg-ectimel-mouse`}>
            </motion.div>
        </div>
    );
}

export default Mouse;