import React from "react";
import { useLocation } from "react-router-dom";

function DirectoryButton({ pageName, onClick }) {
    const location = useLocation();
    const isActive =
        (pageName === "home" && location.pathname === "/") ||
        location.pathname === `/${pageName}`;

    return (
        <button
            onClick={onClick}
            className={`bg-theme-gray/[0.01] hover:bg-theme-gray/[0.05] font-mono font-bold focus:outline-none rounded-sm inline px-2 py-1
                        ${isActive ? "text-theme-green" : "text-theme-gray"}`}>
            {pageName}.sh
        </button>
    );
}

export default DirectoryButton;
