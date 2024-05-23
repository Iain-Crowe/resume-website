import React, { useState } from "react";

function Footer() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="fixed w-full mt-8 left-4 bottom-2 flex items-center">
                <div
                    className={`terminal-container-fr text-2xl transition-all duration-400 ease-in-out h-12 rounded-full ${
                        isOpen ? "w-48" : "w-12"
                    } bg-theme-dark/90 p-3 flex items-center justify-between`}>
                    <div className="scan-lines-fr"></div>
                    <div className="screen-flicker-fr"></div>
                    <button
                        onClick={togglePopup}
                        className="text-theme-gray focus:outline-none">
                        <i
                            className={`fas ${
                                isOpen ? "fa-chevron-left" : "fa-share-alt"
                            }`}></i>
                    </button>
                    {isOpen && (
                        <div className="flex items-center space-x-6">
                            <a
                                href="https://instagram.com/iain.crowe02"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="text-theme-gray fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://linkedin.com/in/iain-crowe/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="text-theme-gray fab fa-linkedin-in"></i>
                            </a>
                            <a
                                href="https://github.com/iain-crowe/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="text-theme-gray fab fa-github"></i>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Footer;
