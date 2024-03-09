import clsx from "clsx";
import { FaAngleRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import useScreenSize from "../../hooks/useScreenSize";

interface Props {
    title: string;
    start_hour: string;
    end_hour: string;
    type: string;
    status: string;
    assigned_by_img: string;
    assigned_to_img: string;
}

const TaskCard = ({
    title,
    start_hour,
    end_hour,
    type,
    status,
    assigned_by_img,
    assigned_to_img
}: Props) => {
    const screenSize = useScreenSize();
    return (
        <article className="border border-white rounded-md px-4">
            <div
                className={clsx(
                    "grid place-items-center place-content-center my-3 gap-4",
                    {
                        "grid-cols-[1fr_10px_1fr_85px_125px_1fr_100px]":
                            screenSize.width >= 760,
                        "grid-cols-[1fr_10px_1fr_1fr_30px]":
                            screenSize.width < 760,
                    }
                )}
            >
                <div className="flex justify-between items-center gap-4">
                    <input
                        type="checkbox"
                        className={clsx(
                            "w-7 h-7 ring-gray-200 ring-2 before:content[''] peer relative cursor-pointer appearance-none rounded-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10",
                            {
                                "checked:border-dalia-200 checked:bg-dalia-200 checked:before:bg-dalia-200 before:bg-dalia-200":
                                    type === "meeting",
                            },
                            {
                                "checked:border-bluebell-300 checked:bg-bluebell-300 checked:before:bg-bluebell-100 before:bg-bluebell-100":
                                    type === "todo",
                            },
                            {
                                "checked:border-garnet-200 checked:bg-garnet-200 checked:before:bg-garnet-200 before:bg-garnet-200":
                                    type === "issue",
                            }
                        )}
                        id="completed"
                    />
                    <div className="grid">
                        <span>{start_hour}</span>
                        <span>{end_hour}</span>
                    </div>
                </div>
                <div
                    className={twMerge(
                        clsx(" h-[30px] w-[8px]", {
                            "bg-dalia-200": status === "started",
                            "bg-bluebell-200": status === "in_progress",
                            "bg-leaf-200": status === "completed",
                            "bg-garnet-200": status === "canceled",
                        })
                    )}
                ></div>
                <h1>
                    {title.length > 15 ? `${title.substring(0, 15)}...` : title}
                </h1>
                {screenSize.width < 760 ? (
                    ""
                ) : (
                    <span
                        className={clsx(
                            "text-xl place-self-start self-center",
                            {
                                "text-dalia-200": type === "meeting",
                            },
                            {
                                "text-bluebell-200": type === "todo",
                            },
                            {
                                "text-garnet-200": type === "issue",
                            }
                        )}
                    >
                        {type.toUpperCase()}
                    </span>
                )}
                {screenSize.width < 760 ? (
                    ""
                ) : (
                    <span
                        className={clsx(
                            "text-xl place-self-start self-center",
                            {
                                "border-b border-b-dalia-200":
                                    status === "started",
                                "border-b border-b-bluebell-200":
                                    status === "in_progress",
                                "border-b border-b-leaf-200":
                                    status === "completed",
                                "border-b border-b-garnet-200":
                                    status === "canceled",
                            }
                        )}
                    >
                        {status === "in_progress"
                            ? "IN PROGRESS"
                            : status.toUpperCase()}
                    </span>
                )}
                <div className="flex justify-between gap-3">
                    <img
                        src={assigned_to_img}
                        alt="assigned by image"
                        className="aspect-4/3 size-9 outline outline-2 outline-inset-2 rounded-3xl md:size-10 select-none"
                    />
                    <img
                        src={assigned_by_img}
                        alt="assigned to image"
                        className="aspect-4/3 size-9 outline outline-2 outline-inset-2 rounded-3xl md:size-10 select-none outline-garnet-200"
                    />
                </div>
                <FaAngleRight className="text-[30px] rounded-full border border-white hover:cursor-pointer hover:border-lily-400 hover:text-lily-400 transition-colors duration-300 ease-out" />
            </div>
        </article>
    );
};

export default TaskCard;
