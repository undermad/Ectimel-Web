import {Link} from "react-router-dom";

type NavButtonProps = {
    to: string,
    text: string,
    tailwindcss?: string
}


function NavButton({to, text, tailwindcss = ''}: NavButtonProps) {
    return (
        <Link
            className={`text-lg text-ectimel-black tracking-widest p-1 mx-3 ${tailwindcss}`}
            to={to}>{text}</Link>
    );
}

export default NavButton;