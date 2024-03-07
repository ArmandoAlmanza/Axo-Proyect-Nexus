import clsx from "clsx";

const TaskCard = () => {
    const type = "meeting";
    const type2 = "todo";
    return (
        <article className="border border-white rounded-md px-4">
            <div className="flex items-center my-3 flex-row gap-4">
                <input
                    type="checkbox"
                    className={clsx(
                        "w-7 h-7 ring-gray-200 ring-2 before:content[''] peer relative cursor-pointer appearance-none rounded-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10",
                        {
                            "checked:border-dalia-200 checked:bg-dalia-200 checked:before:bg-dalia-200 ":
                                type === "meeting",
                        },
                        {
                            "checked:border-bluebell-300 checked:bg-bluebell-300 checked:before:bg-bluebell-300 ":
                                type2 === "todo",
                        }
                    )}
                    id="completed"
                />
                <div className="grid">
                    <span>12:45</span>
                    <span>15:00</span>
                </div>
                <div className="bg-leaf-200 h-[30px] w-[8px]"></div>
                <h1>The task here</h1>
            </div>
        </article>
    );
};

export default TaskCard;
