import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Header() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-gray-900">ABEDNEGO KAUME</h1>

            <div className="mt-3 space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    805, NYAHURURU, 20300 (KE)
                </p>

                <p className="flex items-center gap-2">
                    <FaEnvelope className="text-blue-600" />
                    abednegokaume@gmail.com
                </p>

                <p className="flex items-center gap-2">
                    <FaPhone className="text-blue-600" />
                    0742600965
                </p>
            </div>
        </div>
    );
}

export default Header;
