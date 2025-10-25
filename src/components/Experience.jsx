import React from "react";

function Experience() {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Work Experience</h2>
            <div className="space-y-6 text-gray-700">
                {/* Software Development Attachee */}
                <div>
                    <h3 className="font-medium text-lg text-gray-800">
                        Software Development Attachee
                    </h3>
                    <p className="text-sm text-gray-600">
                        <strong>May – July 2025</strong> | Software Development Department
                    </p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        <li>
                            Collaborated with the software development team to design and
                            develop <strong>web applications</strong> using{" "}
                            <strong>Java, Spring Boot, and React</strong>.
                        </li>
                        <li>
                            Assisted in integrating <strong>REST APIs</strong>, implementing{" "}
                            <strong>authentication systems</strong>, and managing{" "}
                            <strong>MySQL databases</strong>.
                        </li>
                        <li>
                            Participated in debugging, system enhancement, and feature testing
                            to ensure optimal performance and maintainability.
                        </li>
                        <li>
                            Gained practical exposure to <strong>Agile development</strong>,{" "}
                            <strong>Git version control</strong>, and <strong>code reviews</strong>.
                        </li>
                        <li>
                            Strengthened communication, teamwork, and problem-solving skills
                            through active participation in daily stand-ups and project
                            sprints.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
