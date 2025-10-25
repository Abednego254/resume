import React from "react";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Projects from "./components/Experience";
import Skills from "./components/Skills";
import ProfileImage from "./components/ProfileImage";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
            {/* Resume content (two columns) */}
            <div className="flex flex-col md:flex-row flex-grow">
                {/* Left section */}
                <div className="w-full md:w-2/3 p-6 md:p-10">
                    <Header />
                    <Summary />
                    <Education />
                    <Projects />
                </div>

                {/* Right section */}
                <div className="w-full md:w-1/3 bg-gray-900 text-white p-6 md:p-10 flex flex-col">
                    <ProfileImage />
                    <Skills />
                    <Contact />
                </div>
            </div>

            {/* Download Resume Button - bottom of page */}
            <div className="w-full text-center py-8 bg-gray-200">
                <a
                    href="/Abednego-Resume.pdf"
                    download
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-200"
                >
                    📄 Download Resume (PDF)
                </a>
            </div>
        </div>
    );
}

export default App;
