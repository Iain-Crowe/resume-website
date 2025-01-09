import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const mockStackTrace = `Error: PageNotFoundException
    at renderPage (index.js:42:13)
    at renderComponent (react-dom.js:98:25)
    at commitRootImpl (react-dom.js:202:15)
    at commitRoot (react-dom.js:199:23)
    at performSyncWorkOnRoot (react-dom.js:214:17)
    at scheduleUpdateOnFiber (react-dom.js:173:12)
    at dispatchAction (react-dom.js:105:15)
    at useNavigate (react-router.js:85:9)
    at PageNotFound (PageNotFound.jsx:10:7)`;

const PageNotFound = () => {
	const navigate = useNavigate();

	return ReactDOM.createPortal(
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-night text-snow border border-snow rounded-lg shadow-lg crt-filter max-w-fit max-h-fit">
				<div className="flex justify-between bg-night-600 items-center border-b border-snow py-2 px-4 rounded-t">
					<span className="font-mono text-sm sm:text-base text-red-500/60 font-bold">
						ERROR
					</span>
					<button
						className="w-3 h-3 bg-red-500 rounded-full"
						onClick={() => navigate("/")}></button>
				</div>
				<p className="text-center pt-4">
					<span className="font-2xl sm:text-3xl text-snow font-bold">
						404 -{" "}
					</span>
					<span className="font-2xl sm:text-3xl text-snow/80">
						Page Not Found
					</span>
				</p>
				<div className="flex justify-center py-4 mx-4 sm:mx-6 my-4 border rounded-lg">
					<p className="text-xs sm:text-sm text-snow/80 sm:text-snow/60 px-6 text-left font-mono whitespace-pre">
						{mockStackTrace}
					</p>
				</div>
				<p className="text-xs sm:text-sm text-snow/60 pb-4 px-6 text-center">
					Sorry, but this page does not exist, please return back to
					the{" "}
					<button
						className="text-cerulean bg-transparent hover:underline focus:outline-none"
						onClick={() => navigate("/")}>
						home page
					</button>
					.
				</p>
			</div>
		</div>,
		document.body
	);
};

export default PageNotFound;
