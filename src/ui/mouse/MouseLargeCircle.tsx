import {motion} from "framer-motion";
import {useContext} from "react";
import {MouseThemeContext} from "./MouseContext.tsx";

export const  MouseLargeCircle: React.FC<{
    positionX: number,
    positionY: number,
}>  = (props) => {

    const mouseHover = useContext(MouseThemeContext);


    return (
        <motion.div
            animate={{
                x: props.positionX - 15,
                y: props.positionY - 15,
                opacity: mouseHover?.hover ? 0 : 1,
            }}
            transition={{ type: "tween", duration: .1}}
            className={`w-[30px] h-[30px] border rounded-full border-ectimel-mouse pointer-events-none absolute`}>
        </motion.div>
    );
}

