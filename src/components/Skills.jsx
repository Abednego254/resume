import React from "react";

const skills = [
    { name: "Java SE & EE", level: "w-[85%]" },
    { name: "Spring Boot / React", level: "w-[75%]" },
    { name: "DevOps (Docker/Jenkins)", level: "w-[70%]" },
    { name: "GitHub (CLI & Webhooks)", level: "w-[80%]" },
    { name: "Payment System Integration", level: "w-[75%]" },
    { name: "Pension & Accounting Systems", level: "w-[65%]" },
    { name: "Python / Flask", level: "w-[70%]" },
];

function Skills() {
    return (
        <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-display border-b border-gray-900 pb-2 mb-4">
                Skills
            </h2>
            <div className="space-y-3">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between items-baseline">
                            <span className="text-[11.5px] font-medium text-gray-300">{skill.name}</span>
                        </div>
                        <div className="w-full bg-gray-900/60 border border-gray-800/40 rounded-full h-1.5 mt-1 overflow-hidden">
                            <div className={`bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full ${skill.level}`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
