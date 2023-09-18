import {Outlet} from "react-router-dom";
import NavBar from "./ui/header/NavBar.tsx";
import Mouse from "./ui/mouse/Mouse.tsx";
import {MouseThemeContextProvider} from "./ui/mouse/MouseContext.tsx";

function AppLayout() {


    return (
        <section className={"w-screen grid h-screen grid-rows-[auto_1fr] justify-center bg-ectimel-navy-900 relative"}>
            <MouseThemeContextProvider>
                <NavBar/>
                <Outlet/>
                <Mouse/>
            </MouseThemeContextProvider>

        </section>
    );
}

export default AppLayout;