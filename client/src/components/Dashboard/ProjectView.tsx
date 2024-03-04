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
        <div>
            {screenSize.width >= 468 ? <DashboardNav /> : ""}
            <h1>Aqui va el proyecto</h1>
        </div>
    );
};

export default ProjectView;
