import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
    title: string;
    start_hour: string;
    end_hour: string;
    type: string;
    status: string;
}

const TaskCard = ({ title, start_hour, end_hour, type, status }: Props) => {
    return (
        <article className="border border-white rounded-md px-4">
            <div className="flex items-center my-3 flex-row gap-4">
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
                <h1>{title}</h1>
                <span
                    className={clsx(
                        "text-xl",
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
            </div>
        </article>
    );
};

export default TaskCard;
