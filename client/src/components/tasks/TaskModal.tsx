import Button from "../generals/Button";
import clsx from "clsx";
import useScreenSize from "../../hooks/useScreenSize";
import { FaTimes } from "react-icons/fa";
import { TaskModalProps } from "../../interfaces/tasks";

const TaskModal = ({ open, setOpen, ...props }: TaskModalProps) => {
    const screenSize = useScreenSize();
    return (
        <div
            className={clsx(
                "flex bg-[#fdfdfd] gap-5 items-start text-black z-50 fixed text-center backdrop-blur-lg transition-[right] duration-500 px-7 py-10 overflow-y-scroll no-scrollbar",
                {
                    "-right-full top-24 w-[1040px] h-[800px]":
                        !open && screenSize.width > 860,
                    "right-10 top-24 w-[1040px] h-[800px]":
                        open && screenSize.width > 860,
                    "top-0 right-0 h-screen w-full":
                        open && screenSize.width < 860,
                    "-right-full top-0 h-screen w-full":
                        !open && screenSize.width < 860,
                }
            )}
        >
            <Button
                className="text-black bg-transparent absolute top-0 right-10 border-2 boder-black p-2 rounded-full hover:shadow-sm hover:shadow-black transition-shadow"
                onClick={() => setOpen(false)}
            >
                <FaTimes />
            </Button>
            <div className="bg-[#fefefe] rounded-[15px] grid gap-4 place-items-start place-content-center">
                <div className="grid place-items-start w-full">
                    <h1 className="text-[35px] font-bold">{props.title}.</h1>
                    <div className="flex justify-between gap-4">
                        <p className="text-[15px]">
                            This tasks is:{" "}
                            <span
                                className={clsx("font-bold", {
                                    "text-dalia-200":
                                        props.status === "started",
                                    "text-bluebell-200":
                                        props.status === "in_progress",
                                    "text-leaf-200":
                                        props.status === "completed",
                                    "text-garnet-200":
                                        props.status === "canceled",
                                })}
                            >
                                {props.status}
                            </span>
                        </p>
                        <div className="flex gap-6">
                            <p>{props.start_date}</p>
                            <p>{props.end_date}</p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4 mt-3">
                        <div className={
                            clsx("flex flex-col items-center justify-between gap-3",
                            {
                                "flex-row":screenSize.width > 760
                            })
                        }>
                            <p>
                                Assigned to:{" "}
                                <span>{props.assigned_to.name}</span>{" "}
                            </p>

                            <img
                                className="aspect-4/3 size-9 outline outline-2 outline-inset-2 rounded-3xl md:size-10 select-none"
                                src={props.assigned_to.img}
                                alt="assigned to image"
                            />
                        </div>
                        <div className={
                            clsx("flex flex-col items-center justify-between gap-3",
                            {
                                "flex-row":screenSize.width > 760
                            })
                        }>
                            <p>
                                Assigned by:{" "}
                                <span>{props.assigned_to.name}</span>{" "}
                            </p>

                            <img
                                className="aspect-4/3 size-9 outline outline-2 outline-inset-2 rounded-3xl md:size-10 select-none outline-garnet-200"
                                src={props.assigned_by.img}
                                alt="assigned to image"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-bold text-[20px]">Description:</h3>
                    <p className="text-left">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
