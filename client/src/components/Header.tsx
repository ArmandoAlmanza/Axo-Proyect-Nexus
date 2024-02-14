import { FaBarsStaggered } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";
import useScreenScroll from "../hooks/useScreenScroll";
import ProjectNav from "./projects/ProjectNav";
import projects from "../mock/proyect.mock.json";
const Header = () => {
    const screenSize = useScreenSize();
    const screenScroll = useScreenScroll();
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <header
            className={`${
                screenScroll >= 50 ? "bg-[#f0f0f0]" : "bg-body"
            } shadow-md z-10 sticky top-0 flex flex-row justify-between p-4 border-b border-b-black content-center items-center md:flex-col md:justify-evenly md:items-start md:border-b-0 md:border-r md:border-r-black md:w-60`}
        >
            <h1 className="text-3xl font-bold">
                <span className="text-violet-400">Axo</span> Project{" "}
                <span className="text-pink-600">Nexus</span>
            </h1>
            <button
                onClick={() => {
                    setMenuOpened(!menuOpened);
                }}
                className="p-2 text-white bg-black outline-none text-xl block md:hidden"
            >
                <FaBarsStaggered />
            </button>
            <Navbar navOpened={menuOpened} setNavOpened={setMenuOpened} />
            {screenSize.width >= 768 ? (
                <div className="grid gap-4">
                    {projects.map((project, i) => (
                        <ProjectNav key={i} title={project.title} img={project.icon} />
                    ))}
                </div>
            ) : (
                ""
            )}
            {screenSize.width >= 768 ? <Footer /> : ""}
        </header>
    );
};

export default Header;
