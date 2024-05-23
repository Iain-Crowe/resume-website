import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

function RadioNavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("");

    const handleNavigate = (event) => {
        const newPath = event.target.value;
        navigate(newPath);
        setSelectedPage(newPath);
    };

    return (
        <div
            className={`md:invisible terminal-container transition-all rounded-xl duration-400 ease-in-out h-12 p-[0.85rem] bg-theme-dark/90 text-2xl items-center ${
                isOpen ? "w-48 h-[3.75rem]" : "w-12"
            } flex items-center justify-between`}>
            <div className="scan-lines"></div>
            <div className="screen-flicker"></div>
            {isOpen && (
                <div className="flex items-center text-sm font-mono font-bold">
                    <select
                        value={selectedPage}
                        onChange={handleNavigate}
                        className="bg-theme-dark text-theme-gray font p-2 rounded-md focus:outline-none">
                        <option value="/">Home</option>
                        <option value="/portfolio">Portfolio</option>
                        <option value="/skills">Skills</option>
                        <option value="/education">Education</option>
                        <option value="/art">Art</option>
                        <option value="/contact">Contact</option>
                    </select>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-theme-gray focus:outline-none">
                <i className={"fas fa-bars"}></i>
            </button>
        </div>
    );
}

export default RadioNavBar;
