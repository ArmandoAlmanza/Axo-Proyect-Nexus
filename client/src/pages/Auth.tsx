import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import authImage from "/auth.png";
import clsx from "clsx";
import useScreenSize from "../hooks/useScreenSize";
import axolotl from "/axolotl.png";

const Auth = () => {
    const [state, setState] = useState("login");
    const screenSize = useScreenSize();

    const handdleLogin = () => {
        setState(state === "login" ? "register" : "login");
    };

    return (
        <div
            className={clsx(
                "container gap-3 items-center content-center h-screen",
                {
                    flex: screenSize.width >= 800,
                    grid: screenSize.width < 800,
                }
            )}
        >
            <img
                className={clsx("place-self-center", {
                    "size-96": screenSize.width >= 800,
                    "size-full": screenSize.width < 800,
                })}
                src={authImage}
                alt="auth image"
            />
            <div
                className={clsx("w-full", {
                    container: screenSize.width >= 800,
                })}
            >
                {screenSize.width >= 800 ? (
                    <div className="container flex items-end content-center gap-1">
                        <img
                            src={axolotl}
                            alt="logo"
                            className="aspect-4/3 w-16 h-20 select-none"
                        />
                        <h1 className="text-[46px] font-bold text-violet-400">
                            A.Nexus
                        </h1>
                    </div>
                ) : (
                    ""
                )}
                
                {state === "login" ? (
                    <LoginForm state={state} setState={handdleLogin} />
                ) : (
                    <RegisterForm state={state} setState={handdleLogin} />
                )}
            </div>
        </div>
    );
};

export default Auth;
