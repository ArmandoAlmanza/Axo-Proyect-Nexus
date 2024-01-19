import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Dashboard = () => {
    return (
        <main className="flex flex-col content-center md:flex-row md:h-screen md:w-full">
            <Header />
            <div className="md:flex-1 md:overflow-y-scroll">
                <Outlet />
            </div>
        </main>
    );
};

export default Dashboard;
