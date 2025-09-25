import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../Components/Card"; // ✅ custom Card
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const dailyData = [
  { day: "Mon", progress: 70 },
  { day: "Tue", progress: 80 },
  { day: "Wed", progress: 65 },
  { day: "Thu", progress: 90 },
  { day: "Fri", progress: 75 },
];

const weeklyData = [
  { week: "Week 1", score: 80 },
  { week: "Week 2", score: 85 },
  { week: "Week 3", score: 78 },
  { week: "Week 4", score: 92 },
];

const studyVsHobby = [
  { name: "Study", value: 70 },
  { name: "Hobby", value: 30 },
];

const quizScores = [
  { quiz: "Quiz 1", score: 85 },
  { quiz: "Quiz 2", score: 90 },
  { quiz: "Quiz 3", score: 78 },
  { quiz: "Quiz 4", score: 88 },
];

const COLORS = ["#607afb", "#ff9800", "#4caf50", "#f44336"];

const ProjectInsights = () => {
    const navigate = useNavigate();
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#0f111a] cursor-pointer" onClick={()=>navigate('/dashboard')}>
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h2 className="text-[#0f111a] text-lg font-bold leading-tight tracking-[-0.015em]">
                EveAI
              </h2>
            </div>

            <div className="flex items-center gap-9">
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">
                Subjects
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/schedule">
                Schedule
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/notes">
                Notes
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/practice-quiz">
                Quizzes
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#56618f] flex border-none bg-[#e9eaf2] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-full placeholder:text-[#56618f] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer" onClick={()=>navigate('/settings')}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2K0yPHWEtSwcIsz1hZKNhRkF25bqRC7RGnAxaiiZf_Y4_Z0tgVCHDQ77ZWnciq7lBBc61RXycsLCefqjs0wkEnD6gICIrvBfLAK4Z9PL9PKlxPQ6_4FCSoKDra4vp-_CZ_MmzZ7Ua3dcTweTSM3q3gvhZ4eocwBUkCgLy0kIKS8Mqkexqnud9Q84orDqBkT0nvnqJRTRwdSFoNGDeMxfj-bFnrwi8AAYycpIzPcOLrSxE8PwOtTvJv3x8JQ4U_K8sn6JFVulRUxf4")',
              }}
            />
          </div>
        </header>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Daily Progress */}
          <Card>
            <CardContent>
              <h2 className="text-lg font-bold mb-4">Daily Progress</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="progress" stroke="#607afb" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Weekly Progress */}
          <Card>
            <CardContent>
              <h2 className="text-lg font-bold mb-4">Weekly Progress</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#607afb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Study vs Hobby */}
          <Card>
            <CardContent>
              <h2 className="text-lg font-bold mb-4">Study vs Hobby</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={studyVsHobby}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {studyVsHobby.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quiz Scores */}
          <Card>
            <CardContent>
              <h2 className="text-lg font-bold mb-4">Quiz Scores</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={quizScores}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quiz" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#607afb" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectInsights;
