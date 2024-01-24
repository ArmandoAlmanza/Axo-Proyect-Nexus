const Comments = () => {
    return (
        <article className="grid place-items-start w-3/4 mx-auto border border-gray-400 rounded-xl">
            <div className="flex justify-start gap-4 border-b border-b-gray-300 items-center w-full p-2">
                <img
                    className="h-12 justify-items-start"
                    src={"/axolotl.png"}
                    alt=""
                />
                <p className="flex flex-col text-lg">Armando Almanza:</p>
            </div>
            <p className="p-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
                labore cupiditate? Voluptate porro debitis doloremque excepturi
                iste cumque eos, animi deleniti iure quae saepe totam voluptas,
                tempora commodi et minima.
            </p>
        </article>
    );
};

export default Comments;
