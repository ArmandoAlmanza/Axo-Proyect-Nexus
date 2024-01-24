interface Props {
    name: string;
    email: string;
    img: string;
    rol: string;
}

const MemberCard = ({ name, email, img, rol }: Props) => {
    return (
        <div className="grid grid-cols-3 border-b border-b-gray-300 items-center">
            <img
                className="h-20 justify-items-start"
                src={img != "" ? img : "/axolotl.png"}
                alt=""
            />
            <p className="flex flex-col text-lg">
                {name}
                <span className="text-violet-400 text-sm">({email})</span>
            </p>
            <p
                className={`${
                    rol === "leader"
                        ? "text-violet-600"
                        : "text-black"
                } font-bold self-start`}
            >
                {rol}
            </p>
        </div>
    );
};

export default MemberCard;
