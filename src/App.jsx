import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terminal from "./pages/Terminal";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Terminal />}>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/*"
						element={<PageNotFound />}></Route>
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
