import {Link} from "react-router-dom";
import {useContext} from "react";
import {MouseThemeContext} from "../mouse/MouseContext.tsx";

type NavButtonProps = {
    to: string,
    text: string,
    tailwindcss?: string
}


function NavButton({to, text, tailwindcss = ''}: NavButtonProps) {

    const mouseContext = useContext(MouseThemeContext);

    const hoverOn = () => {
        mouseContext?.setHover(true);
    }
    const hoverOff = () => {
        mouseContext?.setHover(false);
    }

    return (
        <Link
            onMouseOver={hoverOn}
            onMouseLeave={hoverOff}
            className={`text-lg text-ectimel-black tracking-widest p-1 mx-3 ${tailwindcss}`}
            to={to}
        >{text}</Link>
    );
}

export default NavButton;