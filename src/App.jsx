import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProfileImage from "./components/ProfileImage";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

function App() {
    return (
        <div className="min-h-screen bg-[#030712] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-between">
            {/* Ambient background glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl w-full mx-auto glass-panel rounded-3xl border border-gray-900 overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-10">
                {/* Left Sidebar */}
                <div className="w-full md:w-1/3 bg-gray-950/60 p-8 border-r border-gray-900/60 flex flex-col gap-8">
                    <ProfileImage />
                    <Contact />
                    <Skills />
                    <Certifications />
                </div>

                {/* Right Main Content */}
                <div className="w-full md:w-2/3 p-8 sm:p-10 flex flex-col gap-8">
                    <Header />
                    <Summary />
                    <Experience />
                    <Education />
                </div>
            </div>

            {/* Floating Action Controls */}
            <div className="w-full text-center mt-12 relative z-10">
                <a
                    href="https://abed-cv.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] transition-all duration-300"
                >
                    <span>📄 View Interactive Digital CV</span>
                    <span className="text-xs opacity-75">↗</span>
                </a>
            </div>
        </div>
    );
}

export default App;
