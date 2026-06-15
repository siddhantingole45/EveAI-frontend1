import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../Components/AppShell";

const Quiz = () => {
  const navigate = useNavigate();
  const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Which is the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: "Jupiter" },
    { question: "Who developed the Theory of Relativity?", options: ["Newton", "Einstein", "Tesla", "Edison"], answer: "Einstein" },
  ];

  const [currentAnswers, setCurrentAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0 || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const handleSelect = (qIndex, option) => {
    setCurrentAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach((q, index) => {
      if (currentAnswers[index] === q.answer) sc++;
    });
    setScore(sc);
    setSubmitted(true);
  };

  return (
    <AppShell title="Quiz" hideSearch>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm">
        {!submitted ? (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-[#0f111a]">Quiz</h2>
              <span className="text-sm font-semibold text-red-600">Time Left: {timeLeft}s</span>
            </div>

            <div className="space-y-6">
              {questions.map((q, qIndex) => (
                <div key={qIndex} className="rounded-2xl border border-[#e2e6ef] p-4 shadow-sm">
                  <p className="font-semibold text-[#0f111a] mb-3">{qIndex + 1}. {q.question}</p>
                  <div className="grid gap-3">
                    {q.options.map((opt, idx) => (
                      <label
                        key={idx}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition ${
                          currentAnswers[qIndex] === opt
                            ? 'border-blue-500 bg-blue-50 text-[#0f172a]'
                            : 'border-[#d2d6e4] bg-white text-[#334155] hover:bg-[#f8fafc]'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={opt}
                          checked={currentAnswers[qIndex] === opt}
                          onChange={() => handleSelect(qIndex, opt)}
                          className="h-4 w-4 text-blue-600"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Submit Quiz
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#d2d6e4] bg-[#f8fafc] p-6">
              <h2 className="text-2xl font-bold text-green-600">Quiz Results</h2>
              <p className="mt-2 text-lg text-[#0f111a]">You scored {score} out of {questions.length}</p>
            </div>

            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={index} className="rounded-2xl border border-[#e2e6ef] bg-white p-4 shadow-sm">
                  <p className="font-semibold text-[#0f111a] mb-2">{index + 1}. {q.question}</p>
                  <p className="text-sm text-[#334155]">Your Answer: <span className={`font-semibold ${currentAnswers[index] === q.answer ? 'text-green-600' : 'text-red-600'}`}>{currentAnswers[index] || 'Not Answered'}</span></p>
                  <p className="text-sm text-[#334155]">Correct Answer: <span className="font-semibold text-blue-600">{q.answer}</span></p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Back To Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default Quiz;
