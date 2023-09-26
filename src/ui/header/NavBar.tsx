import NavButton from "./NavButton.tsx";

function NavBar() {

    return (
        <div className={"flex flex-row container w-screen py-10 justify-center"}>
            <div className={"basis-1/4 flex justify-center"}>
                <NavButton to="/" text="HOME_"/>
            </div>
            <div className={"basis-2/4 flex justify-center gap-12"}>
                <NavButton to="/projects" text="PROJECTS"/>
                <NavButton to="/about" text="ABOUT"/>
                <NavButton to="/contact" text="CONTACT"/>
            </div>
            <div className={"basis-1/4"}/>
        </div>
    );
}

export default NavBar;