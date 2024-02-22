import { clsx } from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: Props) => {
    return (
        <button
            className={clsx(
                "flex justify-center items-center gap-x-2 bg-black text-white py-2 px-[.5rem] transition-colors duration-500 hover:bg-purple text-lg mx-auto w-max",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
