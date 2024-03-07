import useScreenSize from "../../hooks/useScreenSize";
import ProjectIcon from "../projects/ProjectIcon";

const FilterBar = () => {
    const screenSize = useScreenSize();
    return (
        <div className="flex flex-col items-center">
            {screenSize.width < 800 ? (
                <ProjectIcon
                    title="Axo Project Nexus"
                    img=""
                    className="border border-white w-fit p-2 mt-3"
                />
            ) : (
                ""
            )}

            <div className="container my-6 font-secondary w-full mx-auto">
                <ul className="border items-center w-full font-medium text-white border-bluebell-300 rounded-lg flex justify-evenly">
                    <li className="w-full">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-license"
                                type="radio"
                                value=""
                                name="list-radio"
                                className="w-4 h-4"
                            />
                            <label
                                htmlFor="horizontal-list-radio-license"
                                className="w-full py-3 ms-2 text-[18px] font-medium text-white"
                            >
                                Due Date
                            </label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-id"
                                type="radio"
                                value=""
                                name="list-radio"
                                className="w-4 h-4"
                            />
                            <label
                                htmlFor="horizontal-list-radio-id"
                                className="w-full py-3 ms-2 text-[18px] font-medium text-white"
                            >
                                Status
                            </label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-military"
                                type="radio"
                                value=""
                                name="list-radio"
                                className="w-4 h-4"
                            />
                            <label
                                htmlFor="horizontal-list-radio-military"
                                className="w-full py-3 ms-2 text-[18px] font-medium text-white"
                            >
                                Type
                            </label>
                        </div>
                    </li>
                    <li className="w-full">
                        <div className="flex items-center ps-3">
                            <input
                                id="horizontal-list-radio-passport"
                                type="radio"
                                value=""
                                name="list-radio"
                                className="w-4 h-4"
                            />
                            <label
                                htmlFor="horizontal-list-radio-passport"
                                className="w-full py-3 ms-2 text-[18px] font-medium text-white"
                            >
                                Priority
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterBar;
