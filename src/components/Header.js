import React from "react";
import { useNavigate, Link } from "react-router-dom";

import RadioNavBar from "./RadioNavBar";

import "../styles/TerminalStyles.css";

import icon from "../assets/icon.png";

function Header() {
    const navigate = useNavigate();

    return (
        <header className="fixed flex justify-between w-full bg-transparent text-white text-center pt-4 items-center px-4 z-10">
            <button
                onClick={() => navigate("/")}
                className="terminal-container flex items-center font-mono text-xl p-3 w-[14rem] rounded-xl bg-theme-dark/90 border-2 border-[#222]">
                <div className="scan-lines"></div>
                <div className="screen-flicker"></div>
                <img
                    src={icon}
                    alt="Iain Crowe Logo"
                    className="rounded-full ml-3 mr-5 h-8 w-8"
                />
                Iain Crowe
            </button>
            <RadioNavBar />
        </header>
    );
}

export default Header;
