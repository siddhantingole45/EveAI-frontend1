import React from "react";
import { useNavigate } from "react-router-dom";
import AppShell from "../Components/AppShell";

const Subject = () => {
  const navigate = useNavigate();

  // Example enrolled subjects
  const subjects = [
    {
      name: "Mathematics",
      desc: "Learn Algebra, Calculus, and Geometry",
      img: "https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg",
    },
    {
      name: "Science",
      desc: "Explore Physics, Chemistry, and Biology",
      img: "https://img.freepik.com/free-vector/flat-science-background_23-2148540790.jpg",
    },
    {
      name: "History",
      desc: "Understand Ancient, Medieval, and Modern history",
      img: "https://img.freepik.com/free-vector/history-subject-concept_23-2148738516.jpg",
    },
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
          <div className="flex items-center gap-8 cursor-pointer" onClick={() => navigate("/dashboard")}>
            <div className="flex items-center gap-4 text-[#0d0f1c]">
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
              <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
                EveAI
              </h2>
            </div>
            <div className="flex items-center gap-9">
              <a className="text-[#0d0f1c] text-sm font-medium" href="/dashboard">
                Dashboard
              </a>
              <a className="text-[#0d0f1c] text-sm font-medium" href="#">
                Library
              </a>
              <a className="text-[#0d0f1c] text-sm font-medium" href="#">
                Resources
              </a>
              <a className="text-[#0d0f1c] text-sm font-medium" href="#">
                Community
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            {/* Profile Image */}
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
              onClick={() => navigate("/settings")}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkC2FJhVK-2zFlBvujMa-uBHSRKQOy4zdBHlMTBzC7B0jlZhja-8KuzJtaH7PNiyF6lT-J7KQ_wHcwlWEl9kVWgbY_tdqH-7itno0fKArA6N0ZgCW8KNQgyLsED4UxL-sN6kw4ejFzmX65lrXqSmcoqD3vMkUgFDe20RmzU3FUu5oKFw0O8ihxtdLfDjXq2hGF2GV6jBLuMrjNGStbO-jpDPtD2M9Hm2SagUyl8lVuz6oEQqnLRSDhDifyEJ11OyMkLSRU32WaKKc3")',
              }}
            ></div>
          </div>
        </header>

        {/* Main Section */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title */}
            <div className="flex flex-wrap justify-center gap-3 p-4">
              <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight min-w-72">
                My Subjects
              </p>
              
            </div>

            {/* Subjects Grid */}
            <h3 className="text-[#0d0f1c] text-lg font-bold px-4 pb-2 pt-4">
              Enrolled Subjects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {subjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-xl p-4 bg-white shadow-md cursor-pointer transition-transform hover:scale-105"
                  // onClick={() => navigate(`/subject/${subject.name.toLowerCase()}`)}
                  onClick={() => navigate("/subjects/detail")}
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg w-full h-32">
                    <img
                      src={subject.img}
                      alt={subject.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-[#0d0f1c] font-bold text-lg mb-1">{subject.name}</h4>
                  <p className="text-[#47579e] text-sm">{subject.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
