import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import useScreenSize from "../../hooks/useScreenSize";

interface Props {
    title: string;
    img: string;
    className?: string;
}

const ProjectIcon = ({ title, img, className }: Props) => {
    const screenSize = useScreenSize();
    return (
        <article
            className={twMerge(
                clsx(
                    "container font-secondary flex content-center items-center gap-3 border-b border-b-white py-4",
                    className,
                    {
                        "py-10": screenSize.height >= 1023,
                        "py-8":
                            screenSize.height <= 1022 &&
                            screenSize.height > 800,
                    }
                )
            )}
        >
            <img
                className="size-[50px] outline outline-offset bg-gray-200 select-none"
                src={img === "" ? "/axo_little.png" : img}
                alt="icon"
            />
            <p className="text-[17px] font-semibold">{title}</p>
        </article>
    );
};

export default ProjectIcon;
