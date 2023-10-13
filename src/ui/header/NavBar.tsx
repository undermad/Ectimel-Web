import NavButton from "./NavButton.tsx";

function NavBar() {

    return (
        <section className={"bg-ectimel-navbar-bg w-screen flex justify-center"}>
            <div className={"flex flex-row container w-screen py-10"}>
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
        </section>
    );
}

export default NavBar;