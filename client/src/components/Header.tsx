import {
    FaBars,
    FaRegBell,
    FaRegCircleXmark,
    FaAngleDown,
} from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import avatar from "/avatar.png";
import axolotl from "/axolotl.png";
import useScreenSize from "../hooks/useScreenSize";
import Button from "./generals/Button";
import clsx from "clsx";
import { useState } from "react";
import useScreenScroll from "../hooks/useScreenScroll";
const Header = () => {
    const screenSize = useScreenSize();
    const screenScroll = useScreenScroll();
    const [active, setActive] = useState(false);
    const links = [
        { title: "Projects", path: "/projects" },
        { title: "Teams", path: "/teams/{user}" },
        { title: "Tasks", path: "/tasks/{user}" },
    ];
    return (
        <header
            className={clsx(
                "border-b border-b-white flex items-center content-center py-2 px-4 justify-evenly gap-2 font-primary",
                {
                    "sticky shadow-lg top-0 z-10 bg-noir-200":
                        screenScroll > 10,
                }
            )}
        >
            <div className="flex items-center gap-4">
                <FaBars className="text-[25px] hover:cursor-pointer hover:text-lily-400 transition-colors duration-300" />
                <div className="flex items-center content-center gap-1">
                    <img src={axolotl} alt="logo" className="3/4 size-9" />
                    <h1 className="text-[30px] font-bold text-violet-400">
                        A.Nexus
                    </h1>
                </div>
            </div>

            <nav
                className={clsx("gap-2 justify-between items-center", {
                    "flex flex-row": screenSize.width >= 830,
                    hidden: screenSize.width <= 820,
                })}
            >
                {links.map((link, i) => (
                    <a
                        href=""
                        className={clsx(
                            "text-[20px] hover:text-lily-400 transition-colors ease-in-out duration-300 mr-5 group/link",
                            {
                                "flex items-center gap-1 content-center":
                                    link.title === "Projects",
                            }
                        )}
                        key={i}
                        onMouseEnter={() => setActive(!active)}
                        onMouseLeave={() => setActive(!active)}
                    >
                        <span>{link.title}</span>
                        {link.title === "Projects" ? (
                            <FaAngleDown
                                className={clsx("mt-1 transition-transform", {
                                    "group-hover/link:rotate-180":
                                        active == true,
                                })}
                            />
                        ) : (
                            ""
                        )}
                    </a>
                ))}
                <Button className="bg-lily-400 hover:bg-lily-200 px-4 flex items-center">
                    <span>Create</span>
                    <FaRegCircleXmark className="text-white text-[20px] rotate-45" />
                </Button>
            </nav>
            <div className="flex items-center content-center gap-4 justify-between">
                <FaRegBell className="text-[25px] hover:cursor-pointer hover:text-lily-400 transition-colors duration-300" />
                {screenSize.width >= 830 ? (
                    <MdOutlineSettings className="text-[20px] hover:cursor-pointer md:text-[30px] hover:text-lily-400 transition-colors duration-300" />
                ) : (
                    ""
                )}
                <img
                    src={avatar}
                    alt="avatar"
                    className="3/4 size-9 outline outline-2 outline-inset-2 rounded-3xl hover:cursor-pointer md:size-10"
                    onClick={() => console.log("click we")}
                />
            </div>
        </header>
    );
};

export default Header;
