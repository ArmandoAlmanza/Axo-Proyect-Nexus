import { useState, useEffect } from "react";

const useScreenScroll = () => {
    const [screenScroll, setScreenScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScreenScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return screenScroll;
};

export default useScreenScroll;
