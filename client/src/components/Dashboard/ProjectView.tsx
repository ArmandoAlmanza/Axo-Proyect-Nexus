import clsx from "clsx";
import useScreenSize from "../../hooks/useScreenSize";
import DashboardNav from "./DashboardNav";
import FilterBar from "../tasks/FilterBar";
import TasksList from "../tasks/TasksList";
/*
 * This will be the main view when you enter the app (not the loggin or landing page)
 * This component call some other, Like
 
    - DashBoardNav
    TODO, add the other when i uuse them xd

 */
const ProjectView = () => {
    const screenSize = useScreenSize();

    return (
        <main
            className={clsx("grid gap-4", {
                "grid-cols-[300px,auto]": screenSize.width > 800,
            })}
        >
            {screenSize.width > 800 ? <DashboardNav /> : ""}
            <div className="overflow-y-scroll h-screen no-scrollbar">
                <FilterBar />
                <TasksList />
            </div>
        </main>
    );
};

export default ProjectView;
