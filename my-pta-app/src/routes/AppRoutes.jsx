import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AskClass from "../pages/AskClass";
import AskSubjects from "../pages/AskSubjects";
import Personalize from "../pages/Personalize";
import Dashboard from "../pages/Dashboard";
import WeeklySchedule from "../pages/WeeklySchedule";
import RegenerateSchedule from "../pages/RegenerateSchedule";
import AIAssistant from "../pages/AIAssistant";
import AddNote from "../pages/AddNote";
import MyNotes from "../pages/MyNotes";
import PracticeQuiz from "../pages/PracticeQuiz";
import Quiz from "../pages/Quiz";
import ProjectInsights from "../pages/ProjectInsights";
import Settings from "../pages/Settings";
import SingleNote from "../pages/SingleNote";
import Subjects from "../pages/Subjects";
import SingleSubject from "../pages/SingleSubject";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ask-class" element={<AskClass />} />
        <Route path="/ask-subjects" element={<AskSubjects />} />
        <Route path="/personalize" element={<Personalize />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<WeeklySchedule />} />
        <Route path="/regenerate-schedule" element={<RegenerateSchedule />} />
        <Route path="/assistant" element={<AIAssistant />} />
        <Route path="/notes" element={<MyNotes />} />
        <Route path="/notes/single-note" element={<SingleNote />} />
        <Route path="/notes/add-note" element={<AddNote />} />
        <Route path="/practice-quiz" element={<PracticeQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/insights" element={<ProjectInsights />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/single-subject" element={<SingleSubject />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;