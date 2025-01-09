import React from "react";

import { format } from "date-fns";
import About from "../pages/About";

const bannerString = `ws~ _       _                                                       
(_) __ _(_)_ __   ___ _ __ _____      _____   ___ ___  _ __ ___  
| |/ _\` | | '_ \\ / __| '__/ _ \\ \\ /\\ / / _ \\ / __/ _ \\| '_ \` _ \\ 
| | (_| | | | | | (__| | | (_) \\ V  V |  __/| (_| (_) | | | | | |
|_|\\__,_|_|_| |_|\\___|_|  \\___/ \\_/\\_/ \\___(_\\___\\___/|_| |_| |_| v1.0-dev
                                                                 
`;

const terminalCommands = (username, hostname) => {
	const commands = {
		banner: (setOutput) => {
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ banner`,
				bannerString,
				"Type 'help' to see a list of commands.",
			]);
		},
		time: (setOutput) => {
			const now = new Date();
			const timeString = format(now, "hh:mm:ss a");
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ time`,
				`It is currently ${timeString}`,
			]);
		},
		whoami: (setOutput) => {
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ whoami`,
				`${username}`,
			]);
		},
		hostname: (setOutput) => {
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ hostname`,
				`${hostname}`,
			]);
		},
		clear: (setOutput) => {
			setOutput([]);
		},
		help: (setOutput) => {
			const availableCommands = Object.keys(commands).sort().join(", ");
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ help`,
				`Available commands: ${availableCommands}`,
			]);
		},
		social: (setOutput) => {
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ social`,
				"Social Links:",
				" - Instagram: https://www.instagram.com/iain.crowe02/",
				" - LinkedIn: https://www.linkedin.com/in/iain-crowe/",
				" - GitHub: https://www.github.com/iain-crowe/",
			]);
		},
		about: (setOutput) => {
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ about`,
				React.createElement(About, { key: `about-${Date.now()}` }),
			]);
		},
		resume: (setOutput) => {
			const link = document.createElement("a");
			link.href = "/resume.pdf";
			link.download = "Resume_Iain_Crowe.pdf";
			link.click();

			setOutput((prev) => [
				`${username}@${hostname}:~$ resume`,
				"Downloading resume...",
			]);
		},
	};
	return commands;
};

export default terminalCommands;
