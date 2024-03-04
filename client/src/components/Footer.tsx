import {
    FaCalendar,
    FaRegCommentDots,
    FaClipboard,
    FaRegCircleXmark,
    FaBug,
    FaChartColumn,
} from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="self-end border-t border-t-white px-2 py-4 sticky bottom-0 bg-noir-200 grid grid-cols-[1fr,70px,1fr] gap-2">
            <div className="flex gap-2 justify-between px-1 items-center">
                <Link
                    to={"/dashboard"}
                    className="text-[25px] hover:text-lily-400 transition-colors duration-300"
                >
                    <FaClipboard />
                </Link>

                <Link
                    to={"/dashboard"}
                    className="text-[25px] hover:text-lily-400 transition-colors duration-300"
                >
                    <FaCalendar />
                </Link>

                <Link
                    to={"/dashboard"}
                    className="text-[25px] hover:text-lily-400 transition-colors duration-300"
                >
                    <FaRegCommentDots />
                </Link>
            </div>
            <div className="grid place-content-center w-fit mx-auto">
                <Link to={"/dashboard"} className="rounded-full">
                    <FaRegCircleXmark className="text-[30px] rotate-45 text-lily-400 transition-colors duration-300" />
                </Link>
            </div>
            <div className="flex gap-2 justify-between px-1 items-center">
                <Link
                    to={"/dashboard"}
                    className="text-[26px] hover:text-lily-400 transition-colors duration-300"
                >
                    <MdOutlineSettings />
                </Link>

                <Link
                    to={"/dashboard"}
                    className="text-[25px] hover:text-lily-400 transition-colors duration-300"
                >
                    <FaBug />
                </Link>

                <Link
                    to={"/dashboard"}
                    className="text-[25px] hover:text-lily-400 transition-colors duration-300"
                >
                    <FaChartColumn />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
