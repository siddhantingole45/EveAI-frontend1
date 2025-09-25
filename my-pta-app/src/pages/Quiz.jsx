import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Quiz = () => {
    const navigate = useNavigate();
    
  // Example Questions
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which is the largest planet in our Solar System?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "Who developed the Theory of Relativity?",
      options: ["Newton", "Einstein", "Tesla", "Edison"],
      answer: "Einstein",
    },
  ];

  const [currentAnswers, setCurrentAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds timer

  // Countdown Timer
  useEffect(() => {
    if (timeLeft <= 0 || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  // Handle Option Select
  const handleSelect = (qIndex, option) => {
    setCurrentAnswers((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  };

  // Submit Quiz
  const handleSubmit = () => {
    let sc = 0;
    questions.forEach((q, index) => {
      if (currentAnswers[index] === q.answer) sc++;
    });
    setScore(sc);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f9fb]">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-4 text-[#0d0f1c]">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-6">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
          {!submitted ? (
            <>
              {/* Quiz Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Quiz</h2>
                <span className="text-red-500 font-semibold">
                  Time Left: {timeLeft}s
                </span>
              </div>

              {/* Questions */}
              {questions.map((q, qIndex) => (
                <div
                  key={qIndex}
                  className="mb-6 p-4 border rounded-lg hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-700 mb-3">
                    {qIndex + 1}. {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, idx) => (
                      <label
                        key={idx}
                        className={`flex items-center p-2 rounded-md cursor-pointer border ${
                          currentAnswers[qIndex] === opt
                            ? "bg-blue-100 border-blue-400"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={opt}
                          checked={currentAnswers[qIndex] === opt}
                          onChange={() => handleSelect(qIndex, opt)}
                          className="mr-2"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Submit Quiz
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Quiz Results
              </h2>
              <p className="text-lg font-medium mb-6">
                You scored {score} out of {questions.length}
              </p>

              {/* Correct Answers */}
              <div className="space-y-4">
                {questions.map((q, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg bg-gray-50 shadow-sm"
                  >
                    <p className="font-semibold text-gray-800 mb-2">
                      {index + 1}. {q.question}
                    </p>
                    <p>
                      Your Answer:{" "}
                      <span
                        className={`font-semibold ${
                          currentAnswers[index] === q.answer
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {currentAnswers[index] || "Not Answered"}
                      </span>
                    </p>
                    <p>
                      Correct Answer:{" "}
                      <span className="font-semibold text-blue-600">
                        {q.answer}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
                <div className="flex justify-center mt-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                Back To Dashboard
              </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
