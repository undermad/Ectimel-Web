import {Outlet} from "react-router-dom";
import NavBar from "./ui/header/NavBar.tsx";
import Mouse from "./ui/Mouse.tsx";

function AppLayout() {
    return (
        <section className={"w-screen grid h-screen grid-rows-[auto_1fr] justify-center bg-ectimel-navy-900 relative"}>
            <NavBar/>
            <Outlet/>
            <Mouse/>

        </section>
    );
}

export default AppLayout;