import { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";

import useValidation from "../../hooks/useValidation";
import Button from "../generals/Button";
import { useNavigate } from "react-router-dom";

interface formProps {
    state: string;
    setState: () => void;
}

const RegisterForm = ({ setState }: formProps) => {
    const navigate = useNavigate();
    const { userValidation, passValidation } = useValidation();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name: "",
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleButtonClick = () => {
        if (!userValidation(userInfo.email, "email")) {
            alert("The user email is invalid");
            return;
        }
        if (!userValidation(userInfo.name, "name")) {
            alert(
                "The user name is invalid, you can only use numbers and letters"
            );
            return;
        }
        if (!passValidation(userInfo.password)) {
            alert("The password contains invalid characters");
            return;
        }

        alert("All good, welcome");
        setTimeout(() => navigate("/dashboard"), 2000);
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
                        value={userInfo.name}
                        onChange={handleInputChange}
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
                        value={userInfo.email}
                        onChange={handleInputChange}
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
                        type={"password"}
                        placeholder="*******"
                        required
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleInputChange}
                    />
                </div>

                <Button
                    type="button"
                    onClick={handleButtonClick}
                    className="bg-black text-white px-1 py-2 mx-auto w-3/4 transition-colors hover:bg-violet-400 hover:text-black duration-500 flex items-center content-center mt-2"
                >
                    <span className="text-[20px]">Log In</span>
                    <FaArrowRightToBracket className="text-[22px]" />
                </Button>
            </form>
            <button className="cursor-pointer text-blue-600" onClick={setState}>
                I already have an account
            </button>
        </div>
    );
};

export default RegisterForm;
