import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AskClass = () => {
    // Initialize state variable for the selected class
    const [selectedClass, setSelectedClass] = useState("");
    
    // The useNavigate hook must be used inside a component that is a child of a <Router>.
    const navigate = useNavigate();

    // Inside handleContinue
    const handleContinue = () => {
        localStorage.setItem("onboard_class", selectedClass);
        navigate("/onboarding/subjects");
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
            style={{
                fontFamily: 'Manrope, "Noto Sans", sans-serif',
                ["--select-button-svg"]:
                    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(71,86,158)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
            }}
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

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0d0f1c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            What class are you in?
                        </h2>

                        {/* Dropdown */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <select 
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 bg-[image:--select-button-svg] placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
                                    value={selectedClass} // Bind value to state
                                    onChange={(e) => setSelectedClass(e.target.value)} // Update state on change
                                >
                                    <option value="">Select Class</option>
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                </select>
                            </label>
                        </div>

                        {/* Button */}
                        <div className="flex px-4 py-3 justify-center">
                            <button 
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]" 
                                // onClick={() => navigate("/ask-subjects")}
                                onClick={handleContinue}
                            >
                                <span className="truncate">Continue</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskClass;  