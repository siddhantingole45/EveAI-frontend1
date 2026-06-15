import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";

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

const Personalize = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [allHobbies, setAllHobbies] = useState(initialHobbies);
  const [customHobby, setCustomHobby] = useState("");
  const [studyTime, setStudyTime] = useState(120);
  const [hobbyTime, setHobbyTime] = useState(60);
  const [breakTime, setBreakTime] = useState(30);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainder = minutes % 60;
    return `${hours > 0 ? `${hours}h ` : ""}${remainder}m`;
  };

  const toggleHobby = (hobbyName) => {
    setSelectedHobbies((prev) =>
      prev.includes(hobbyName)
        ? prev.filter((name) => name !== hobbyName)
        : [...prev, hobbyName]
    );
  };

  const addCustomHobby = () => {
    const trimmed = customHobby.trim();
    if (!trimmed) return;
    if (allHobbies.some((hobby) => hobby.name === trimmed)) {
      setError("This hobby is already added.");
      return;
    }

    setAllHobbies((prev) => [...prev, { name: trimmed, icon: "💡", isCustom: true }]);
    setSelectedHobbies((prev) => [...prev, trimmed]);
    setCustomHobby("");
    setError("");
  };

  const removeCustomHobby = (hobbyName) => {
    setAllHobbies((prev) => prev.filter((hobby) => hobby.name !== hobbyName));
    setSelectedHobbies((prev) => prev.filter((name) => name !== hobbyName));
  };

  const handleComplete = async () => {
    setError("");

    const rawSubjects = JSON.parse(localStorage.getItem("onboard_subjects") || "[]");
    if (!rawSubjects.length) {
      setError("Please select at least one subject before continuing.");
      return;
    }

    const payload = {
      subjects: rawSubjects.map((subject) => ({
        name: subject,
        priority: 5,
        level: "beginner",
        topics: [],
      })),
      hobbies: selectedHobbies.map((hobby) => ({
        name: hobby,
        proficiency: "beginner",
      })),
      availability: {
        Monday: [{ start: "09:00", end: "17:00" }],
        Tuesday: [{ start: "09:00", end: "17:00" }],
      },
      preferences: {
        study_time: studyTime,
        hobby_time: hobbyTime,
        break_time: breakTime,
      },
    };

    try {
      setIsSaving(true);
      await apiClient.post("/user/onboard", payload);
      localStorage.setItem("onboard_completed", "true");
      navigate("/dashboard");
    } catch (err) {
      console.error("Onboarding save failed:", err);
      setError(err.response?.data?.detail || "Unable to save your preferences. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#0f172a]">
      <div className="mx-auto w-full max-w-[760px] px-6 py-10">
        <div className="rounded-[32px] border border-[#e6e9f4] bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">Personalize</p>
            <h1 className="mt-2 text-3xl font-bold text-[#0f172a]">Setup your learning style</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-[#475569]">
              Choose your hobbies and daily rhythm so EveAI can create a plan that fits your life.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-base font-semibold text-[#0f172a]">Choose hobbies</h2>
              <p className="mt-2 text-sm text-[#475569]">Select the activities that help you recharge outside of studying.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {allHobbies.map((hobby) => {
                  const selected = selectedHobbies.includes(hobby.name);
                  return (
                    <button
                      key={hobby.name}
                      type="button"
                      onClick={() => toggleHobby(hobby.name)}
                      className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm transition ${
                        selected
                          ? "border-[#607afb] bg-[#eff6ff] text-[#0f172a]"
                          : "border-[#d2d6e4] bg-[#f8fafc] text-[#475569]"
                      }`}
                    >
                      <span>{hobby.icon}</span>
                      <span>{hobby.name}</span>
                      {hobby.isCustom && selected && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCustomHobby(hobby.name);
                          }}
                          className="ml-1 cursor-pointer text-red-500"
                        >
                          ×
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Add custom hobby"
                  value={customHobby}
                  onChange={(e) => setCustomHobby(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addCustomHobby()}
                  className="w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
                />
                <button
                  type="button"
                  onClick={addCustomHobby}
                  className="rounded-3xl bg-[#607afb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f63df]"
                >
                  Add
                </button>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Study Time", value: studyTime, setter: setStudyTime, max: 480, hint: "Daily study goal" },
                { label: "Hobby Time", value: hobbyTime, setter: setHobbyTime, max: 240, hint: "Relaxation minutes" },
                { label: "Break Time", value: breakTime, setter: setBreakTime, max: 120, hint: "Daily breaks" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#e6e9f4] bg-[#f8fafc] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-[#0f172a]">{item.label}</p>
                    <span className="text-sm text-[#475569]">{formatTime(item.value)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={item.max}
                    step="15"
                    value={item.value}
                    onChange={(e) => item.setter(Number(e.target.value))}
                    className="mt-4 w-full accent-[#607afb]"
                  />
                  <p className="mt-3 text-xs text-[#64748b]">{item.hint}</p>
                </div>
              ))}
            </section>

            {error && (
              <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="text-center">
              <button
                type="button"
                onClick={handleComplete}
                disabled={isSaving}
                className="inline-flex w-full justify-center rounded-3xl bg-[#607afb] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#4f63df] disabled:cursor-not-allowed disabled:bg-[#a5b4fc]"
              >
                {isSaving ? "Saving preferences..." : "Complete Onboarding"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
