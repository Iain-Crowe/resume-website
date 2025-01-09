import React from "react";

const TerminalOutput = ({ output, username, hostname }) => {
	const parseLine = (line) => {
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		const parts = line.split(urlRegex);

		return parts.map((part, index) => {
			if (urlRegex.test(part)) {
				return (
					<a
						key={index}
						href={part}
						target="_blank"
						rel="noopener noreferrer"
						className="text-cerulean-500 hover:underline">
						{part}
					</a>
				);
			}
			return <span key={index}>{part}</span>;
		});
	};

	return (
		<>
			{output.map((item, index) => {
				if (typeof item != "string") {
					return <div key={index}>{item}</div>;
				}

				if (item.startsWith(`${username}@${hostname}:~$`)) {
					const [userPart, rest] = item.split("@");
					const [hostPart, command] = (rest || "").split(":");

					return (
						<p
							key={index}
							className="text-xs sm:text-sm my-1">
							<span className="text-shamrock_green-600/80">
								{userPart}
							</span>
							<span className="text-snow/75 font-bold">@</span>
							<span className="text-cerulean-600">
								{hostPart}
							</span>
							<span className="text-snow/75">:{command}</span>
						</p>
					);
				}
				if (item.startsWith("ws~")) {
					return (
						<pre
							key={index}
							className="text-snow/75 text-[0.45rem] font-bold sm:text-sm whitespace-pre">
							{item.split("~")[1]}
						</pre>
					);
				}
				return (
					<p
						key={index}
						className="text-snow/75 text-xs sm:text-sm">
						{parseLine(item)}
					</p>
				);
			})}
		</>
	);
};

export default TerminalOutput;
