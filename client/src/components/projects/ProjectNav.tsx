interface Props {
    title: string;
    img: string;
}

const ProjectNav = ({ title, img }: Props) => {
    return (
        <article className="flex w-50 items-center p-2 border rounded-xl transition-colors duration-300 hover:bg-white hover:border-black shadow-md cursor-pointer">
            <img className="h-20 rounded-full" src={img === "" ? "/axolotl.png" : img} alt="icon" />
            <p className="text-lg font-semibold">{title}</p>
        </article>
    );
};

export default ProjectNav;
