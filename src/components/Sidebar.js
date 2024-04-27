import React from "react";
import { useNavigate } from "react-router-dom";

import DirectoryButton from "./DirectoryButton";

function Sidebar() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <aside className="fixed p-4 text-theme-gray top-[33vh] w-[14rem] left-4 z-10 terminal-container items-start font-mono rounded-xl bg-theme-dark/90 border-2 border-[#222]">
            <div className="scan-lines"></div>
            <div className="screen-flicker"></div>
            <div className="mb-2 flex items-center pl-3">
                <span className="text-lg text-theme-blue font-bold">
                    pages/
                </span>
            </div>
            <div className="flex-row pl-2">
                <div className="flex mb-2">
                    <p className="inline mr-2 pt-1">├──</p>
                    <DirectoryButton
                        pageName="home"
                        onClick={() => handleNavigate("/")}>
                        home.sh
                    </DirectoryButton>
                </div>
                <div className="flex mb-2">
                    <p className="inline mr-2 pt-1">├──</p>
                    <DirectoryButton
                        pageName="portfolio"
                        onClick={() => handleNavigate("/portfolio")}>
                        portfolio.sh
                    </DirectoryButton>
                </div>
                <div className="flex mb-2">
                    <p className="inline mr-2 pt-1">├──</p>
                    <DirectoryButton
                        pageName="skills"
                        onClick={() => handleNavigate("/skills")}>
                        skills.sh
                    </DirectoryButton>
                </div>
                <div className="flex mb-2">
                    <p className="inline mr-2 pt-1">├──</p>
                    <DirectoryButton
                        pageName="education"
                        onClick={() => handleNavigate("/education")}>
                        education.sh
                    </DirectoryButton>
                </div>
                <div className="flex mb-2">
                    <p className="inline mr-2 pt-1">├──</p>
                    <DirectoryButton
                        pageName="art"
                        onClick={() => handleNavigate("/art")}>
                        art.sh
                    </DirectoryButton>
                </div>
                <div className="flex mb-2">
                    <p className="inline mr-2 pt-1">└──</p>
                    <DirectoryButton
                        pageName="contact"
                        onClick={() => handleNavigate("/contact")}>
                        contact.sh
                    </DirectoryButton>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
