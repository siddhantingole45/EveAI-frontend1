import React from "react";
import { useNavigate } from "react-router-dom";

const SingleNote = () => {
    // Note data to be displayed. In a real application, this would come from a database or API.
        const navigate = useNavigate();
     
    const noteData = {
        subject: "Math",
        title: "Calculus Notes",
        desc: "Important concepts and formulas",
        content:
            "lorem ipsum dolor sit amet lorem3456789 lorem ipsum dolor sit amet lorem3456789lorem ipsum dolor sit amet lorem3456789lorem ipsum dolor sit amet lorem3456789lorem ipsum dolor sit amet lorem3456789.  ",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBObeL7dgNKdm3v9DhA36rF_NIh7GWeIHRnKWqnUt__CMd3pUm__-QBVq5ccM2sbLRvA0HL03Ok6fyEKDSMb6FHaOiSZrDl-Ej3YW2NnJXMu47aY2d2EXdhsR1jk4NUFy7GiRibZx24Zqcjgyvxu8lhtWIh7DH-CLyJu4YAHr7Cm72HJbEbZ7lBid36ips9lc7UxOpf2PlwGYkjFWjP21FUoyZCgV35QZmuwZ_LEvaXxaLHiNXIJqYUoqSF8PTXTudvbOvfs9bB9xJO",
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0f111a] cursor-pointer" onClick={() => navigate("/dashboard")}>
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSmNMvcNyGbqXnlfJKdAc85df3epq_3XvlQIdU8X-XEluCW2FncamJ7CynrVR5nO2Z8uneIMGjDS55CLuJ6Q5-xxUgNe61DV8_0yTbECtI1HJwPKiu-Rp0JnemtyQ_OYC9BVlu5OrnL3rHxSD1pv2uySnNy12XUUH7fZ_rUT3hiDGmDX3xSvpTM6Jh9mvdsZHbKRgUoOjUJpSU10n6hodxXKct2K-z7iP1oLMgUzP36o14Hu0Wh4uSkoQd6nejDPh7qMUymmqpBkGy")',
                            }}
                        />
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0f111a] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            My Note
                        </h2>
                        <div className="flex flex-row ">
                            {/* Note Image */}
                            <div className="mb-4 relative w-2/10">
                                <img
                                    src={noteData.img}
                                    alt="Note related illustration"
                                    className="w-40 h-40 object-cover rounded-lg shadow-md"
                                />

                            </div>


                            {/* Title */}
                            <div className="">

                                <div className="flex max-w-[480px] flex-wrap items-center gap-4 px-4 py-1">
                                    <h1 className="text-[#0f111a] text-2xl font-bold leading-tight">
                                        {noteData.title}
                                    </h1>
                                </div>

                                {/* Subject Tag */}


                                <div className="flex max-w-[480px] flex-wrap items-center gap-4 px-4 py-1">
                                    <span className=" bg-[#607afb] text-white text-xs font-bold uppercase px-2 py-1 rounded-full">
                                        {noteData.subject}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="flex max-w-[480px] flex-wrap items-center gap-4 px-4 py-1">
                                    <p className="text-[#47569e] text-base font-medium leading-normal">
                                        {noteData.desc}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="flex w-full flex-wrap gap-4 px-4 py-3">
                                    <p className="text-[#0f111a] text-base font-normal leading-relaxed">
                                        {noteData.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNote;
