import React from "react";

function Experience() {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-100 uppercase tracking-wider font-display border-b border-gray-900 pb-2 mb-4">
                Professional Experience
            </h2>
            <div className="space-y-6">
                {/* Software Development Intern */}
                <div className="relative pl-4 border-l border-gray-800">
                    <div className="absolute w-2.5 h-2.5 bg-blue-500 rounded-full -left-[5.5px] top-1.5 shadow-[0_0_8px_#3b82f6]"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="font-semibold text-gray-200 text-sm">
                            Software Development Intern
                        </h3>
                        <span className="text-xs font-semibold text-blue-400 mt-1 sm:mt-0">
                            Jan 2026 – Present
                        </span>
                    </div>
                    <p className="text-xs text-purple-400 font-medium">
                        Systech Limited (First Phase Completed)
                    </p>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1.5 list-none">
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-blue-500">
                            Gained hands-on experience in <strong>Java SE, Java EE, Accounting, Pension Administration</strong>, and <strong>DevOps Practices</strong>.
                        </li>
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-blue-500">
                            Designed and developed <strong>VitalTrack</strong>, a full-stack Java EE enterprise application, applying robust software development concepts and patterns.
                        </li>
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-blue-500">
                            Automated integration and deployment pipelines using <strong>Docker, Jenkins, GitHub CLI, and GitHub Webhooks</strong>.
                        </li>
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-blue-500">
                            Collaborated with mentors and peers in an Agile environment to build scalable corporate systems.
                        </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {["Java EE", "Docker", "Jenkins", "GitHub CLI", "GitHub Webhooks", "Pension Systems"].map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-gray-900 border border-gray-800 rounded text-gray-400 font-medium">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Software Development Attachee */}
                <div className="relative pl-4 border-l border-gray-800">
                    <div className="absolute w-2.5 h-2.5 bg-purple-500 rounded-full -left-[5.5px] top-1.5 shadow-[0_0_8px_#a855f7]"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                        <h3 className="font-semibold text-gray-200 text-sm">
                            Software Development Attachee
                        </h3>
                        <span className="text-xs font-semibold text-purple-400 mt-1 sm:mt-0">
                            May – Aug 2025
                        </span>
                    </div>
                    <p className="text-xs text-blue-400 font-medium">
                        Systech Limited
                    </p>
                    <ul className="text-xs text-gray-400 mt-2 space-y-1.5 list-none">
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-purple-500">
                            Collaborated with the software development team to design and develop <strong>web applications</strong> using <strong>Java, Spring Boot, and React</strong>.
                        </li>
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-purple-500">
                            Assisted in integrating <strong>REST APIs</strong>, implementing <strong>authentication systems</strong>, and managing <strong>MySQL databases</strong>.
                        </li>
                        <li className="relative pl-3.5 before:content-['•'] before:absolute before:left-0 before:text-purple-500">
                            Participated in debugging, system enhancement, and feature testing to ensure optimal performance and maintainability.
                        </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {["Spring Boot", "React", "MySQL", "REST APIs", "Git"].map(t => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-gray-900 border border-gray-800 rounded text-gray-400 font-medium">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
