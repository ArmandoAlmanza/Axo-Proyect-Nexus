import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FaHome, FaUserTimes } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

interface NavProps {
    navOpened: boolean;
    setNavOpened: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ navOpened, setNavOpened }: NavProps) => {
    const links = [
        { title: "Home", path: "/dashboard", icon: <FaHome /> },
        { title: "Profile", path: "/dashboard", icon: <FaBriefcase /> },
        { title: "Log Out", path: "/auth", icon: <FaUserTimes /> },
    ];
    const displayState = navOpened ? "left-0" : "-left-full";
    return (
        <nav
            className={`flex bg-noir-200 flex-col gap-5 items-start top-14 text-white z-50 w-full fixed h-full bg-nav_bg text-center backdrop:blur-lg transition-[left] duration-500 px-7 py-10 ${displayState}`}
        >
            <span className="mx-auto mb-4 relative text-3xl font-semibold after:content-[''] after:w-20 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-2 text-white">
                Menu
            </span>
            {links.map((link, i) => (
                <Link
                    className="relative mx-auto text-gray-200 font-semibold text-xl transition-colors duration-300 after:content-[''] after:w-0 after:h-[2px] after:bg-white after:absolute after:left-0 after:-bottom-2 after:transition-[width] after:duration-300 hover:text-white hover:after:w-5  md:hover:text-lily-400 flex flex-row gap-2 items-center"
                    to={link.path}
                    key={i}
                    onClick={() => setNavOpened(false)}
                >
                    {link.icon}
                    {link.title}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
