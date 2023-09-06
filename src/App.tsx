import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./AppLayout.tsx";
import Home from "./ui/home/Home.tsx";
import Projects from "./ui/projects/Projects.tsx";
import About from "./ui/about/About.tsx";
import Contact from "./ui/contact/Contact.tsx";

const router = createBrowserRouter([

    {
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])


function App() {

    return (
        <RouterProvider router={router}/>
    )
}

export default App
