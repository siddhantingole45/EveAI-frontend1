import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [img, setImg] = useState(null);
  const navigate = useNavigate();

  const subjects = ["Math", "Science", "History", "English", "Art"];

  const handleSave = async () => {
    if (!title || !content) {
      alert("Title and content are required.");
      return;
    }

    try {
      const payload = {
        title,
        description,
        content,
        subject,
        tags: [],
        is_public: false,
      };
      await apiClient.post("/notes/add", payload);
      navigate("/notes");
    } catch (err) {
      console.error(err);
      alert("Unable to save note. Please try again.");
    }
  };

  return (
    <AppShell
      title="Add Note"
      headerAction={
        <button
          type="button"
          onClick={() => navigate("/notes")}
          className="rounded-full bg-[#607afb] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4e65d8] transition"
        >
          Back to Notes
        </button>
      }
    >
      <div className="rounded-3xl border border-[#dfe3ee] bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#0f111a]">Create a New Note</h2>
          <p className="mt-2 text-sm text-[#475569]">Save a summary or study note for later review.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-2 px-4 py-3">
            <label className="text-sm font-medium text-[#0f111a]">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="form-input w-full rounded-2xl border border-[#d2d6e4] bg-[#f8faff] px-4 py-3 text-[#0f111a] focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 px-4 py-3 lg:col-span-2">
            <label className="text-sm font-medium text-[#0f111a]">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter short description"
              className="form-input w-full rounded-2xl border border-[#d2d6e4] bg-[#f8faff] px-4 py-3 text-[#0f111a] focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-2 px-4 py-3">
            <label className="text-sm font-medium text-[#0f111a]">Content</label>
            <textarea
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing your note here..."
              className="form-input w-full rounded-[28px] border border-[#d2d6e4] bg-[#f8faff] px-4 py-4 text-[#0f111a] focus:outline-none"
            />
          </div>

          <div className="space-y-4 px-4 py-3">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#0f111a]">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-input w-full rounded-2xl border border-[#d2d6e4] bg-[#f8faff] px-4 py-3 text-[#0f111a] focus:outline-none"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                {subjects.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#0f111a]">Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-input w-full rounded-2xl border border-[#d2d6e4] bg-[#f8faff] p-3 text-[#0f111a] focus:outline-none"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setImg(e.target.files[0]);
                  }
                }}
              />
            </div>
          </div>
        </div>

        {img && (
          <div className="px-4 py-3">
            <p className="text-sm text-[#475569] mb-2">Image Preview:</p>
            <img
              src={URL.createObjectURL(img)}
              alt="Preview"
              className="max-h-48 rounded-3xl border border-[#d2d6e4]"
            />
          </div>
        )}

        <div className="flex justify-end px-4 py-3">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-3xl bg-[#607afb] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4e65d8]"
          >
            Save Note
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export default AddNote;
