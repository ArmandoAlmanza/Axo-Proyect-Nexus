import { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../generals/Button";
import useValidation from "../../hooks/useValidation";

interface formProps {
    state: string;
    setState: () => void;
}

const LoginForm = ({ setState }: formProps) => {
    const { userValidation, passValidation } = useValidation();

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const [isValid, setIsValid] = useState({
        user: false,
        password: false,
    });

    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
        event.target.name === "email"
            ? setIsValid({
                  ...isValid,
                  user: userValidation(event.target.value, "email"),
              })
            : setIsValid({
                  ...isValid,
                  password: passValidation(event.target.value),
              });
    };

    return (
        <>
            <form className="mb-4">
                <div className="flex flex-col mb-4">
                    <label
                        htmlFor="email"
                        className=" text-purple text-md font-semibold mb-2"
                    >
                        <span>Email </span>
                    </label>
                    <input
                        className="oshadow appearance-none border-b-2 shadow-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple transition-[border,colors] duration-500"
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
                        placeholder="*******"
                        required
                        id="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    className="cursor-pointer text-blue-600"
                    onClick={setState}
                >
                    You don't have an account?
                </button>
                <Button
                    type="button"
                    onClick={() =>
                        isValid.user && isValid.password
                            ? setTimeout(() => navigate("/dashboard"), 2000)
                            : alert("user or password invalid")
                    }
                    className="bg-black text-white px-1 py-2 mx-auto w-3/4 transition-colors hover:bg-violet-400 hover:text-black duration-500 flex items-center content-center mt-2"
                >
                    <span className="text-[20px]">Log In</span>
                    <FaArrowRightToBracket className="text-[22px]" />
                </Button>
            </form>
        </>
    );
};

export default LoginForm;
