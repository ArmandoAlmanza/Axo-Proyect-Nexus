import { Link } from "react-router-dom";
import { FaUsers, FaRegPaperPlane, FaBriefcase } from "react-icons/fa6";
import useScreenScroll from "./hooks/useScreenScroll";
import Footer from "./components/Footer";
import Button from "./components/generals/Button";

function App() {
    const logged = false;
    const screenScroll = useScreenScroll();
    const services = [
        {
            title: "Manage Proyects",
            content:
                "You can manage your proyects, personal, proffesional, etc. See the performance and the goals, etc.",
            icon: <FaBriefcase />,
        },
        {
            title: "Teams",
            content:
                "If you are not alone in the proyect you can have teams!, assign task to people, chat with them to see how their doing and see the comments of the tasks",
            icon: <FaUsers />,
        },
    ];
    return (
        <>
            <header
                className={`${
                    screenScroll >= 50
                        ? "bg-[#f0f0f0] shadow-[0_1px_16px_rgba(0, 0, 0, 0.12)] z-10"
                        : "bg-body"
                } sticky top-0 flex flex-row justify-evenly gap-3 p-4 border-b border-b-black content-center items-center transition-[colors,shadow] duration-300`}
            >
                <h1 className="text-3xl font-bold">
                    <span className="text-violet-400">Axo</span> Project{" "}
                    <span className="text-pink-600">Nexus</span>
                </h1>

                <nav>
                    <Link to={logged ? "/dashboard" : "/auth"}>
                        <Button>
                            <FaRegPaperPlane />
                            Try it Now
                        </Button>
                    </Link>
                </nav>
            </header>
            <main className="md:mx-auto gap-5 flex flex-col">
                <div className="flex flex-col items-center my-5">
                    <h1 className="mx-auto text-4xl font-bold text-center">
                        Welcome to{" "}
                        <span className="text-purple-light">Axo </span>
                        Proyect <span className="text-pink-600">Nexus</span>
                    </h1>
                </div>
                <div className="max-w-5xl md:mx-auto gap-5 grid md:grid-cols-2 place-items-center m-4 mx-auto p-3">
                    <h1 className="text-4xl font-bold max-w-max mx-auto self-end">
                        What is Axo Proyect Nexus?
                    </h1>

                    <div className="md:row-span-2 w-56 md:w-96">
                        <img src="/axolotl.png" alt="Axo icon" />
                    </div>

                    <div className="grid gap-4 self-start">
                        <p>
                            Axo is a platform to manage your proyects, your
                            teams, tasks, etc... and what makes us spetial? well
                            we had an axolotl as pet c:
                        </p>

                        <Link to={logged ? "/exams" : "/auth"}>
                            <Button className="px-5">
                                <FaBriefcase />
                                Start a proyect
                            </Button>
                        </Link>
                    </div>
                </div>

                <section className="p-3 bg-[#D4D4D4]">
                    <div className="max-w-6xl mb-5 p-3 grid gap-5 mx-auto">
                        <h2 className="relative text-4xl font-bold max-w-max mx-auto mt-3 after:content-[''] after:bg-purple after:absolute after:block after:w-10 after:h-7 after:-top-1 after:-right-2 md:self-end">
                            Services.
                        </h2>
                        <div className="max-w-6xl mb-5 p-8 grid gap-5 justify-center gap-y-8 pt-4 md:grid-cols-2">
                            {services.map((service, i) => (
                                <article
                                    className="relative group/card"
                                    key={i}
                                >
                                    <div className="absolute w-full h-full border-4 border-purple top-0 left-0 transition-transform duration-500 group-hover/card:translate-x-3 group-hover/card:translate-y-3"></div>

                                    <div className="h-full bg-body border-4 border-black pt-24 px-4 pb-12 z-[4] relative transition-[colors, border] duration-500">
                                        <div className="relative inline-block">
                                            <div className="absolute w-6 h-6 bg-purple-light -right-[2px] -top-[2px]"></div>
                                            <p className="text-3xl text-black relative z-[5]">
                                                {service.icon}
                                            </p>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-5">
                                            {service.title}.
                                        </h2>
                                        <p>{service.content}.</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
