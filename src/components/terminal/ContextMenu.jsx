import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const ContextMenu = ({ isOpen, onClose, onNavigate }) => {
	const menuItems = ["Home", "About", "Projects", "Contact"];
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleKeyDown = (e) => {
		if (!isOpen) return;

		if (e.key === "ArrowDown") {
			setSelectedIndex((prev) => (prev + 1) % menuItems.length);
		} else if (e.key === "ArrowUp") {
			setSelectedIndex(
				(prev) => (prev - 1 + menuItems.length) % menuItems.length
			);
		} else if (e.key === "Enter") {
			onNavigate(menuItems[selectedIndex].toLowerCase());
			onClose();
		} else if (e.key === "Escape") {
			onClose();
		}
	};

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isOpen, selectedIndex]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-night text-snow border border-snow rounded-lg shadow-lg w-1/3">
				<div className="flex justify-between bg-night-600 items-center border-b border-snow py-2 px-4 rounded-t">
					<span className="font-mono text-lg">Navigation Menu</span>
					<button
						className="w-3 h-3 bg-red-500 rounded-full"
						onClick={onClose}></button>
				</div>
				<div className="mt-4 space-y-2 p-4">
					{menuItems.map((item, index) => (
						<div
							key={item}
							className={`px-4 py-2 cursor-pointer rounded ${
								index === selectedIndex
									? "bg-shamrock_green text-night"
									: "hover:bg-night-900 hover:text-night"
							}`}
							onClick={() => {
								onNavigate(item.toLowerCase());
								onClose();
							}}>
							{item}
						</div>
					))}
				</div>
				<div className="bg-night-600/50 text-center py-2 m-4 text-sm text-snow/60 rounded">
					Use <span className="font-bold">'Arrow Keys'</span> to
					navigate,{" "}
					<span className="font-bold text-shamrock_green-700/60">
						'Enter'
					</span>{" "}
					to select, and{" "}
					<span className="font-bold text-red-400/60">'Esc'</span> to
					close the menu.
				</div>
			</div>
		</div>,
		document.body
	);
};

export default ContextMenu;
