import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TerminalButton from "../components/TerminalButton";
import Typewriter from "../components/Typewriter";

import "../styles/TerminalStyles.css";

function Portfolio() {
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
            text: `~/portfolio`,
            className: "mb-1 text-theme-blue inline",
        },
        {
            text: `$ ./loadportfolio`,
            className: "mb-1 text-theme-gray inline",
        },
        {
            text: `My Portfolio`,
            className: "text-theme-gray text-2xl mt-1",
        },
        {
            text: `===================================================================================`,
            className: "pt-1 mx-auto",
        },
        {
            text: `Spinal Triage Machine Learning Tool`,
            className: "pt-1 text-theme-gray text-xl font-bold",
        },
        {
            text: `Project Overview`,
            className: "pt-2 text-theme-gray text-lg font-italic",
        },
        {
            text: `In a collaborative project with Orlando Health, I took on a challenging role in developing a machine learning tool aimed at transforming the triaging process for lumbar spine MRIs. The goal was to enhance diagnostic accuracy and speed, thus improving patient outcomes and optimizing clinical workflows.`,
            className: "pt-1 text-theme-gray text-md",
        },
        {
            text: `My Role and Contributions`,
            className: "pt-2 text-theme-gray text-lg font-italic",
        },
        {
            text: `Project Management:`,
            className: "pt-1 text-theme-gray text-md font-bold",
        },
        {
            text: `As the project manager, I spearheaded the team's efforts in navigating through the complexities of integrating advanced machine learning techniques with real-world medical data. My responsibilities ranged from strategic planning to detailed task management, ensuring that our project milestones were met with precision.`,
            className: "pt-1 text-theme-gray text-md",
        },
        {
            text: `Data Management and Databasing:`,
            className: "pt-1 text-theme-gray text-md font-bold",
        },
        {
            text: `Central to our project's success was the effective management of medical imaging data provided by Orlando Health. I was responsible for:`,
            className: "pt-1 text-theme-gray text-md",
        },
        {
            text: `- Preprocessing: `,
            className: "pt-1 text-theme-gray text-md font-bold",
        },
        {
            text: `Implementing robust preprocessing steps to prepare MRI images for analysis, ensuring data integrity and usability for machine learning applications.`,
            className: "pt-1 ml-4 text-theme-gray text-md",
        },
        {
            text: `- Database Setup and Management: `,
            className: "pt-1 text-theme-gray text-md font-bold",
        },
        {
            text: `Utilizing MongoDB, I developed a structured database system to securely store and easily retrieve both raw and processed data, supporting the dynamic needs of our machine learning models.`,
            className: "pt-1 ml-4 text-theme-gray text-md",
        },
    ];

    return (
        <div className="font-mono text-theme-gray p-4">
            <Typewriter
                contents={content1}
                speed={10}
                onTypingEnd={() => null}
            />
        </div>
    );
}

export default Portfolio;
