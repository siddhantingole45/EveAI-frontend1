import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [user, setUserName] = useState(null);
  // const [stats, setStats] = useState(null);
  const [stats, setStats] = useState({ completion_rate: 0, streak_days: 0 });
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
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Simplified Header for brevity, same as your design */}
        <header className="flex items-center justify-between border-b border-[#e9eaf2] px-10 py-3">
           <div className="flex items-center gap-4 text-[#0f111a] font-bold">EveAI</div>
           <div onClick={() => navigate("/settings")} className="cursor-pointer size-10 rounded-full bg-blue-100 flex items-center justify-center">
             {user?.name?.charAt(0)}
           </div>
        </header>

        <div className="px-10 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="p-4">
              <h1 className="text-[#0f111a] text-[32px] font-bold">Welcome back, {user?.name}!</h1>
              <p className="text-[#56618f] text-sm">Here's your learning progress.</p>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
              <StatCard title="Completion Rate" value={`${stats?.completion_rate}%`} trend="+2%" color="text-green-600" />
              <StatCard title="Current Streak" value={`${stats?.streak_days} Days`} trend="+1" color="text-green-600" />
              <StatCard title="Total Sessions" value={stats?.total_sessions} trend="Global" color="text-blue-600" />
            </div>

            <h2 className="text-[22px] font-bold px-4 pt-5">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
              <ActionButton label="Ask AI" icon="🤖" onClick={() => navigate("/assistant")} />
              <ActionButton label="My Notes" icon="📝" onClick={() => navigate("/notes")} />
              <ActionButton label="Schedule" icon="📅" onClick={() => navigate("/schedule")} />
              <ActionButton label="Quizzes" icon="💡" onClick={() => navigate("/practice-quiz")} />
            </div>
          </div>
        </div>
      </div>
    </div>
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