import TaskCard from "./TaskCard";
import Tasks from "../../mock/tasks.mock.json";
const TasksList = () => {
    const tasks = Tasks;
    return (
        <div className="p-4">
            <h1 className="text-2xl border-b border-b-white w-[200px] mb-4">
                Due Today
            </h1>
            <div className="grid gap-4">
                {tasks.map((task, i) => (
                    <TaskCard
                        key={i}
                        title={task.title}
                        end_hour="16:45"
                        start_hour="12:30"
                        type={task.type}
                        status={task.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default TasksList;
