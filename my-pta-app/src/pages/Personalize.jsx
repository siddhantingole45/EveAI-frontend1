import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";

const Personalize = () => {
    // State to manage selected hobbies
    const [selectedHobbies, setSelectedHobbies] = useState([]);
    // State for the custom hobby input field
    const [customHobby, setCustomHobby] = useState("");
    
    // States for the time commitment sliders (in minutes)
    const [studyTime, setStudyTime] = useState(120);
    const [hobbyTime, setHobbyTime] = useState(60);
    const [breakTime, setBreakTime] = useState(30);

    const navigate = useNavigate();

    const handleComplete = async () => {
        const rawSubjects = JSON.parse(localStorage.getItem("onboard_subjects") || "[]");
        
        const payload = {
            subjects: rawSubjects.map(s => ({
                name: s,
                priority: 5,
                level: "beginner",
                topics: []
            })),
            hobbies: selectedHobbies.map(h => ({
                name: h,
                proficiency: "beginner"
            })),
            availability: {
                "Monday": [{ start: "09:00", end: "17:00" }], // Defaulting for now
                "Tuesday": [{ start: "09:00", end: "17:00" }]
            },
            preferences: {
                study_time: studyTime,
                hobby_time: hobbyTime,
                break_time: breakTime
            }
        };

        try {
            await apiClient.post("/user/onboard", payload);
            navigate("/dashboard");
        } catch {
            alert("Failed to save profile. Check console.");
        }
    };

    // List of predefined hobbies.
    const initialHobbies = [
        { name: "Reading", icon: "📚", isCustom: false },
        { name: "Writing", icon: "✍️", isCustom: false },
        { name: "Coding", icon: "💻", isCustom: false },
        { name: "Art", icon: "🎨", isCustom: false },
        { name: "Music", icon: "🎵", isCustom: false },
        { name: "Travel", icon: "✈️", isCustom: false },
        { name: "Cooking", icon: "🍳", isCustom: false },
        { name: "Gaming", icon: "🎮", isCustom: false },
        { name: "Sports", icon: "🏈", isCustom: false },
    ];
    // New state to hold all hobbies, including custom ones
    const [allHobbies, setAllHobbies] = useState(initialHobbies);
    
    // Function to handle adding or removing a hobby from the state
    const handleHobbyClick = (hobbyName) => {
        if (selectedHobbies.includes(hobbyName)) {
            setSelectedHobbies(selectedHobbies.filter(name => name !== hobbyName));
        } else {
            setSelectedHobbies([...selectedHobbies, hobbyName]);
        }
    };
    
    // Function to handle adding a custom hobby
    const handleAddCustomHobby = () => {
        if (customHobby.trim() !== "" && !allHobbies.some(h => h.name === customHobby.trim())) {
            // Add the new custom hobby to the allHobbies state
            const newHobby = { name: customHobby.trim(), icon: "💡", isCustom: true };
            setAllHobbies([...allHobbies, newHobby]);
            // Also select it by default
            setSelectedHobbies([...selectedHobbies, customHobby.trim()]);
            setCustomHobby("");
        }
    };

    // Function to handle deleting a custom hobby
    const handleDeleteHobby = (hobbyName) => {
        // Remove the hobby from both the main list and the selected list
        setAllHobbies(allHobbies.filter(h => h.name !== hobbyName));
        setSelectedHobbies(selectedHobbies.filter(name => name !== hobbyName));
    };

    // Function to handle slider value changes based on click position
    const handleSliderChange = (e, setTimeState, maxTime) => {
        const slider = e.currentTarget;
        const rect = slider.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = Math.round((clickX / rect.width) * maxTime);
        // Round to nearest 15 minutes for a smoother experience
        setTimeState(Math.round(newTime / 15) * 15);
    };

    // Function to format minutes to hours and minutes
    const formatTime = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
        if (hours > 0) return `${hours}h`;
        return `${minutes}m`;
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
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
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
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2SESxQrfjL1yt_apW8lKQiO8OVWpHFW5138lj8R9l72ZPTUPMCEj2V6bKI6ntltf6vORR_PpbnDXPdYntx8RRLWVWtK6nEVSie8lgZvVdnyY0ZEwvyJKUROu2bDloBqvMnTYxZx76y7iR9YE9vJQ_3YiDpx9VtsBuy-Oj4fs5lqiKVPqTXKytP12lOwFrrRr__HxdS9aVmFdSOwX0UvVgofZJvc8GJOrBO9riGA9hoStasRx91xO8rVpQjaTjEBQcVy5ZW0KzxeDE")',
                            }}
                        ></div>
                    </div>
                </header>

                {/* Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0d0f1c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            Personalize Your Learning Journey
                        </h2>
                        
                        {/* Select Hobbies */}
                        <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Select Your Hobbies
                        </h3>
                        <div className="flex gap-3 p-3 flex-wrap pr-4 justify-between">
                            {allHobbies.map((hobby, idx) => (
                                <div key={idx} className="relative">
                                    <button
                                        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-2 pr-4 cursor-pointer transition-colors duration-200 ${
                                            selectedHobbies.includes(hobby.name)
                                                ? 'bg-[#607afb] text-[#f8f9fc]'
                                                : 'bg-[#e6e9f4] text-[#0d0f1c]'
                                        }`}
                                        onClick={() => handleHobbyClick(hobby.name)}
                                    >
                                        <div className="text-[#0d0f1c] flex items-center justify-center">
                                            <span className="text-xl">{hobby.icon}</span>
                                        </div>
                                        <p className="text-sm font-medium leading-normal">{hobby.name}</p>
                                    </button>
                                    {hobby.isCustom && (
                                        <button
                                            className="absolute -top-2 -right-2 size-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs cursor-pointer"
                                            onClick={() => handleDeleteHobby(hobby.name)}
                                        >
                                            &times;
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                        
                        {/* Add Custom Hobby */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <div className="flex items-center">
                                    <input
                                        placeholder="Add a custom hobby"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
                                        value={customHobby}
                                        onChange={(e) => setCustomHobby(e.target.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === "Enter") handleAddCustomHobby();
                                        }}
                                    />
                                    <button
                                        onClick={handleAddCustomHobby}
                                        className="ml-2 flex-shrink-0 px-4 py-2 rounded-lg bg-[#607afb] text-[#f8f9fc] text-sm font-bold"
                                    >
                                        Add
                                    </button>
                                </div>
                            </label>
                        </div>

                        {/* Daily Time Commitment Sliders */}
                        <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Daily Time Commitment
                        </h3>

                        {/* Study Time */}
                        <div className="@container">
                            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
                                <div className="flex w-full shrink-[3] items-center justify-between">
                                    <p className="text-[#0d0f1c] text-base font-medium leading-normal">
                                        Study Time
                                    </p>
                                    <p className="text-[#0d0f1c] text-sm font-normal leading-normal @[480px]:hidden">
                                        {formatTime(studyTime)}
                                    </p>
                                </div>
                                <div className="flex h-4 w-full items-center gap-4">
                                    <div
                                        className="flex h-1 flex-1 rounded-sm bg-[#ced2e9] cursor-pointer"
                                        onClick={(e) => handleSliderChange(e, setStudyTime, 480)}
                                    >
                                        <div className="h-full rounded-sm bg-[#607afb]" style={{ width: `${(studyTime / 480) * 100}%` }}></div>
                                        <div className="relative">
                                            <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]"></div>
                                        </div>
                                    </div>
                                    <p className="text-[#0d0f1c] text-sm font-normal leading-normal hidden @[480px]:block">
                                        {formatTime(studyTime)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hobby Time */}
                        <div className="@container">
                            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
                                <div className="flex w-full shrink-[3] items-center justify-between">
                                    <p className="text-[#0d0f1c] text-base font-medium leading-normal">
                                        Hobby Time
                                    </p>
                                    <p className="text-[#0d0f1c] text-sm font-normal leading-normal @[480px]:hidden">
                                        {formatTime(hobbyTime)}
                                    </p>
                                </div>
                                <div className="flex h-4 w-full items-center gap-4">
                                    <div
                                        className="flex h-1 flex-1 rounded-sm bg-[#ced2e9] cursor-pointer"
                                        onClick={(e) => handleSliderChange(e, setHobbyTime, 480)}
                                    >
                                        <div className="h-full rounded-sm bg-[#607afb]" style={{ width: `${(hobbyTime / 480) * 100}%` }}></div>
                                        <div className="relative">
                                            <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]"></div>
                                        </div>
                                    </div>
                                    <p className="text-[#0d0f1c] text-sm font-normal leading-normal hidden @[480px]:block">
                                        {formatTime(hobbyTime)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Breaks */}
                        <div className="@container">
                            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
                                <div className="flex w-full shrink-[3] items-center justify-between">
                                    <p className="text-[#0d0f1c] text-base font-medium leading-normal">
                                        Breaks
                                    </p>
                                    <p className="text-[#0d0f1c] text-sm font-normal leading-normal @[480px]:hidden">
                                        {formatTime(breakTime)}
                                    </p>
                                </div>
                                <div className="flex h-4 w-full items-center gap-4">
                                    <div
                                        className="flex h-1 flex-1 rounded-sm bg-[#ced2e9] cursor-pointer"
                                        onClick={(e) => handleSliderChange(e, setBreakTime, 480)}
                                    >
                                        <div className="h-full rounded-sm bg-[#607afb]" style={{ width: `${(breakTime / 480) * 100}%` }}></div>
                                        <div className="relative">
                                            <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]"></div>
                                        </div>
                                    </div>
                                    <p className="text-[#0d0f1c] text-sm font-normal leading-normal hidden @[480px]:block">
                                        {formatTime(breakTime)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Complete Button */}
                        <div className="flex px-4 py-3 justify-center">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#607afb] text-[#f8f9fc] text-base font-bold leading-normal tracking-[0.015em]"
                                onClick={handleComplete}>
                                <span className="truncate">Complete Onboarding</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personalize;
