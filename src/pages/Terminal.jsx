import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";

import CommandInput from "../components/terminal/CommandInput";
import TerminalHeader from "../components/terminal/TerminalHeader";
import TerminalOutput from "../components/terminal/TerminalOutput";

import terminalCommands from "../commands/terminalCommands";

const Terminal = () => {
	const [output, setOutput] = useState([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const username = "guest";
	const hostname = "iaincrowe.com";

	const commands = terminalCommands(username, hostname);

	useEffect(() => {
		if (commands.banner) {
			commands.banner(setOutput);
		}
	}, []);

	useEffect(() => {
		document
			.getElementById("commandEntry")
			.scrollIntoView({ behavior: "smooth", block: "end" });
	}, [output]);

	const handleCommand = (command) => {
		if (commands[command]) {
			commands[command](setOutput);
		} else {
			setOutput((prev) => [
				...prev,
				`${username}@${hostname}:~$ ${command}`,
				`Command '${command}' not found.`,
			]);
		}
	};

	const handleClick = () => {
		const inputElement = document.getElementById("commandEntry");
		inputElement.focus();
	};

	return (
		<div
			className={`w-full h-[90vh] sm:h-screen bg-night-100 text-snow flex items-center justify-center p-4 ${
				isMenuOpen ? "blur-sm" : ""
			}`}
			onClick={handleClick}>
			{/* Add modal for menu button here */}
			<div className="w-full h-full bg-night border border-snow flex flex-col overflow-hidden rounded-lg shadow-lg">
				<TerminalHeader
					isMenuOpen={isMenuOpen}
					toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
				/>
				<div className="p-4 flex-grow font-mono overflow-auto">
					<TerminalOutput
						output={output}
						username={username}
						hostname={hostname}
					/>
					<Outlet />
					<CommandInput onCommand={handleCommand} />
				</div>{" "}
			</div>
		</div>
	);
};

export default Terminal;
