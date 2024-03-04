import useScreenSize from "../../hooks/useScreenSize";
import DashboardNav from "./DashboardNav";

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
