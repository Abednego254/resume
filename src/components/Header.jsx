import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Header() {
    return (
        <div className="border-b border-gray-900 pb-6">
            <h1 className="text-4xl font-extrabold tracking-tight font-display gradient-text">
                ABEDNEGO KAUME
            </h1>
            <p className="text-blue-400 font-semibold text-sm mt-2 uppercase tracking-wider font-display">
                Oracle Certified Associate (OCA) Java SE 8 Programmer & Software Developer
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-400">
                <p className="flex items-center gap-1.5 bg-gray-900/50 border border-gray-800/80 px-3 py-1.5 rounded-lg">
                    <FaMapMarkerAlt className="text-blue-400" />
                    <span>Roysambu, Nairobi, Kenya</span>
                </p>

                <p className="flex items-center gap-1.5 bg-gray-900/50 border border-gray-800/80 px-3 py-1.5 rounded-lg">
                    <FaEnvelope className="text-purple-400" />
                    <span>abednegokaume@gmail.com</span>
                </p>

                <p className="flex items-center gap-1.5 bg-gray-900/50 border border-gray-800/80 px-3 py-1.5 rounded-lg">
                    <FaPhone className="text-pink-400" />
                    <span>+254 742 600 965</span>
                </p>
            </div>
        </div>
    );
}

export default Header;
