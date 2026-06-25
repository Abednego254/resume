import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
    return (
        <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-display border-b border-gray-900 pb-2 mb-4">
                Links & Contact
            </h2>
            <ul className="space-y-2.5 text-xs">
                <li className="flex items-center gap-2">
                    <FaPhone className="text-gray-500 w-3.5 h-3.5" />
                    <span className="text-gray-400 font-medium">0742600965</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-500 w-3.5 h-3.5" />
                    <a href="mailto:abednegokaume@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                        abednegokaume@gmail.com
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <FaLinkedin className="text-gray-500 w-3.5 h-3.5" />
                    <a
                        href="https://www.linkedin.com/in/kaume-abednego-937469362"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        linkedin.com/in/kaume-abednego
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <FaGithub className="text-gray-500 w-3.5 h-3.5" />
                    <a
                        href="https://github.com/Abednego254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        github.com/Abednego254
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
