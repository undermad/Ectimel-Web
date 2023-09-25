import {Outlet} from "react-router-dom";
import NavBar from "./ui/header/NavBar.tsx";
import Mouse from "./ui/mouse/Mouse.tsx";
import {MouseThemeContextProvider} from "./ui/mouse/MouseContext.tsx";

function AppLayout() {


    return (
        <section className={"font-roboto text-ectimel-navy-300 bg-gradient-to-t from-ectimel-layout-from to-ectimel-layout-to w-screen grid h-screen grid-rows-[auto_1fr] justify-center bg-ectimel-navy-900 relative"}>
            <MouseThemeContextProvider>
                <NavBar/>
                <Outlet/>
                <Mouse/>
            </MouseThemeContextProvider>

        </section>
    );
}

export default AppLayout;