interface Props {
    title: string;
    status: string;
    description: string;
    assigned: string;
    assigned_to: string;
    end_date: string;
    start_date: string;
}
const TaskCard = ({
    title,
    description,
    status,
    assigned,
    assigned_to,
    end_date,
    start_date,
}: Props) => {
    return (
        <article className="p-4 border border-gray-300 rounded-xl w-full grid gap-3 shadow-violet-300 shadow-md min-h-[300px]">
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-2xl">{title}</h1>
                <span className={`rounded-full ${status} w-5 h-5`}></span>
            </div>
            <div className="flex flex-row">
                <div>
                    <p className="font-bold">
                        Assigned by{" "}
                        <span className="font-normal italic">{assigned}</span>
                    </p>
                    <p className="font-bold">
                        Assigned to{" "}
                        <span className="font-normal italic">
                            {assigned_to}
                        </span>
                    </p>
                </div>
                <div>
                    <p className="font-bold">
                        Started:{" "}
                        <span className="font-normal italic">{start_date}</span>
                    </p>
                    <p className="font-bold">
                        End:{" "}
                        <span className="font-normal italic">{end_date}</span>
                    </p>
                </div>
            </div>
            <p>{description}</p>
            <div className="flex gap-4 md:flex-row justify-between items-end">
                <button className="flex justify-center items-center gap-x-2 bg-[#99BC85] text-white py-2 px-[.5rem] transition-colors duration-500 hover:bg-[#BFD8AF] text-md rounded-xl">
                    Complete
                </button>
                <button className="flex justify-center items-center gap-x-2 bg-[#DC8686] text-white py-2 px-[.5rem] transition-colors duration-500 hover:bg-[#FF8080] text-md rounded-xl">
                    Canceled
                </button>
            </div>
        </article>
    );
};

export default TaskCard;
