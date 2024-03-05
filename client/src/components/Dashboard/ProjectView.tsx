import useScreenSize from "../../hooks/useScreenSize";
import DashboardNav from "./DashboardNav";

/*
 * This will be the main view when you enter the app (not the loggin or landing page)
 * This component call some other, Like
 
    - DashBoardNav
    TODO, add the other when i uuse them xd

 */
const ProjectView = () => {
    const screenSize = useScreenSize();
    return (
        <main className="grid md:grid-cols-[350px,1fr]">
            {screenSize.width > 800 ? <DashboardNav /> : ""}
            <h1>Aqui va el proyecto</h1>
        </main>
    );
};

export default ProjectView;
