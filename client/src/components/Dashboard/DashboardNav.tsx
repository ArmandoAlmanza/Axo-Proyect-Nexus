import ProjectIcon from "../projects/ProjectIcon";
import ProjectNav from "../projects/ProjectNav";

const DashboardNav = () => {
    return (
        <aside className=" border-r border-r-white grid gap-3 place-items-center w-full ">
            <ProjectIcon title="Axo Project Nexus" img="/axo_little.png" />
            <ProjectNav/>
        </aside>
    );
};

export default DashboardNav;
