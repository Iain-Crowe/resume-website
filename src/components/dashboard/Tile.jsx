import React from "react";
import "./styles/tile.css";

const Tile = ({ x, y, width, height, title, children }) => {
	const gridStyles = {
		gridColumn: `${x + 1} / span ${width}`,
		gridRow: `${y + 1} / span ${height}`,
	};

	return (
		<div
			className="tile"
			style={gridStyles}>
			<div className="tile-header">{title}</div>
			<div className="tile-content text-xs sm:text-sm">{children}</div>
		</div>
	);
};

export default Tile;
