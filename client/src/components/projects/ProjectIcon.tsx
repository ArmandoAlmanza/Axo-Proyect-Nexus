import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
    title: string;
    img: string;
    className?: string;
}

const ProjectIcon = ({ title, img, className }: Props) => {
    return (
        <article
            className={twMerge(
                clsx(
                    "container font-secondary flex content-center items-center gap-3 border-b border-b-white py-4",
                    className
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
