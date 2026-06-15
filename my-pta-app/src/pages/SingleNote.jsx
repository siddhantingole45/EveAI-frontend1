import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

const SingleNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const res = await apiClient.get(`/notes/${id}`);
        setNote(res.data);
      } catch (err) {
        console.error("Failed to load note", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  return (
    <AppShell
      title={note?.title || "My Note"}
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
      {loading ? (
        <div className="rounded-3xl border border-[#dfe3ee] bg-white p-6 text-center text-sm text-[#56618f] shadow-sm">
          Loading note...
        </div>
      ) : note ? (
        <div className="rounded-3xl border border-[#dfe3ee] bg-white p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            {note.image && (
              <img
                src={note.image}
                alt={note.title}
                className="h-72 w-full rounded-3xl object-cover"
              />
            )}

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#1d4ed8]">
                  {note.subject || "General"}
                </span>
                <span className="text-sm text-[#94a3b8]">
                  {note.created_at ? new Date(note.created_at).toLocaleDateString() : "Unknown date"}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#0f172a]">{note.title}</h2>
              <p className="text-sm text-[#475569]">{note.description}</p>
              <div className="rounded-3xl border border-[#e5e7eb] bg-[#f8fafc] p-6 text-[#0f172a] whitespace-pre-line">
                {note.content}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-[#dfe3ee] bg-white p-6 text-center text-sm text-[#56618f] shadow-sm">
          Note not found.
        </div>
      )}
    </AppShell>
  );
};

export default SingleNote;
