import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [selectedSubjects, setSelectedSubjects] = useState(["Math", "Science"]);
  const [focusTime, setFocusTime] = useState("");
  // State to manage selected hobbies
const [selectedHobbies, setSelectedHobbies] = useState(["Reading", "Coding"]);
  // State for the custom hobby input field
  const [customHobby, setCustomHobby] = useState("");


  const subjects = ["Math", "Science", "History", "English", "Geography"];
  const navigate = useNavigate();

  // List of predefined hobbies.
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
  // New state to hold all hobbies, including custom ones
  const [allHobbies, setAllHobbies] = useState(initialHobbies);

  // Function to handle adding or removing a hobby from the state
  const handleHobbyClick = (hobbyName) => {
    if (selectedHobbies.includes(hobbyName)) {
      setSelectedHobbies(selectedHobbies.filter(name => name !== hobbyName));
    } else {
      setSelectedHobbies([...selectedHobbies, hobbyName]);
    }
  };

  // Function to handle adding a custom hobby
  const handleAddCustomHobby = () => {
    if (customHobby.trim() !== "" && !allHobbies.some(h => h.name === customHobby.trim())) {
      // Add the new custom hobby to the allHobbies state
      const newHobby = { name: customHobby.trim(), icon: "💡", isCustom: true };
      setAllHobbies([...allHobbies, newHobby]);
      // Also select it by default
      setSelectedHobbies([...selectedHobbies, customHobby.trim()]);
      setCustomHobby("");
    }
  };

  // Function to handle deleting a custom hobby
  const handleDeleteHobby = (hobbyName) => {
    // Remove the hobby from both the main list and the selected list
    setAllHobbies(allHobbies.filter(h => h.name !== hobbyName));
    setSelectedHobbies(selectedHobbies.filter(name => name !== hobbyName));
  };

  const handleSubjectClick = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] overflow-x-hidden"
      style={{
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
      }}
    >
      {/* Layout */}
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#e6e9f4] px-10 py-3">
          <div
            className="flex items-center gap-4 text-[#0d0f1c] cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-[#0d0f1c] text-lg font-bold tracking-[-0.015em]">
              EveAI
            </h2>
          </div>
          <div className="flex flex-1 justify-end">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDTfmrPOzjLT0IneSKmdOJtsqHZD566XOg0x9KMmJB-qad5YZ3G1PBgCH7iQIn8Xi2jVcNW-fKpKX3jMtacgLUDkSbR906_Fp2xHjdkLZ7HQ5frtgNy4hieXGUXF4gf9VjZKTT7UZkkxhekxZYcRkPyFUKTs_aoKBlLPWdOEZQcnQNz6IdxtljqLx7ewL2u7Be-aGMVHQ8u5JE8iTkRxhrN3BsjWHAxu8XYmMs4-sBl0_JwASDb_dUu7pj8_orWNlqr9IqCnSraJSt")',
              }}
            ></div>
          </div>
        </header>

        {/* Content */}
        <div className="px-10 flex flex-1 py-8">
          <div className="layout-content-container flex flex-col w-full max-w-4xl mx-auto gap-8">
            {/* Title */}
            <div className="text-center">
              <p className="text-[#0d0f1c] text-[32px] font-bold">Settings</p>
            </div>

            {/* Profile Section */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-[#0d0f1c] text-lg font-bold mb-4">Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="flex flex-col">
                  <span className="text-base font-medium pb-2">Name</span>
                  <input
                    className="form-input rounded-lg border bg-[#f8f9fc] border-[#ced2e9] h-14 px-4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-base font-medium pb-2">Email</span>
                  <input
                    className="form-input rounded-lg border bg-[#f8f9fc] border-[#ced2e9] h-14 px-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <button className="flex justify-between items-center border rounded-xl px-4 h-14 mt-7 bg-[#607afb] text-white hover:bg-[#4e65d8] transition">
                  <span>Change Password</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Subjects Section */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Subjects</h3>
              <div className="flex gap-4 flex-wrap justify-center">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    className={`flex items-center justify-center rounded-lg px-6 py-2 cursor-pointer transition ${selectedSubjects.includes(subject)
                      ? "bg-[#607afb] text-white"
                      : "bg-[#e6e9f4] text-[#0d0f1c]"
                      }`}
                    onClick={() => handleSubjectClick(subject)}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>

            {/* Hobbies Section */}
<div className="bg-white rounded-2xl shadow p-6">
  <h3 className="text-lg font-bold mb-4">Select Your Hobbies</h3>

  {/* Hobby Buttons */}
  <div className="flex gap-3 flex-wrap justify-between">
    {allHobbies.map((hobby, idx) => (
      <div key={idx} className="relative">
        <button
          className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-3 cursor-pointer transition-colors duration-200 ${
            selectedHobbies.includes(hobby.name)
              ? "bg-[#607afb] text-[#f8f9fc]"
              : "bg-[#e6e9f4] text-[#0d0f1c]"
          }`}
          onClick={() => handleHobbyClick(hobby.name)}
        >
          <span className="text-xl">{hobby.icon}</span>
          <p className="text-sm font-medium">{hobby.name}</p>
        </button>
        {hobby.isCustom && (
          <button
            className="absolute -top-2 -right-2 size-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs cursor-pointer"
            onClick={() => handleDeleteHobby(hobby.name)}
          >
            &times;
          </button>
        )}
      </div>
    ))}
  </div>

  {/* Add Custom Hobby */}
  <div className="flex max-w-[480px] flex-wrap items-end gap-4 pt-4">
    <label className="flex flex-col min-w-40 flex-1">
      <div className="flex items-center">
        <input
          placeholder="Add a custom hobby"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal"
          value={customHobby}
          onChange={(e) => setCustomHobby(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleAddCustomHobby();
          }}
        />
        <button
          onClick={handleAddCustomHobby}
          className="ml-2 flex-shrink-0 px-4 py-2 rounded-lg bg-[#607afb] text-[#f8f9fc] text-sm font-bold"
        >
          Add
        </button>
      </div>
    </label>
  </div>
</div>


            {/* Focus Time */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Focus Time</h3>
              <div className="w-full md:w-1/3">
                <select
                  className="form-input w-full rounded-xl border border-[#ced3e9] bg-[#f8f9fc] h-14 px-4"
                  value={focusTime}
                  onChange={(e) => setFocusTime(e.target.value)}
                >
                  <option value="" disabled>
                    Select Time
                  </option>
                  <option value="25">25 mins</option>
                  <option value="50">50 mins</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-6 pt-4">
              <button
                className="rounded-full h-10 px-6 bg-[#607afb] text-white font-bold hover:bg-[#4e65d8] transition"
                onClick={() => navigate("/dashboard")}
              >
                Save
              </button>
              <button
                className="rounded-full h-10 px-6 bg-[#ff0000] text-white font-bold hover:bg-[#d60000] transition"
                onClick={() => navigate("/")}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
