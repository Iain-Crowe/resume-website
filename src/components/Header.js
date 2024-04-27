import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "../styles/TerminalStyles.css";

import icon from "../assets/icon.png";

function Header() {
    const navigate = useNavigate();

    return (
        <header className="fixed bg-transparent text-white text-center pt-4 items-center px-4">
            <button
                onClick={() => navigate("/")}
                className="terminal-container flex items-center font-mono text-xl p-3 w-[14rem] rounded-xl bg-theme-dark/90 border-2 border-[#222]">
                <div className="scan-lines"></div>
                <div className="screen-flicker"></div>
                <img
                    src={icon}
                    alt="Iain Crowe Logo"
                    className="rounded-xl mx-3 h-8 w-8"
                />
                Iain Crowe
            </button>
        </header>
    );
}

export default Header;
