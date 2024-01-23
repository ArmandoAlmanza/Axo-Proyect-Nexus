import tasks from "../../mock/tasks.mock.json";
import projects from "../../mock/proyect.mock.json";
import TaskCard from "./TaskCard";
import teams from "../../mock/teams.mock.json";
import MemberCard from "../users/MemberCard";
import Comments from "../comments/Comments";
const ProjectCard = () => {
    const project = projects[0];
    const active = true;
    return (
        <article className="border rounded-xl mx-auto grid xl:grid-cols-[1fr,400px] p-4 w-full min-h-screen">
            <div className="flex flex-col gap-3 order-1 w-full">
                <div>
                    <h1 className="text-3xl font-semibold text-center mb-3">
                        {project.title}
                    </h1>
                    <div className="grid gap-10 w-[95%] mx-auto">
                        <div className="border rounded-xl border-violet-300 p-2 w-full mx-auto">
                            <h2 className="text-center text-xl font-bold border-b border-b-gray-300">
                                Team Members
                            </h2>
                            <div className="overflow-y-scroll min-h-[420px] max-h-[420px]">
                                {teams.Members.map((member, i) => (
                                    <MemberCard key={i} {...member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid border rounded-xl border-pink-600 p-2 gap-4 w-[95%] mx-auto">
                    <h2 className="text-center text-xl font-bold border-b border-b-gray-300">
                        Comments
                    </h2>
                    <div className="overflow-y-scroll min-h-[500px] max-h-[500px]">
                        <Comments />
                    </div>
                </div>
            </div>

            <div className="border border-gray-300 items-center rounded-xl">
                <nav className="p-3 flex md:flex-row md:justify-between border-b border-b-gray-300 w-full items-end">
                    <h1 className="text-3xl font-semibold">Tasks</h1>
                    <div className="flex flex-row justify-between gap-4 px-3">
                        <p
                            className={`${
                                active ? "text-violet-600" : "text-black"
                            } text-lg transition-colors hover:text-violet-600 cursor-pointer bg-white px-2 rounded-full border border-gray-600 duration-300 hover:border-violet-600`}
                        >
                            Priority
                        </p>
                        <p className="text-lg transition-colors hover:text-violet-600 cursor-pointer bg-white px-2 rounded-full border border-gray-600">
                            Status
                        </p>
                        <p className="text-lg transition-colors hover:text-violet-600 cursor-pointer bg-white px-2 rounded-full border border-gray-600">
                            User
                        </p>
                    </div>
                </nav>
                <div className="grid md:grid-cols-2 place-items-center p-4 gap-3 w-full">
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
