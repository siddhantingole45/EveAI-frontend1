import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const MyNotes = () => {
    const navigate = useNavigate();

    const notes = [
        {
            subject: "Math",
            title: "Calculus Notes",
            desc: "Important concepts and formulas",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBObeL7dgNKdm3v9DhA36rF_NIh7GWeIHRnKWqnUt__CMd3pUm__-QBVq5ccM2sbLRvA0HL03Ok6fyEKDSMb6FHaOiSZrDl-Ej3YW2NnJXMu47aY2d2EXdhsR1jk4NUFy7GiRibZx24Zqcjgyvxu8lhtWIh7DH-CLyJu4YAHr7Cm72HJbEbZ7lBid36ips9lc7UxOpf2PlwGYkjFWjP21FUoyZCgV35QZmuwZ_LEvaXxaLHiNXIJqYUoqSF8PTXTudvbOvfs9bB9xJO",
        },
        {
            subject: "Science",
            title: "Physics Notes",
            desc: "Key principles and experiments",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhgCKWEx3nH9frmrcRmY1QgJkCeWHqzEPUxxsT5nR8xbi4vF-S5QwMwWfsOWrE_OYerb02f-Ec-ffSbv0EmSwIzvmS_58KVnKDcZCd2dypr8VKlHYmW56Jrbgp6Nald9eYazfoTDtzJTYCs3dWflC4mSTVkBHEE_QHoQ5zTf3tRGh_DUghNV2gWbeU6hWMO1Xdr7FvhHQogUlpK03tvLxq1pT6kbAVdbmu2bd8lC2kAIWYdX-gzGrQdYWHhmbmIzYrx4_Ope5AoH",
        },
        {
            subject: "History",
            title: "World History Notes",
            desc: "Significant events and figures",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLcGzjNWKZMn6_bp6dRRKCNgiPAlaBMcy6M7BtkC3hbN1MJT34yomUwfWfZa2zvq7M_vtpxHvNbdPE7fd90hOuV6UPpFaClL2FWTH3wtASi4oJnWfVwJHDImRQOl4ZnplMnKB-47WcNSa4_38VoQnB32TCjgxIA24D7hxO256hvZYF_1flcuuGcLDrqZMLFvO2byzDSPIVNP2Rmj23-6N5IjL_DR48nkEPqSdRhyaZXRdYAYgC4xzBsDwv0SbYSxz",
        },
        {
            subject: "Math",
            title: "Algebra Notes",
            desc: "Linear equations and functions",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBObeL7dgNKdm3v9DhA36rF_NIh7GWeIHRnKWqnUt__CMd3pUm__-QBVq5ccM2sbLRvA0HL03Ok6fyEKDSMb6FHaOiSZrDl-Ej3YW2NnJXMu47aY2d2EXdhsR1jk4NUFy7GiRibZx24Zqcjgyvxu8lhtWIh7DH-CLyJu4YAHr7Cm72HJbEbZ7lBid36ips9lc7UxOpf2PlwGYkjFWjP21FUoyZCgV35QZmuwZ_LEvaXxaLHiNXIJqYUoqSF8PTXTudvbOvfs9bB9xJO",
        },
        {
            subject: "Science",
            title: "Biology Notes",
            desc: "Cell structures and genetics",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhgCKWEx3nH9frmrcRmY1QgJkCeWHqzEPUxxsT5nR8xbi4vF-S5QwMwWfsOWrE_OYerb02f-Ec-ffSbv0EmSwIzvmS_58KVnKDcZCd2dypr8VKlHYmW56Jrbgp6Nald9eYazfoTDtzJTYCs3dWflC4mSTVkBHEE_QHoQ5zTf3tRGh_DUghNV2gWbeU6hWMO1Xdr7FvhHQogUlpK03tvLxq1pT6kbAVdbmu2bd8lC2kAIWYdX-gzGrQdYWHhmbmIzYrx4_Ope5AoH",
        },
        {
            subject: "History",
            title: "Ancient Civilizations",
            desc: "A look into early societies",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLcGzjNWKZMn6_bp6dRRKCNgiPAlaBMcy6M7BtkC3hbN1MJT34yomUwfWfZa2zvq7M_vtpxHvNbdPE7fd90hOuV6UPpFaClL2FWTH3wtASi4oJnWfVwJHDImRQOl4ZnplMnKB-47WcNSa4_38VoQnB32TCjgxIA24D7hxO256hvZYF_1flcuuGcLDrqZMLFvO2byzDSPIVNP2Rmj23-6N5IjL_DR48nkEPqSdRhyaZXRdYAYgC4xzBsDwv0SbYSxz",
        },
    ];

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-[#0d0f1c] cursor-pointer" onClick={() => navigate("/dashboard")}>
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
                        <div className="flex items-center gap-9">
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">
                                Library
                            </a>
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">
                                Resources
                            </a>
                            <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">
                                Community
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        {/* Search */}
                        <label className="flex flex-col min-w-40 !h-10 max-w-64">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div className="text-[#47579e] flex border-none bg-[#e6e9f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                    </svg>
                                </div>
                                <input
                                    placeholder="Search"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-[#e6e9f4] focus:border-none h-full placeholder:text-[#47579e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                />
                            </div>
                        </label>

                        {/* Notification */}
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <div className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                                </svg>
                            </div>
                        </button>

                        {/* Profile Image */}
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" onClick={() => navigate("/settings")}
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkC2FJhVK-2zFlBvujMa-uBHSRKQOy4zdBHlMTBzC7B0jlZhja-8KuzJtaH7PNiyF6lT-J7KQ_wHcwlWEl9kVWgbY_tdqH-7itno0fKArA6N0ZgCW8KNQgyLsED4UxL-sN6kw4ejFzmX65lrXqSmcoqD3vMkUgFDe20RmzU3FUu5oKFw0O8ihxtdLfDjXq2hGF2GV6jBLuMrjNGStbO-jpDPtD2M9Hm2SagUyl8lVuz6oEQqnLRSDhDifyEJ11OyMkLSRU32WaKKc3")',
                            }}
                        ></div>
                    </div>
                </header>

                {/* Main Section */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Title + Add Note */}
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight min-w-72">My Notes</p>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-medium leading-normal " onClick={() => navigate("/notes/add-note")}>
                                <span className="truncate ">Add Note</span>
                            </button>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-3 p-3 flex-wrap pr-4 text-white">
                            {["Subject", "Date", "Tags"].map((filter) => (
                                <button
                                    key={filter}
                                    className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-2 bg-[#e6e9f4] text-[#47579e]"
                                >
                                    <p className="text-sm font-medium leading-normal">{filter}</p>
                                    <div className="text-[#47579e]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                        </svg>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Notes */}
                        <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            All Notes
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {notes.map((note, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col rounded-xl p-4 bg-white shadow-md cursor-pointer transition-transform hover:scale-105"
                                    onClick={() => navigate("/notes/single-note")}
                                >
                                    <div className="relative mb-4 overflow-hidden rounded-lg w-full h-32">
                                        <img
                                            src={note.img}
                                            alt={note.title}
                                            className="object-cover w-full h-full"
                                        />
                                        <span className="absolute bottom-1 left-1 bg-[#607afb] text-white text-xs font-bold uppercase px-2 py-1 rounded-full">
                                            {note.subject}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#0d0f1c] mb-1">{note.title}</h4>
                                    <p className="text-sm text-[#47579e]">{note.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNotes;
