import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";
import AppShell from "../Components/AppShell";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ completion_rate: 0, streak_days: 0, total_sessions: 0 });
  const [loading, setLoading] = useState(true);
  // const [loading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [userRes, statsRes] = await Promise.all([
          apiClient.get("/user/me"),
          apiClient.get("/progress/summary")
        ]);
        setUser(userRes.data);
        setStats(statsRes.data);
      } catch (err) {
        console.error("Dashboard load error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);


  // useEffect(() => {
  //     const loadDashboard = async () => {
  //         try {
  //             const [userRes, progressRes] = await Promise.all([
  //                 apiClient.get("/user/me"),
  //                 apiClient.get("/progress/summary")
  //             ]);
  //             setUserName(userRes.data.name);
  //             setStats(progressRes.data);
  //         } catch (e) { console.error(e); }
  //     };
  //     loadDashboard();
  // }, []);

  if (loading) return <div className="flex h-screen items-center justify-center">Loading Dashboard...</div>;

  return (
    <AppShell title={`Welcome back, ${user?.name || "Student"}!`}>
      <div className="space-y-6">
        <div className="rounded-3xl border border-[#dfe3ee] bg-white p-6 shadow-sm">
          <p className="text-[#56618f] text-sm">Here's your learning progress.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <StatCard title="Completion Rate" value={`${stats?.completion_rate}%`} trend="+2%" color="text-green-600" />
            <StatCard title="Current Streak" value={`${stats?.streak_days} Days`} trend="+1" color="text-green-600" />
            <StatCard title="Total Sessions" value={stats?.total_sessions || 0} trend="Global" color="text-blue-600" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <ActionButton label="Ask AI" icon="🤖" onClick={() => navigate("/assistant")} />
          <ActionButton label="My Notes" icon="📝" onClick={() => navigate("/notes")} />
          <ActionButton label="Schedule" icon="📅" onClick={() => navigate("/schedule")} />
          <ActionButton label="Quizzes" icon="💡" onClick={() => navigate("/practice-quiz")} />
        </div>
      </div>
    </AppShell>
  );
}

const StatCard = ({ title, value, trend, color }) => (
  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-white shadow-sm border border-gray-100">
    <p className="text-gray-500 text-sm font-medium">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
    <p className={`${color} text-sm font-medium`}>{trend}</p>
  </div>
);

const ActionButton = ({ label, icon, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-blue-400 transition-all">
    <span className="text-3xl">{icon}</span>
    <span className="font-semibold text-sm">{label}</span>
  </button>
);