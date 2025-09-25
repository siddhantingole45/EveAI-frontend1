import React, { useState } from "react";
// Import React Router components for routing
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const RegenerateSchedule = () => {
    // State for the study-hobby balance slider
    const [balance, setBalance] = useState(50);
    // State for the time preference radio buttons
    const [timePreference, setTimePreference] = useState('');
    // State for the auto-adjust toggle
    const [autoAdjust, setAutoAdjust] = useState(false);

    const navigate = useNavigate();

    // Function to handle the slider click
    const handleSliderClick = (e) => {
        const slider = e.currentTarget;
        const rect = slider.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = (clickX / rect.width) * 100;
        setBalance(Math.round(percentage));
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0f111a] cursor-pointer" onClick={() => navigate('/dashboard')}>
                        <div className="size-4">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-[#0f111a] text-lg font-bold leading-tight tracking-[-0.015em]">
                            EveAI
                        </h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#607afb] text-[#f8f9fc] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <div className="text-amber-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20px"
                                    height="20px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                                </svg>
                            </div>
                        </button>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" onClick={() => navigate('/settings')}
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSmNMvcNyGbqXnlfJKdAc85df3epq_3XvlQIdU8X-XEluCW2FncamJ7CynrVR5nO2Z8uneIMGjDS55CLuJ6Q5-xxUgNe61DV8_0yTbECtI1HJwPKiu-Rp0JnemtyQ_OYC9BVlu5OrnL3rHxSD1pv2uySnNy12XUUH7fZ_rUT3hiDGmDX3xSvpTM6Jh9mvdsZHbKRgUoOjUJpSU10n6hodxXKct2K-z7iP1oLMgUzP36o14Hu0Wh4uSkoQd6nejDPh7qMUymmqpBkGy")',
                            }}
                        />
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0f111a] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            Regenerate Schedule
                        </h2>

                        {/* Slider Section */}
                        <div className="@container">
                            <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
                                <div className="flex w-full shrink-[3] items-center justify-between">
                                    <p className="text-[#0f111a] text-base font-medium leading-normal">
                                        Study-Hobby Balance
                                    </p>
                                    <p className="text-[#0f111a] text-sm font-normal leading-normal @[480px]:hidden">
                                        {balance}
                                    </p>
                                </div>
                                <div className="flex h-4 w-full items-center gap-4">
                                    <div
                                        className="flex h-1 flex-1 rounded-sm bg-[#d2d6e4] cursor-pointer"
                                        onClick={handleSliderClick}
                                    >
                                        <div
                                            className="h-full rounded-sm bg-[#607afb]"
                                            style={{ width: `${balance}%` }}
                                        />
                                        <div className="relative">
                                            <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]" />
                                        </div>
                                    </div>
                                    <p className="text-[#0f111a] text-sm font-normal leading-normal hidden @[480px]:block">
                                        {balance}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Time Selection */}
                        <div className="flex flex-wrap gap-3 p-4">
                            <label className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 relative cursor-pointer transition-colors duration-300 ${timePreference === 'Morning' ? 'border-[#607afb] text-[#f8f9fc] bg-[#607afb]' : 'border-[#d2d6e4] text-[#0f111a] bg-white'}`}>
                                Morning
                                <input
                                    type="radio"
                                    className="invisible absolute"
                                    name="timePreference"
                                    value="Morning"
                                    checked={timePreference === 'Morning'}
                                    onChange={(e) => setTimePreference(e.target.value)}
                                />
                            </label>
                            <label className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border px-4 h-11 relative cursor-pointer transition-colors duration-300 ${timePreference === 'Evening' ? 'border-[#607afb] text-[#f8f9fc] bg-[#607afb]' : 'border-[#d2d6e4] text-[#0f111a] bg-white'}`}>
                                Evening
                                <input
                                    type="radio"
                                    className="invisible absolute"
                                    name="timePreference"
                                    value="Evening"
                                    checked={timePreference === 'Evening'}
                                    onChange={(e) => setTimePreference(e.target.value)}
                                />
                            </label>
                        </div>

                        {/* Toggle Switch */}
                        <div className="flex items-center gap-4 bg-[#f9f9fb] px-4 min-h-14 justify-between">
                            <p className="text-[#0f111a] text-base font-normal leading-normal flex-1 truncate">
                                Auto-adjust based on past performance
                            </p>
                            <div className="shrink-0">
                                <label className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 transition-all duration-300 ${autoAdjust ? 'justify-end bg-[#607afb]' : 'bg-[#e9eaf2]'}`}>
                                    <div
                                        className="h-full w-[27px] rounded-full bg-white transition-all duration-300"
                                        style={{
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px",
                                        }}
                                    />
                                    <input
                                        type="checkbox"
                                        className="invisible absolute"
                                        checked={autoAdjust}
                                        onChange={() => setAutoAdjust(!autoAdjust)}
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex px-4 py-3 justify-center">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate("/schedule")}>
                                <span className="truncate text-amber-50">Generate New Plan</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegenerateSchedule;  
