import NavButton from "./NavButton.tsx";

function Header() {
    return (
        <div className={"flex"}>
            <NavButton to="/" text="Home" tailwindcss="mr-auto"/>
            <NavButton to="/projects" text="Projects"/>
            <NavButton to="/about" text="About"/>
            <NavButton to="/contact" text="Contact"/>

        </div>
    );
}

export default Header;