const TaskCard = () => {
    return (
        <article className="border border-white rounded-md px-4">
            <div className="flex items-center my-3 flex-row gap-4">
                <input
                    id="red-checkbox"
                    type="checkbox"
                    value="a"
                    className="w-7 h-7 text-lily-400 bg-gray-100 border-gray-300 rounded ring-lily-400 ring-2"
                />
                <div className="grid">
                  <span>12:45</span>
                  <span>15:00</span>
                </div>
                <div className="bg-leaf-200 h-[30px] w-[8px]">

                </div>
                <h1>The task here</h1>
            </div>
        </article>
    );
};

export default TaskCard;
