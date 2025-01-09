import React, { useEffect } from "react";

const CommandInput = ({ onCommand }) => {
	const [input, setInput] = React.useState("");

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && input.trim()) {
			onCommand(input.trim());
			setInput("");
			document
				.getElementById("commandEntry")
				.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	};

	return (
		<div className="flex items-center font-mono text-xs sm:text-sm my-1">
			<span className="text-shamrock_green-600/80">guest</span>
			<span className="text-snow/75 font-bold">@</span>
			<span className="text-cerulean-600">iaincrowe.com</span>
			<span className="text-snow/75 mr-2">:~$</span>
			<input
				id="commandEntry"
				type="text"
				className="w-full bg-night text-snow/75 border-none outline-none font-mono"
				style={{ caretShape: "block" }}
				autoComplete="off"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default CommandInput;
