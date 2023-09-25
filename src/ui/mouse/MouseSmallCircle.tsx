import React from "react";
import {motion} from "framer-motion";
import {useContext} from "react";
import {MouseThemeContext} from "./MouseContext.tsx";

export const MouseSmallCircle: React.FC<{
    positionX: number,
    positionY: number,
}> = (props) => {


    const mouseContext = useContext(MouseThemeContext);


    const animate = {
        x: props.positionX - 3,
        y: props.positionY - 3,
        scale: mouseContext?.hover ? 5 : 1,
    }
    const style = {
        opacity: mouseContext?.hover ? .2 : .5,
    }


    return (
        <motion.div
            animate={animate}
            transition={{type: "tween", duration: .06}}
            className={`w-[6px] h-[6px] border rounded-full border-ectimel-mouse pointer-events-none absolute bg-ectimel-mouse`}
            style={style}
        >
        </motion.div>
    );
}

