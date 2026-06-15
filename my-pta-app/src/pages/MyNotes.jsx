import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

const MyNotes = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await apiClient.get("/notes/list");
                setNotes(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchNotes();
    }, []);

    return (
        <AppShell
          title="My Notes"
          headerAction={
            <button
              onClick={() => navigate("/notes/new")}
              className="rounded-full bg-[#607afb] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4e65d8] transition"
            >
              + Add Note
            </button>
          }
        >
            {loading ? (
                <div className="rounded-3xl border border-[#dfe3ee] bg-white p-6 text-center text-sm text-[#47569e] shadow-sm">
                    Loading your notes...
                </div>
            ) : notes.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[#dfe3ee] bg-white p-10 text-center text-sm text-[#47569e] shadow-sm">
                    <p>No notes found. Start by adding your first study note!</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {notes.map((note) => (
                        <button
                            key={note.id}
                            type="button"
                            className="text-left bg-white p-6 rounded-3xl border border-[#dfe3ee] shadow-sm transition hover:shadow-md"
                            onClick={() => navigate(`/notes/${note.id}`)}
                        >
                            <div className="text-xs font-bold uppercase text-[#607afb] mb-2">{note.subject || "General"}</div>
                            <h3 className="text-xl font-semibold text-[#0f111a] mb-2">{note.title}</h3>
                            <p className="text-[#56618f] text-sm line-clamp-4">{note.content}</p>
                            <div className="mt-4 text-xs text-[#94a3b8]">
                                {note.created_at ? new Date(note.created_at).toLocaleDateString() : "No date"}
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </AppShell>
    );
};

export default MyNotes;