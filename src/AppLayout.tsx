import {Outlet} from "react-router-dom";
import NavBar from "./ui/header/NavBar.tsx";
import Mouse from "./ui/mouse/Mouse.tsx";
import {MouseThemeContextProvider} from "./ui/mouse/MouseContext.tsx";

function AppLayout() {


    return (
        <div
            className={"font-roboto text-ectimel-navy-300 bg-gradient-to-t from-ectimel-black to-ectimel-layout-to w-screen grid h-screen grid-rows-[auto_1fr] justify-center bg-ectimel-black-new relative"}>
            <MouseThemeContextProvider>
                    <NavBar/>
                    <Outlet/>
                    <Mouse/>
            </MouseThemeContextProvider>

        </div>
    );
}

export default AppLayout;