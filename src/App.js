import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Terminal from "./components/Terminal";
import Footer from "./components/Footer";

import landscape from "./assets/landscape.jpg";

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-theme-dark">
                <div
                    className="absolute inset-0 bg-cover bg-fixed filter blur-sm"
                    style={{ backgroundImage: `url(${landscape})` }}
                />
                <div className="relative h-screen bg-transparent">
                    <Header />
                    <Sidebar />
                    <div className="absolute top-0 sm:mt-0 mt-[1rem] sm:h-screen h-[100vh - 1rem] w-full">
                        <Terminal />
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
