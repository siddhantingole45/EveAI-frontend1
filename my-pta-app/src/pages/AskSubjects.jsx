import React, { useState } from "react";
// Import React Router components for routing
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// The original AskSubjects component, now placed inside the main App component.
const AskSubjects = () => {
    // Initialize state variable for the selected subjects
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const subjects = ["Math", "Science", "History", "English", "Geography"];

    // The useNavigate hook must be used inside a component that is a child of a <Router>.
    const navigate = useNavigate();

    // Function to handle clicking on a subject button
    const handleSubjectClick = (subject) => {
        // Check if the subject is already in the selectedSubjects array
        if (selectedSubjects.includes(subject)) {
            // If it is, remove it (deselect)
            setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
        } else {
            // If it's not, add it (select)
            setSelectedSubjects([...selectedSubjects, subject]);
        }
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0d0f1c]">
                        <div className="size-4">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
                            EveAI
                        </h2>
                    </div>

                    <div className="flex flex-1 justify-end gap-8">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCipc7PX_fch33ls3YzdJ8NZ9Ipi_Z1ddDf4t14C3qCpRoeDKjnBXn5YZUZSDxl17z4rULAtF4YmdQu8XPgHuPrkWFTJUbf7Bcr8aGKMGVuQa8fj65gkTp94yUUcE2wCpzGSRW1hH1fGXdndvVXOFLg_NBmU3TS7vYBsDO5O7wlLOCp-4e48-4E3C4taTCu5voe_CwOYVvLr2CumFxC20_Oi1OME2rWxYbWBe--zuZI5ofkfaGcUJPWyRqrfUTgXU-KbFJCOa6whAVV')",
                            }}
                        ></div>
                    </div>
                </header>

                {/* Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0d0f1c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            What subjects do you need help with?
                        </h2>

                        {/* Subject options */}
                        <div className="flex gap-3 p-3 flex-wrap pr-4 justify-between">
                            {subjects.map(
                                (subject) => (
                                    <button
                                        key={subject}
                                        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 cursor-pointer ${
                                            selectedSubjects.includes(subject)
                                                ? 'bg-[#607afb] text-[#f8f9fc]'
                                                : 'bg-[#e6e9f4] text-[#0d0f1c]'
                                        }`}
                                        onClick={() => handleSubjectClick(subject)}
                                    >
                                        <p className="text-sm font-medium leading-normal">{subject}</p>
                                    </button>
                                )
                            )}
                        </div>

                        {/* Button */}
                        <div className="flex px-4 py-3 justify-center">
                            <button 
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]" 
                                onClick={() => navigate("/personalize")}
                            >
                                <span className="truncate">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskSubjects;
