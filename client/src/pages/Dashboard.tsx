import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useScreenSize from "../hooks/useScreenSize";

/* 
    * This is only the "main container" of the dashboard section, here will only be the header, footer and the Outlet component.
    - Outlet, component from react router that let us show the childrens of our router.
    - Header, we call the header here, cause we don't use it in our landing page, that is other
    - The footer we only want that appears in small devices beacuse we use it as a navigation
*/

const Dashboard = () => {
    const screenSize = useScreenSize();
    return (
        <main className="w-full grid overflow-y-hidden h-screen no-scrollbar">
            <Header />
            <Outlet />
            {screenSize.width <= 800 ? <Footer /> : ""}
        </main>
    );
};

export default Dashboard;
