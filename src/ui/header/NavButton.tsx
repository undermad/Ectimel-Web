import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {MouseThemeContext} from "../mouse/MouseContext.tsx";
import {motion} from "framer-motion";

type NavButtonProps = {
    to: string,
    text: string,
    tailwindcss?: string
}


function NavButton({to, text, tailwindcss = ''}: NavButtonProps) {

    const mouseContext = useContext(MouseThemeContext);
    const [hover, setHover] = useState<boolean>(false);

    const hoverOn = () => {
        mouseContext?.setHover(true);
        setHover(true);
    }
    const hoverOff = () => {
        mouseContext?.setHover(false);
        setHover(false);
    }

    return (
        <motion.div
            animate={{
                scale: hover ? 1.2 : 1,
                color: hover ? "#fcfcfc" : "#babfc1",
            }}
        >
            <Link
                onMouseOver={hoverOn}
                onMouseLeave={hoverOff}
                className={`text-lg font-bold tracking-[5px]  ${tailwindcss}`}
                to={to}>
                {text}
            </Link>
        </motion.div>
    );
}

export default NavButton;