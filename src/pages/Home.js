import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TerminalButton from "../components/TerminalButton";
import Typewriter from "../components/Typewriter";

import "../styles/TerminalStyles.css";

import portrait from "../assets/portrait.jpg";

function Home() {
    const [showPortrait, setShowPortrait] = useState(false);
    const [showCommands, setShowCommands] = useState(false);

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const content1 = [
        {
            text: `iain@crowe`,
            className: "mb-1 text-theme-green inline",
        },
        {
            text: `:`,
            className: "mb-1 text-theme-gray inline",
        },
        {
            text: `~/home`,
            className: "mb-1 text-theme-blue inline",
        },
        {
            text: `$ ./loadintro`,
            className: "mb-1 text-theme-gray inline",
        },
        {
            text: `About Me`,
            className: "text-theme-gray text-2xl mt-1",
        },
        {
            text: `===================================================================================`,
            className: "pt-1 mx-auto",
        },
    ];

    const content2 = [
        {
            text: `Hi there! I'm Iain. In the professional realm, I hope to use
                   artificial intelligence to spark positive changes, especially in
                   areas like environmental conservation and healthcare. It's more
                   than work to me; it's about making a meaningful difference.
                   Outside of that, I unwind with art —— a hobby that keeps me
                   balanced and creatively fulfilled. My portfolio is a little
                   window into my world: the projects I'm passionate about and the
                   personal interests that fill my downtime. Take a look, and let's
                   get to know each other a bit better.`,
            className: "my-1",
        },
        {
            text: `===================================================================================`,
            className: "pb-1 mx-auto",
        },
        {
            text: `iain@crowe`,
            className: "my-1 text-theme-green inline",
        },
        {
            text: `:`,
            className: "my-1 text-theme-gray inline",
        },
        {
            text: `~/home`,
            className: "my-1 text-theme-blue inline",
        },
        {
            text: `$ ls`,
            className: "my-1 text-theme-gray inline",
        },
    ];

    const content3 = [
        {
            text: `iain@crowe`,
            className: "text-theme-green inline",
        },
        {
            text: `:`,
            className: "text-theme-gray inline",
        },
        {
            text: `~/home`,
            className: "text-theme-blue inline",
        },
        {
            text: `$ `,
            className: "text-theme-gray inline",
        },
        {
            text: `█`,
            className: "cursor-blink text-theme-gray inline",
        },
    ];

    return (
        <div className="font-mono text-theme-gray p-4">
            <Typewriter
                contents={content1}
                speed={25}
                onTypingEnd={() => setShowPortrait(true)}
            />
            {showPortrait && (
                <img
                    className="mx-auto my-3 rounded-md"
                    src={portrait}
                    alt="Iain Crowe"
                />
            )}
            {showPortrait && (
                <Typewriter
                    contents={content2}
                    speed={25}
                    onTypingEnd={() => setShowCommands(true)}
                />
            )}
            {showCommands && (
                <div className="mt-2 mb-3 text-theme-dark-green-light transition-all duration-500 ease-in-out flex space-x-10 items-start justify-start">
                    <TerminalButton
                        pageName="portfolio"
                        onClick={() => handleNavigate("/portfolio")}
                    />
                    <TerminalButton
                        pageName="skills"
                        onClick={() => handleNavigate("/skills")}
                    />
                    <TerminalButton
                        pageName="education"
                        onClick={() => handleNavigate("/education")}
                    />
                    <TerminalButton
                        pageName="art"
                        onClick={() => handleNavigate("/art")}
                    />
                    <TerminalButton
                        pageName="contact"
                        onClick={() => handleNavigate("/contact")}
                    />
                </div>
            )}
            {showCommands && (
                <>
                    <Typewriter
                        contents={content3}
                        speed={25}
                        onTypingEnd={null}
                    />
                </>
            )}
        </div>
    );
}

export default Home;
