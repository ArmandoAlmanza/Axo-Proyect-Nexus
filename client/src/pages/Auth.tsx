import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = () => {
    const [state, setState] = useState("login");

    const handdleLogin = () => {
        setState(state === "login" ? "register" : "login");
    };

    return (
        <div className="absolute h-screen w-screen bg-no-repeat bg-center grid place-items-center bg-opacity-5 bg-[url(/authbg.jpg)] bg-cover">
            <div className="relative top-0 left-0 border border-black mx-auto my-auto max-w-4xl p-8 m-8 flex flex-col gap-5 bg-white md:w-full md:h-max ">
                <div className="b">
                    <h1 className="text-xl font-bold text-center">
                        Logn In / Sign Up
                    </h1>
                </div>
                <div className="h-full w-full">
                    {state === "login" ? (
                        <LoginForm state={state} setState={handdleLogin} />
                    ) : (
                        <RegisterForm state={state} setState={handdleLogin} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;
