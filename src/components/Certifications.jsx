import React from "react";

function Certifications() {
    return (
        <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-display border-b border-gray-900 pb-2 mb-4">
                Certifications
            </h2>
            <ul className="space-y-4 text-xs text-gray-400">
                <li>
                    <strong className="text-gray-200 block font-semibold">Oracle Certified Associate (OCA)</strong>
                    <span className="text-gray-500 block text-[10px]">Java SE 8 Programmer (1Z0-808)</span>
                    <a
                        href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A14E275EF626907248B458D3DE95E9C792F68BA5023EE2BD8F25D4F1192E2B3C"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 hover:underline text-[10px] inline-flex items-center gap-0.5 mt-1"
                    >
                        View Badge ↗
                    </a>
                </li>
                <li>
                    <strong className="text-gray-200 block font-semibold">Huawei Certified ICT Associate</strong>
                    <span className="text-gray-500 block text-[10px]">Laikipia University ICT Course</span>
                </li>
            </ul>
        </div>
    );
}

export default Certifications;
