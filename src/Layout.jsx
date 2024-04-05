import { Outlet, ScrollRestoration } from "react-router-dom";
import Nav from "./components/shared/Nav";

const Layout = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto xl:max-w-6xl">
                <Nav></Nav>
                <Outlet></Outlet>                
            </div>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Layout;