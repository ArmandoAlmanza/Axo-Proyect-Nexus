import { FaBarsStaggered } from "react-icons/fa6";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useScreenSize from "../hooks/useScreenSize";
import { useState } from "react";
import ProjectNav from "./projects/ProjectNav";
import projects from "../mock/proyect.mock.json";
const Header = () => {
    const screenSize = useScreenSize();
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <header
            className={`bg-noir-purple shadow-md z-10 sticky top-0 flex flex-row justify-between p-4  content-center items-center md:flex-col md:items-start  md:w-60`}
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
                        <ProjectNav
                            key={i}
                            title={project.title}
                            img={project.icon}
                        />
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
