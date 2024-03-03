interface Props {
    title: string;
    img: string;
}

const ProjectNav = ({ title, img }: Props) => {
    return (
        <article className="flex w-50 text-white items-center p-2 border rounded-xl transition-colors duration-300 hover:bg-white hover:text-black hover:border-black shadow-md cursor-pointer">
            <img className="h-20 rounded-full" src={img === "" ? "/axo_little.png" : img} alt="icon" />
            <p className="text-lg font-semibold">{title}</p>
        </article>
    );
};

export default ProjectNav;
