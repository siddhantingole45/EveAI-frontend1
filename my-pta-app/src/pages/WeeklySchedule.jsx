import React from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../Components/AppShell";

const WeeklySchedule = () => {
  const navigate = useNavigate();

  return (
    <AppShell
      title="Weekly Schedule"
      headerAction={
        <button
          type="button"
          onClick={() => navigate("/schedule/regenerate")}
          className="rounded-2xl bg-[#607afb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4d6ce0]"
        >
          Regenerate Schedule
        </button>
      }
      hideSearch
    >
      <div className="space-y-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <button
                key={day}
                type="button"
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  index === 0 ? 'bg-[#eef2ff] text-[#0f111a]' : 'bg-[#f5f7ff] text-[#56618f] hover:bg-[#e7ecff]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#d2d6e4] bg-[#f9f9fb] shadow-sm">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#f9f9fb] text-left">
                <th className="border-b border-[#e2e6ef] px-4 py-3 text-sm font-semibold text-[#0f111a]">Time</th>
                <th className="border-b border-[#e2e6ef] px-4 py-3 text-sm font-semibold text-[#0f111a]">Subject / Hobby</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["9:00 AM - 10:00 AM", "Math"],
                ["10:00 AM - 11:00 AM", "Science"],
                ["11:00 AM - 12:00 PM", "History"],
                ["12:00 PM - 1:00 PM", "Lunch Break"],
                ["1:00 PM - 2:00 PM", "English"],
                ["2:00 PM - 3:00 PM", "Art"],
                ["3:00 PM - 4:00 PM", "Free Time"],
                ["4:00 PM - 5:00 PM", "Sports"],
                ["5:00 PM - 6:00 PM", "Music"],
                ["6:00 PM - 7:00 PM", "Reading"],
              ].map(([time, subject]) => (
                <tr key={time} className="border-t border-[#e2e6ef]">
                  <td className="px-4 py-4 text-sm text-[#56618f]">{time}</td>
                  <td className="px-4 py-4 text-sm text-[#0f111a]">{subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
};

export default WeeklySchedule;
