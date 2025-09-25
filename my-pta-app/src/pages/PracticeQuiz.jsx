import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PracticeQuiz = () => {
  const navigate = useNavigate();

  // State for subject and difficulty
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Medium"); // default Medium
  const [quizGenerated, setQuizGenerated] = useState(false);

  // Handle subject change
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  // Handle difficulty change
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  // Generate Quiz
  const handleGenerateQuiz = () => {
    if (!subject) {
      alert("Please select a subject first!");
      return;
    }
    setQuizGenerated(true);
    console.log("Quiz generated with:", { subject, difficulty });
  };

  // Start Quiz
  const handleStartQuiz = () => {
    if (!quizGenerated) {
      alert("Please generate the quiz first!");
      return;
    }
    navigate("/quiz", { state: { subject, difficulty } });
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
      style={{
        ["--select-button-svg"]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' fill='rgb(86,97,143)' viewBox='0 0 256 256'%3e%3cpath d='M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z'%3e%3c/path%3e%3c/svg%3e")`,
        fontFamily: "Manrope, Noto Sans, sans-serif",
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0d0f1c]">
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

                    <div className="flex flex-1 justify-end gap-8">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2SESxQrfjL1yt_apW8lKQiO8OVWpHFW5138lj8R9l72ZPTUPMCEj2V6bKI6ntltf6vORR_PpbnDXPdYntx8RRLWVWtK6nEVSie8lgZvVdnyY0ZEwvyJKUROu2bDloBqvMnTYxZx76y7iR9YE9vJQ_3YiDpx9VtsBuy-Oj4fs5lqiKVPqTXKytP12lOwFrrRr__HxdS9aVmFdSOwX0UvVgofZJvc8GJOrBO9riGA9hoStasRx91xO8rVpQjaTjEBQcVy5ZW0KzxeDE")',
                            }}
                        ></div>
                    </div>
                </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5 ">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 mx-auto max-h-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4 text-center mx-auto">
              <p className="text-[#0f111a] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Practice Quiz
              </p>
            </div>

            {/* Dropdown */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <select
                  value={subject}
                  onChange={handleSubjectChange}
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border border-[#d2d6e4] bg-[#f9f9fb] focus:border-[#d2d6e4] h-14 bg-[image:--select-button-svg] placeholder:text-[#56618f] p-[15px] text-base font-normal leading-normal"
                >
                  <option value="">Select Subject</option>
                  <option value="maths">Maths</option>
                  <option value="science">Science</option>
                </select>
              </label>
            </div>

            {/* Radio Buttons */}
            <div className="flex px-4 py-3">
              <div className="flex h-10 flex-1 items-center justify-center rounded-xl bg-[#e9eaf2] p-1">
                {["Easy", "Medium", "Hard"].map((level) => (
                  <label
                    key={level}
                    className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-xl px-2 has-[:checked]:bg-[#f9f9fb] has-[:checked]:shadow-[0_0_4px_rgba(0,0,0,0.1)] has-[:checked]:text-[#0f111a] text-[#56618f] text-sm font-medium leading-normal"
                  >
                    <span className="truncate">{level}</span>
                    <input
                      type="radio"
                      name="quiz-difficulty"
                      className="invisible w-0"
                      value={level}
                      checked={difficulty === level}
                      onChange={handleDifficultyChange}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex px-4 py-3 justify-between">
              <button
                onClick={handleGenerateQuiz}
                className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Generate Quiz
              </button>
              <button
                onClick={handleStartQuiz}
                className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-green-600 text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Start Quiz
              </button>
            </div>

            {/* Info after quiz generated */}
            {quizGenerated && (
              <div className="px-4 py-2 text-sm text-gray-700">
                ✅ Quiz ready! Subject: <b>{subject}</b>, Difficulty:{" "}
                <b>{difficulty}</b>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeQuiz;
