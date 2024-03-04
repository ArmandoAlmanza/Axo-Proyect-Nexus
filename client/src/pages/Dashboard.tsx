import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useScreenSize from "../hooks/useScreenSize";
const Dashboard = () => {
    const screenSize = useScreenSize();
    return (
        <main className="w-full grid">
            <Header />
            <Outlet />
            {screenSize.width <= 390 ? <Footer /> : ""}
        </main>
    );
};

export default Dashboard;
