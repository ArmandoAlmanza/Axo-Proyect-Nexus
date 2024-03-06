import clsx from "clsx";
import { useState } from "react";
import {
    FaCalendar,
    FaRegCommentDots,
    FaClipboard,
    FaBug,
    FaChartColumn,
    FaFile,
} from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";

const ProjectNav = () => {
    const [active, setActive] = useState(false);
    const links = [
        {
            title: "Backlog",
            icon: <FaClipboard />,
            path: "/dashboard",
        },
        {
            title: "Chat",
            icon: <FaRegCommentDots />,
            path: "/dashboard",
        },
        {
            title: "Calendar",
            icon: <FaCalendar />,
            path: "/dashboard",
        },
        {
            title: "Issues",
            icon: <FaBug />,
            path: "/dashboard",
        },
        {
            title: "Performance",
            icon: <FaChartColumn />,
            path: "/dashboard",
        },
    ];

    return (
        <div className="font-secondary border-b border-white w-full">
            <nav className="grid gap-9 py-36 place-items-start place-content-center font-secondary border-b border-white w-full">
                {links.map((link, i) => (
                    <button
                        key={i}
                        className={clsx(
                            "text-[25px] hover:text-lily-400 transition-colors duration-300 flex gap-2 items-center px-4 py-1",
                            {
                                "rounded-full bg-bluebell-200": active,
                            }
                        )}
                        onClick={() => setActive(!active)}
                    >
                        {link.icon}
                        <span>{link.title}</span>
                    </button>
                ))}
            </nav>
            <SettingMenu />
        </div>
    );
};

export default ProjectNav;

const SettingMenu = () => {
    return (
        <nav className="grid gap-4 py-4 place-items-start place-content-center font-secondary border-b border-white w-full">
            <button
                className={
                    "text-[25px] hover:text-lily-400 transition-colors duration-300 flex gap-2 items-center px-4 py-1"
                }
            >
                <FaFile />
                <span>Files</span>
            </button>
            <button
                className={
                    "text-[25px] hover:text-lily-400 transition-colors duration-300 flex gap-2 items-center px-4 py-1"
                }
            >
                <MdOutlineSettings className="text-[35px]" />
                <span>Settings</span>
            </button>
        </nav>
    );
};
