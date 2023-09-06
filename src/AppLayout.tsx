import {Outlet} from "react-router-dom";
import Header from "./ui/header/Header.tsx";

function AppLayout() {
    return (
        <section>
            <Header/>
            <Outlet/>
        </section>
    );
}

export default AppLayout;