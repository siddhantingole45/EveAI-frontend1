import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../Components/AppShell";

const RegenerateSchedule = () => {
  const [balance, setBalance] = useState(50);
  const [timePreference, setTimePreference] = useState("");
  const [autoAdjust, setAutoAdjust] = useState(false);
  const navigate = useNavigate();

  const handleSliderClick = (e) => {
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    setBalance(Math.round(percentage));
  };

  return (
    <AppShell title="Regenerate Schedule" hideSearch>
      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-semibold text-[#0f111a]">Study-Hobby Balance</p>
            <p className="text-sm text-[#56618f]">{balance}%</p>
          </div>
          <div className="mt-4 cursor-pointer rounded-full bg-[#e5e7eb] p-2" onClick={handleSliderClick}>
            <div className="relative h-2 rounded-full bg-[#cbd5e1]">
              <div className="absolute left-0 top-0 h-full rounded-full bg-[#607afb]" style={{ width: `${balance}%` }} />
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-lg font-semibold text-[#0f111a] mb-4">Time Preference</p>
          <div className="flex flex-wrap gap-3">
            {['Morning', 'Evening'].map((option) => (
              <button
                type="button"
                key={option}
                onClick={() => setTimePreference(option)}
                className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition ${
                  timePreference === option
                    ? 'border-[#607afb] bg-[#607afb] text-white'
                    : 'border-[#d2d6e4] bg-white text-[#0f111a] hover:bg-[#f8fafc]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-[#0f111a]">Auto-adjust based on past performance</p>
            <button
              type="button"
              onClick={() => setAutoAdjust((prev) => !prev)}
              className={`relative inline-flex h-10 w-16 items-center rounded-full p-1 transition ${
                autoAdjust ? 'bg-[#607afb]' : 'bg-[#e5e7eb]'
              }`}
            >
              <span
                className={`inline-block h-8 w-8 rounded-full bg-white transition ${
                  autoAdjust ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => navigate("/schedule")}
            className="rounded-2xl bg-[#607afb] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4d6ce0]"
          >
            Generate New Plan
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export default RegenerateSchedule;
