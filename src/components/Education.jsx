import React from "react";

function Education() {
    return (
        <div>
            <h2 className="text-lg font-bold text-gray-100 uppercase tracking-wider font-display border-b border-gray-900 pb-2 mb-4">
                Education
            </h2>
            <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <div>
                        <h3 className="font-semibold text-gray-200 text-sm">
                            Bachelor of Science in Computer Science
                        </h3>
                        <p className="text-xs text-gray-400">Laikipia University</p>
                    </div>
                    <span className="text-xs font-semibold text-blue-400 mt-1 sm:mt-0">
                        Expected Graduation: Dec 2026 (Final Year)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Education;