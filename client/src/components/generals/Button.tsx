import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/*
 * We're going to use a lot of buttons so i decided to make a base component and we only change the functionality any time we call it

    ? With clsx and tailwind merge we can add extra classes that are not static, for example in the tasks we need a green and a red button, so whem we call our component we pass the new classes and it works perfectly
 */

const Button = ({ children, className, ...props }: Props) => {
    return (
        <button
            className={twMerge(
                clsx(
                    "flex justify-center items-center gap-x-2 bg-black text-white py-2 px-[.5rem] transition-colors duration-500 hover:bg-purple text-lg mx-auto w-max",
                    className
                )
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
