interface Props {
    title: string;
    status: string;
    description: string;
}
const TaskCard = ({ title, description, status }: Props) => {
    return (
            <article className="p-4 border border-gray-300 rounded-xl w-full grid gap-3 shadow-violet-300 shadow-md">
            <div className="flex flex-row justify-between">
                <h1 className="font-bold text-2xl">{title}</h1>
                <span className={`rounded-full ${status} w-5 h-5`}></span>
            </div>
            <p>{description}</p>
			<div className="flex gap-4 md:flex-row justify-between">
				<button className="flex justify-center items-center gap-x-2 bg-emerald-600 text-white py-1 px-[.5rem] transition-colors duration-500 hover:bg-emerald-400 text-md rounded-xl">Complete</button>
				<button className="flex justify-center items-center gap-x-2 bg-red-600 text-white py-1 px-[.5rem] transition-colors duration-500 hover:bg-red-400 text-md rounded-xl">Canceled</button>
			</div>
        </article>
    );
};

export default TaskCard;
