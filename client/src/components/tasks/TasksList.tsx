import TaskCard from "./TaskCard";

const TasksList = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl border-b border-b-white w-[200px] mb-4">
                Due Today
            </h1>
            <TaskCard />
        </div>
    );
};

export default TasksList;
