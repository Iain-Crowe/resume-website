import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import Art from "../pages/Art";
import Contact from "../pages/Contact";

import "../styles/TerminalStyles.css";

function Terminal() {
    return (
        <div className="mt-24 mx-4 h-[47rem] md:mt-4 md:ml-72 md:mr-16 lg:w-[54rem] lg:ml-[27.5vw] lg:mr-4 md:h-[97vh] terminal-container bg-theme-dark/95 text-theme-green font-mono rounded-xl shadow-lg border-2 border-[#222] overflow-auto">
            <div className="effect-wrapper p-4">
                <div className="scan-lines"></div>
                <div className="screen-flicker"></div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/art" element={<Art />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default Terminal;
