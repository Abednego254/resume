import React from "react";

function Contact() {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Contact & Links</h2>
            <ul className="text-gray-700 space-y-1">
                <li><strong>Phone:</strong> 0742600965</li>
                <li><strong>Email:</strong> abednegokaume@gmail.com</li>
                <li>
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href="https://www.linkedin.com/in/kaume-abednego-937469362"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                    >
                        Kaume Abednego
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/Abednego254"
                        target="_blank"
                        className="text-blue-600 hover:underline"
                    >
                        Abednego254
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
