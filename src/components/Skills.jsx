import React from "react";

const skills = [
    { name: "JAVA", level: "w-5/6" },
    { name: "REACT", level: "w-4/6" },
    { name: "SPRINGBOOT", level: "w-4/6" },
    { name: "JAVASCRIPT", level: "w-3/6" },
    { name: "PAYMENTS INTEGRATION", level: "w-3/6" },
    { name: "HTML", level: "w-6/6" },
];

function Skills() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                    <p>{skill.name}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-1">
                        <div className={`bg-blue-400 h-2.5 rounded-full ${skill.level}`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
