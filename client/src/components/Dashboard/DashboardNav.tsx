import ProjectIcon from "../projects/ProjectIcon";
import ProjectNav from "../projects/ProjectNav";

const DashboardNav = () => {
    return (
        <aside className="border-r border-r-white flex flex-col gap-3 items-center content-center w-full">
            <ProjectIcon title="Axo Project Nexus" img="/axo_little.png" />
            <ProjectNav/>
        </aside>
    );
};

export default DashboardNav;
