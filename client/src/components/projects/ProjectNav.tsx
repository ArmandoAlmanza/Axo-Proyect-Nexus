import clsx from "clsx";
import {
    FaCalendar,
    FaRegCommentDots,
    FaClipboard,
    FaBug,
    FaChartColumn,
    FaFile,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";

const ProjectNav = () => {
    const links = [
        {
            title: "Backlog",
            icon: <FaClipboard />,
            path: "/dashboard",
            active: false,
        },
        {
            title: "Chat",
            icon: <FaRegCommentDots />,
            path: "/dashboard",
            active: false,
        },
        {
            title: "Calendar",
            icon: <FaCalendar />,
            path: "/dashboard",
            active: false,
        },
        {
            title: "Issues",
            icon: <FaBug />,
            path: "/dashboard",
            active: false,
        },
        {
            title: "Performance",
            icon: <FaChartColumn />,
            path: "/dashboard",
            active: false,
        },
    ];

    return (
        <div className="font-secondary w-full">
            <nav className="grid gap-9 py-64 place-items-start place-content-center font-secondary border-b border-white w-full">
                {links.map((link, i) => (
                    <button
                        key={i}
                        className={clsx(
                            "text-[25px] hover:text-lily-400 transition-colors duration-300 flex gap-2 items-center px-4 py-1",
                            {
                                "rounded-full bg-bluebell-200": link.active,
                            }
                        )}
                        onClick={() => {
                            link.active = !link.active;
                            console.log(
                                "button number " +
                                    i +
                                    " and my status is " +
                                    link.active
                            );
                        }}
                    >
                        {link.icon}
                        <span>{link.title}</span>
                    </button>
                ))}
            </nav>
            <SettingMenu />
            <SettingsFooter />
        </div>
    );
};

export default ProjectNav;

const SettingMenu = () => {
    return (
        <nav className="grid gap-4 py-4 place-items-start place-content-center font-secondary border-b border-b-white w-full">
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

const SettingsFooter = () => {
    const socials = [
        {
            icon: <FaGithub />,
            path: "https://github.com/ArmandoAlmanza",
        },
        {
            icon: <FaLinkedin />,
            path: "https://github.com/ArmandoAlmanza",
        },
        {
            icon: <FaInstagram />,
            path: "https://github.com/ArmandoAlmanza",
        },
    ];
    return (
        <footer className="grid gap-4 py-[18px] place-items-start place-content-center font-secondary w-full">
            <h1>Made by Armando almanza</h1>
            <nav className="flex flex-row gap-4 items-center content-center justify-evenly w-full">
                {socials.map((social, i) => (
                    <a
                        className="text-xl text-center"
                        href={social.path}
                        key={i}
                    >
                        {social.icon}
                    </a>
                ))}
            </nav>
        </footer>
    );
};
