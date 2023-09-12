import NavButton from "./NavButton.tsx";
import {useEffect} from "react";

function NavBar() {

    useEffect(()=> {

    })

    return (
        <div className={"flex bg-ectimel-grey pb-1 container w-screen"}>
            <NavButton to="/" text="Home" tailwindcss=""/>
            <NavButton to="/projects" text="Projects"/>
            <NavButton to="/about" text="About"/>
            <NavButton to="/contact" text="Contact"/>

        </div>
    );
}

export default NavBar;