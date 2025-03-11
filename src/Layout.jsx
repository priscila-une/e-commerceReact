
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return (
        <div>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}