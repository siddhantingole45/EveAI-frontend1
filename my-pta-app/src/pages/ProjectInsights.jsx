import React from "react";
import AppShell from "../Components/AppShell";
import { Card, CardContent } from "../Components/Card";
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
  return (
    <AppShell title="Insights">
      <div className="grid gap-6 lg:grid-cols-2">
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
    </AppShell>
  );
};

export default ProjectInsights;
