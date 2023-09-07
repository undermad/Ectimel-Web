import {Outlet} from "react-router-dom";
import Header from "./ui/header/Header.tsx";

function AppLayout() {
    return (
        <section className={"w-screen grid h-screen grid-rows-[auto_1fr]"}>
            <Header/>
            <Outlet/>
        </section>
    );
}

export default AppLayout;