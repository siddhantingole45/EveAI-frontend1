import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [selectedSubjects, setSelectedSubjects] = useState(["Math", "Science"]);
  const [focusTime, setFocusTime] = useState("");
  const [selectedHobbies, setSelectedHobbies] = useState(["Reading", "Coding"]);
  const [customHobby, setCustomHobby] = useState("");
  const navigate = useNavigate();

  const subjects = ["Math", "Science", "History", "English", "Geography"];
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
  const [allHobbies, setAllHobbies] = useState(initialHobbies);

  const handleHobbyClick = (hobbyName) => {
    if (selectedHobbies.includes(hobbyName)) {
      setSelectedHobbies(selectedHobbies.filter((name) => name !== hobbyName));
    } else {
      setSelectedHobbies([...selectedHobbies, hobbyName]);
    }
  };

  const handleAddCustomHobby = () => {
    const trimmed = customHobby.trim();
    if (trimmed && !allHobbies.some((h) => h.name === trimmed)) {
      const newHobby = { name: trimmed, icon: "💡", isCustom: true };
      setAllHobbies([...allHobbies, newHobby]);
      setSelectedHobbies([...selectedHobbies, trimmed]);
      setCustomHobby("");
    }
  };

  const handleDeleteHobby = (hobbyName) => {
    setAllHobbies(allHobbies.filter((h) => h.name !== hobbyName));
    setSelectedHobbies(selectedHobbies.filter((name) => name !== hobbyName));
  };

  const handleSubjectClick = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiClient.get("/user/profile");
        const data = res.data;
        setSelectedSubjects(data.subjects.map((s) => s.name));
        setSelectedHobbies(data.hobbies.map((h) => h.name));
        setFocusTime(data.preferences?.focus_time || "");
      } catch (err) {
        console.log("No profile yet, user is new", err);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get("/user/me");
        setName(res.data.name);
        setEmail(res.data.email);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    };
    fetchUser();
  }, []);

  const buildPayload = () => ({
    subjects: selectedSubjects.map((s) => ({ name: s, priority: 5, level: "beginner", topics: [] })),
    hobbies: selectedHobbies.map((h) => ({ name: h, description: "", proficiency: "beginner" })),
    availability: {},
    preferences: { focus_time: focusTime },
  });

  const handleSave = async () => {
    try {
      await apiClient.post("/user/onboard", buildPayload());
      alert("Profile saved successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to save profile");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <AppShell title="Settings" hideSearch>
      <div className="space-y-8">
        <div className="grid gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-[#0f111a]">Profile</p>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#0f111a]">
                Name
                <input
                  className="mt-2 w-full rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="block text-sm font-medium text-[#0f111a]">
                Email
                <input
                  className="mt-2 w-full rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl bg-[#f8fafc] p-6">
            <p className="text-lg font-semibold text-[#0f111a]">Change Password</p>
            <button
              type="button"
              className="mt-4 rounded-2xl bg-[#607afb] px-5 py-3 text-sm font-semibold text-white hover:bg-[#4d6ce0]"
            >
              Change Password
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-xl font-bold text-[#0f111a] mb-6">Subjects</p>
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => handleSubjectClick(subject)}
                className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  selectedSubjects.includes(subject)
                    ? 'bg-[#607afb] text-white'
                    : 'bg-[#e6e9f4] text-[#0f111a] hover:bg-[#dbe4ff]'
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xl font-bold text-[#0f111a]">Select Your Hobbies</p>
            <div className="flex w-full max-w-sm gap-2">
              <input
                value={customHobby}
                onChange={(e) => setCustomHobby(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') handleAddCustomHobby(); }}
                placeholder="Add a custom hobby"
                className="flex-1 rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
              />
              <button
                type="button"
                onClick={handleAddCustomHobby}
                className="rounded-2xl bg-[#607afb] px-4 py-3 text-sm font-semibold text-white hover:bg-[#4d6ce0]"
              >
                Add
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allHobbies.map((hobby, idx) => (
              <div key={idx} className="relative">
                <button
                  type="button"
                  onClick={() => handleHobbyClick(hobby.name)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                    selectedHobbies.includes(hobby.name)
                      ? 'border-[#607afb] bg-[#eff4ff] text-[#0f111a]'
                      : 'border-[#e6e9f4] bg-white text-[#0f111a] hover:bg-[#f8fafc]'
                  }`}
                >
                  <span className="text-lg">{hobby.icon}</span>
                  <span>{hobby.name}</span>
                </button>
                {hobby.isCustom && (
                  <button
                    type="button"
                    onClick={() => handleDeleteHobby(hobby.name)}
                    className="absolute -right-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-xl font-bold text-[#0f111a] mb-4">Focus Time</p>
          <select
            className="w-full max-w-xs rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
            value={focusTime}
            onChange={(e) => setFocusTime(e.target.value)}
          >
            <option value="" disabled>Select Time</option>
            <option value="25">25 mins</option>
            <option value="50">50 mins</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-2xl bg-[#607afb] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4d6ce0]"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-2xl bg-[#ff0000] px-6 py-3 text-sm font-semibold text-white hover:bg-[#d60000]"
          >
            Logout
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export default Settings;
