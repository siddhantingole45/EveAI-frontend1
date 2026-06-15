import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../Components/AppShell";

const PracticeQuiz = () => {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [quizGenerated, setQuizGenerated] = useState(false);

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleDifficultyChange = (level) => setDifficulty(level);
  const handleGenerateQuiz = () => {
    if (!subject) {
      alert("Please select a subject first!");
      return;
    }
    setQuizGenerated(true);
  };
  const handleStartQuiz = () => {
    if (!quizGenerated) {
      alert("Please generate the quiz first!");
      return;
    }
    navigate("/quiz", { state: { subject, difficulty } });
  };

  return (
    <AppShell title="Practice Quiz" hideSearch>
      <div className="mx-auto flex max-w-xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm">
        <div>
          <p className="text-3xl font-bold text-[#0f111a]">Practice Quiz</p>
          <p className="mt-2 text-sm text-[#56618f]">Generate a quiz and practice with a few quick questions.</p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-[#0f111a]">Select Subject</label>
          <select
            value={subject}
            onChange={handleSubjectChange}
            className="w-full rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm outline-none focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
          >
            <option value="">Select Subject</option>
            <option value="maths">Maths</option>
            <option value="science">Science</option>
          </select>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium text-[#0f111a]">Select Difficulty</p>
          <div className="grid grid-cols-3 gap-3">
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleDifficultyChange(level)}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  difficulty === level
                    ? 'bg-[#607afb] text-white'
                    : 'bg-[#f5f7ff] text-[#0f172a] hover:bg-[#e7efff]'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={handleGenerateQuiz}
            className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Generate Quiz
          </button>
          <button
            type="button"
            onClick={handleStartQuiz}
            className="rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            Start Quiz
          </button>
        </div>

        {quizGenerated && (
          <div className="rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] p-4 text-sm text-[#0f111a]">
            ✅ Quiz ready! Subject: <strong>{subject}</strong>, Difficulty: <strong>{difficulty}</strong>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default PracticeQuiz;
