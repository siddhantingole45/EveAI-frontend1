import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";

const AddNote = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [content, setContent] = useState("");
    const [subject, setSubject] = useState("");
    const [img, setImg] = useState(null);

    const navigate = useNavigate();

    const handleSave = async () => {
        if (!title || !content) return alert("Title and Content are required");
        
        try {
            const payload = {
                title,
                content,
                subject,
                tags: [],
                is_public: false
            };
            await apiClient.post("/notes/add", payload);
            navigate("/notes");
        } catch (err) {
            console.error(err);
            alert("Error saving note");
        }
    };

    // A list of subjects for the dropdown
    const subjects = ["Math", "Science", "History", "English", "Art"];

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
            style={{
                "--select-button-svg":
                    "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(86,97,143)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
                fontFamily: "Manrope, Noto Sans, sans-serif",
            }}
        >
            <div className="layout-container flex h-full grow flex-col">
                {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0f111a]">
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
                        <div className="flex items-center gap-9">
                            <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/dashboard">Dashboard</a>
                            <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">Subjects</a>
                            <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">Notes</a>
                            <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">Practice</a>
                            <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">Help</a>
                        </div>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAp0fjUTagXPqOKueu1J8mmYyPr58dzk4PF4eB37Uv0t4XJcEE0JEL2YrwqsKTUT8-goi0oH0L45Qw-4nFEx0_a-QewN6NzeJZmPxSXyFBH6XMz4ViOuWSICm2R57yHV4ZU8zhYRTQjeL3SrQceowzK547Yhk3CFTTMam6vQS6olDq0kiFDHPU1y0CeDagBzRWuzDUCy8y00_xXZVwWV2_MSnuMp_zd-Qh-tYyAL0XiINs7o0Jcshdy6317oKgwCxN5wleJg4-ARF5i")',
                            }}
                        ></div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col py-5  max-h-[960px] flex-1">
                        <h1 className="text-[#0f111a] text-[22px] pb-5 font-bold leading-tight tracking-[-0.015em] ">
                            Add Note
                        </h1>
                        <div className="flex flex-row flex-wrap  ">
                            {/* Title */}
                            <div className="flex w-1/3 flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col flex-1">
                                    <p className="text-[#0f111a] text-base font-medium leading-normal text-left pb-2">Title</p>
                                    <input
                                        placeholder="Enter title"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border border-[#d2d6e4] bg-[#e6e9f4] placeholder:text-[#47569e] focus:border-[#000000] h-14 p-[15px] text-base font-normal leading-normal"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </label>
                            </div>

                            {/* Description */}
                            <div className="flex w-2/3 flex-wrap items-end py-3 px-4">
                                <label className="flex flex-wrap flex-col flex-1">
                                    <p className="text-[#0f111a] text-base text-left font-medium leading-normal pb-2">Description</p>
                                    <input
                                        placeholder="Enter short description"
                                        className="form-input flex w-full flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border border-[#d2d6e4] bg-[#e6e9f4] focus:border-[#d2d6e4] h-14 placeholder:text-[#56618f] p-[15px] text-base font-normal leading-normal"
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                    />
                                </label>
                            </div>

                            {/* Content */}
                            <div className="flex w-full flex-wrap items-end gap-4 px-4 py-3 ">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#0f111a] text-base text-left font-medium leading-normal pb-2">
                                        Content
                                    </p>
                                    <input
                                        placeholder="Start writing your note here..."
                                        className="form-input flex w-full  flex-1 resize-none rounded-xl 
                                                 text-[#0f111a] focus:outline-0 focus:ring-0 
                                                border border-[#d2d6e4] bg-[#e6e9f4] focus:border-[#d2d6e4] 
                                                 placeholder:text-[#56618f] p-[15px] text-base font-normal leading-normal h-[100]"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </label>
                            </div>

                            {/* Image file input */}
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#0f111a] text-base font-medium leading-normal text-left pb-2">
                                        Image
                                    </p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-input flex w-full min-w-0 flex-1 overflow-hidden rounded-xl 
                 text-[#0f111a] focus:outline-0 focus:ring-0 
                 border border-[#d2d6e4] bg-[#e6e9f4] focus:border-[#d2d6e4] 
                 h-14 placeholder:text-[#56618f] p-[10px] text-base font-normal leading-normal"
                                        onChange={(e) => {
                                            if (e.target.files[0]) {
                                                setImg(e.target.files[0]);
                                            }
                                        }}
                                    />
                                </label>
                            </div>


                            {/* Subject */}
                            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <p className="text-[#0f111a] text-base font-medium text-left leading-normal pb-2">Subject</p>
                                    <select
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border border-[#d2d6e4] bg-[#e6e9f4] focus:border-[#d2d6e4] h-14 bg-[image:--select-button-svg] placeholder:text-[#56618f] p-[15px] text-base font-normal leading-normal"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    >
                                        <option value="" disabled>Select Subject</option>
                                        {subjects.map((sub) => (
                                            <option key={sub} value={sub}>{sub}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            
                        </div>
                        {/* Image Preview */}
                            {img && (
                                <div className="px-4 py-3">
                                    <p className="text-sm text-left text-[#47569e] mb-2">Image Preview:</p>
                                    <img
                                        src={URL.createObjectURL(img)}
                                        alt="Preview"
                                        className="max-h-48 rounded-lg border border-[#d2d6e4]"
                                    />
                                </div>
                            )}

                        {/* Save Button */}
                        <div className="flex px-4 py-3 justify-end">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]"
                                onClick={handleSave}>
                                <span className="truncate">Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
