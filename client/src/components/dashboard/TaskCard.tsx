import { Task } from "../../interfaces/tasks";
import Button from "../generals/Button";

const TaskCard = ({
    title,
    description,
    status,
    assigned,
    assigned_to,
    end_date,
    start_date,
}: Task) => {
    return (
        <article className="p-4 border border-gray-300 rounded-xl w-full grid gap-3 shadow-violet-300 shadow-md min-h-[300px]">
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-2xl">{title}</h1>
                <span className={`rounded-full ${status} w-5 h-5`}></span>
            </div>
            <div className="flex flex-row md:justify-between">
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
                <Button className="bg-leaf-200 hover:bg-leaf-100 rounded-xl">
                    <span className="text-black">Complete</span>
                </Button>
                <Button className="bg-garnet-200 hover:bg-garnet-100 rounded-xl">
                    <span className="text-black">Canceled</span>
                </Button>
            </div>
        </article>
    );
};

export default TaskCard;
