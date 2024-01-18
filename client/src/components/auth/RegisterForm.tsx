import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

interface formProps {
    state: string;
    setState: () => void;
}

const RegisterForm = ({ setState }: formProps) => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <div className="transition-opacity ease-in-out opacity-100">
            <form className="mb-4">
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="name"
                        className=" text-purple text-md font-semibold mb-2"
                    >
                        <span>Full Name </span>
                    </label>
                    <input
                        className="appearance-none border-b-2 shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple transition-[border,colors] duration-500"
                        type="text"
                        placeholder="Jhon Doe"
                        required
                        id="name"
                        name="name"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="email"
                        className=" text-purple text-md font-semibold mb-2"
                    >
                        <span>Email </span>
                    </label>
                    <input
                        className="appearance-none border-b-2 shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple transition-[border,colors] duration-500"
                        type="email"
                        placeholder="jhondoe@email.com"
                        required
                        id="email"
                        name="email"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="password"
                        className=" text-purple text-md font-semibold mb-2"
                    >
                        <span>Password </span>
                    </label>
                    <input
                        className="appearance-none border-b-2 shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple transition-[border,colors] duration-500"
                        type={visible ? "text" : "password"}
                        placeholder="*******"
                        required
                        id="password"
                        name="password"
                    />
                    {!visible ? (
                        <FaEye
                            onClick={toggleVisible}
                            className="absolute right-10 bottom-[130px] opacity-[65%]"
                        />
                    ) : (
                        <FaEyeSlash
                            onClick={toggleVisible}
                            className="absolute right-10 bottom-[130px] opacity-[65%]"
                        />
                    )}
                </div>
                <button
                    type="button"
                    className="bg-black text-white px-2 py-1 mx-auto block w-36 transition-colors hover:bg-violet-400 hover:text-black duration-500"
                >
                    Sign Up
                </button>
            </form>
            <button className="cursor-pointer text-blue-600" onClick={setState}>
                I already have an account
            </button>
        </div>
    );
};

export default RegisterForm;
