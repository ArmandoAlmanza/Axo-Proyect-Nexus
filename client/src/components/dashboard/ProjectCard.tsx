import tasks from "../../mock/tasks.mock.json";
import projects from "../../mock/proyect.mock.json";
import TaskCard from "./TaskCard";
import teams from "../../mock/teams.mock.json";
const ProjectCard = () => {
    const project = projects[0];
    return (
        <article className="border rounded-xl mx-auto grid gap-4 p-4 w-full">
            <h1 className="text-3xl font-semibold text-center mb-3">
                {project.title}
            </h1>
            <div className="grid lg:grid-cols-2 gap-10 place-content-center">
                <div className="md:order-1">
                    <p className="text-lg">{project.description}</p>
                </div>
                <div className="border rounded-xl border-gray-300 p-2 md:order w-full mx-auto md:w-3/4">
                    <h1 className="text-center text-xl font-bold border-b border-b-gray-300">Team Members</h1>
                    
                    {teams.Members.map((member, i) => (
                        <div key={i} className="flex justify-evenly border-b border-b-gray-300 items-center">
                            <img className="h-20 justify-items-start" src="/axolotl.png" alt="" />
                            <p key={i} className="flex flex-col text-lg">
                                {member.name}
                                <span className="text-violet-400 text-sm">
                                    ({member.email})
                                </span>
                            </p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="border border-gray-300 items-center rounded-xl">
                <nav className="p-3 flex md:flex-row md:justify-between border-b border-b-gray-300 w-full items-end">
                    <h1 className="text-3xl font-semibold">Tasks</h1>
                    <div className="flex flex-row justify-between gap-4 px-3">
                        <p
                            className={`active text-lg transition-colors hover:text-violet-600`}
                        >
                            Priority
                        </p>
                        <p className="text-lg transition-colors hover:text-violet-600">
                            Status
                        </p>
                        <p className="text-lg transition-colors hover:text-violet-600">
                            User
                        </p>
                    </div>
                </nav>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center p-4 gap-3">
                    {tasks.map((task, i) => (
                        <TaskCard
                            key={i}
                            title={task.title}
                            description={task.description}
                            status={task.status}
                        />
                    ))}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
