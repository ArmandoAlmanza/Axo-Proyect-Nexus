interface Props {
    name: string;
    email: string;
    img: string;
    rol: string;
}

const MemberCard = ({ name, email, img, rol }: Props) => {
    return (
        <div className="flex justify-evenly border-b border-b-gray-300 items-center">
            <img
                className="h-20 justify-items-start"
                src={img != "" ? img : "/axolotl.png"}
                alt=""
            />
            <p className="flex flex-col text-lg">
                {name}
                <span className="text-violet-400 text-sm">({email})</span>
            </p>
            <p>{rol}</p>
        </div>
    );
};

export default MemberCard;
