import React from "react";

function TerminalButton({ pageName, onClick }) {
    return (
        <button
            onClick={onClick}
            className="bg-theme-green/80 hover:bg-theme-green/90 text-theme-dark font-mono font-bold focus:outline-none rounded-sm inline px-2 py-1">
            {pageName}.sh
        </button>
    );
}

export default TerminalButton;
