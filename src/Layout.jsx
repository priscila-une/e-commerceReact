
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}