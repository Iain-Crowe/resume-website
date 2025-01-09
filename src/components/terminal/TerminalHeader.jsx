import React from "react";

const TerminalHeader = ({ isMenuOpen, toggleMenu }) => (
	<div className="flex items-center justify-between bg-night-600 border-b border-snow px-4 py-2">
		<button
			className="px-2 text-snow hover:bg-shamrock_green hover:text-night transition-colors rounded font-mono text-base sm:text-lg focus:border-0 cursor-not-allowed"
			/*onClick={toggleMenu}*/
		>
			Menu
		</button>
		<div className="text-sm sm:text-base text-snow font-bold flex">
			guest@iaincrowe.com: ~
		</div>
		<div className="flex items-center space-x-2">
			<div className="w-3 h-3 bg-green-500 rounded-full"></div>
			<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
			<div className="w-3 h-3 bg-red-500 rounded-full"></div>
		</div>
	</div>
);

export default TerminalHeader;
