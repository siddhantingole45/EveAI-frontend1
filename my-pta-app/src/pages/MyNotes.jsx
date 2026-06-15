import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";

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
        <div className="min-h-screen bg-[#f8f9fc]">
            <div className="max-w-6xl mx-auto p-10">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">My Notes</h1>
                    <button 
                        onClick={() => navigate("/notes/add-note")}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition"
                    >
                        + Add Note
                    </button>
                </div>

                {loading ? (
                    <p>Loading your notes...</p>
                ) : notes.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed">
                        <p className="text-gray-500">No notes found. Start by adding your first study note!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {notes.map((note) => (
                            <div 
                                key={note.id}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md cursor-pointer transition"
                                onClick={() => navigate(`/notes/single-note`, { state: { noteId: note.id } })}
                            >
                                <div className="text-xs font-bold text-blue-600 uppercase mb-2">{note.subject || "General"}</div>
                                <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{note.content}</p>
                                <div className="mt-4 text-gray-400 text-xs">
                                    {new Date(note.created_at).toLocaleDateString()}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyNotes;