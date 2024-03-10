import { Dispatch, SetStateAction } from "react";
import Button from "../generals/Button";
import clsx from "clsx";
import useScreenSize from "../../hooks/useScreenSize";
import { FaTimes } from "react-icons/fa";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;

    title: string;
    description: string;
    status: string;
    end_date: string;
    start_date: string;
}

const TaskModal = ({ open, setOpen, ...props }: Props) => {
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
            <div className="border border-noir-200 p-4 w-full h-[400px] shadow-sm shadow-noir-200 rounded-[15px] grid md:grid-cols-2 gap-4 items-start">
                <div className="flex gap-2 items-end">
                    <h3 className="font-bold text-[20px]">Title:</h3>
                    <p className="text-[20px]">{props.title}</p>
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                    <h3 className="font-bold text-[20px]">Description:</h3>
                    <textarea
                        className="resize-none border border-noir-200 p-2 h-[200px] w-full outline-none"
                        value={props.description}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
