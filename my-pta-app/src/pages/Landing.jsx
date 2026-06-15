import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#0f172a]">
      <div className="mx-auto max-w-[1400px] px-6 py-6">
        <header className="mb-10 flex flex-col gap-4 border-b border-[#e6e9f4] pb-5 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-lg font-bold text-[#0f172a]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#607afb] text-white">
              E
            </span>
            EveAI
          </button>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-[#475569]">
            <a href="#features" className="transition hover:text-[#1d4ed8]">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-[#1d4ed8]">
              How it works
            </a>
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-full border border-[#d2d6e4] px-4 py-2 text-sm font-semibold transition hover:border-[#607afb] hover:text-[#1d4ed8]"
            >
              Log in
            </button>
          </nav>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-[#eef2ff] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#1d4ed8]">
              Study smarter with AI
            </span>
            <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Personalized learning, faster progress, and tutor support in one app.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
              EveAI turns planning, notes, practice, and tutor chat into one consistent learning routine.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="inline-flex items-center justify-center rounded-full bg-[#607afb] px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#4f63df]"
              >
                Start free
              </button>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="inline-flex items-center justify-center rounded-full border border-[#d2d6e4] px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-[#607afb] hover:text-[#1d4ed8]"
              >
                Log in
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[#e6e9f4] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold">AI Tutoring</p>
                <p className="mt-2 text-sm text-[#475569]">Ask questions and get clear explanations anytime.</p>
              </div>
              <div className="rounded-3xl border border-[#e6e9f4] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold">Goal-driven plans</p>
                <p className="mt-2 text-sm text-[#475569]">Create schedules and study routines tailored to your subjects.</p>
              </div>
              <div className="rounded-3xl border border-[#e6e9f4] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold">Notes & review</p>
                <p className="mt-2 text-sm text-[#475569]">Keep notes and practice quizzes together in one place.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-[#eef2ff] via-[#eef4ff] to-[#ffffff] p-6 shadow-lg">
            <div className="rounded-[24px] bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4 border-b border-[#e6e9f4] pb-4">
                <div>
                  <p className="text-sm font-semibold text-[#1d4ed8]">EveAI Tutor</p>
                  <p className="mt-2 text-sm text-[#475569]">Ask anything and stay on track.</p>
                </div>
                <span className="rounded-2xl bg-[#eff6ff] px-3 py-1 text-xs font-semibold text-[#2563eb]">Live</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-[#f8fafc] p-4 text-sm text-[#111827] shadow-sm">
                  <p className="font-semibold">Eve</p>
                  <p className="mt-2 text-sm text-[#475569]">Hi! What do you want help learning today?</p>
                </div>
                <div className="rounded-3xl bg-[#eff6ff] p-4 text-sm text-[#0f172a]">
                  <p className="font-semibold">You</p>
                  <p className="mt-2 text-sm text-[#475569]">Help me practice faster and stay more organized.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-3xl bg-[#0f172a] px-4 py-3 text-sm text-white">Personalized plans</div>
                <div className="rounded-3xl bg-[#1d4ed8] px-4 py-3 text-sm text-white">Instant tutor chat</div>
                <div className="rounded-3xl bg-[#2563eb] px-4 py-3 text-sm text-white">Weekly practice routines</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-8 py-12">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">Key features</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Build better habits with one learning companion.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#475569]">
              From smart study sessions to helpful AI review, EveAI makes every study moment count.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-[#e6e9f4] bg-white p-8 shadow-sm">
              <p className="text-2xl font-bold">01</p>
              <h3 className="mt-4 text-xl font-semibold">Study plans that follow you</h3>
              <p className="mt-3 text-sm text-[#475569]">Stay organized with daily routines and subject-specific goals.</p>
            </div>
            <div className="rounded-3xl border border-[#e6e9f4] bg-white p-8 shadow-sm">
              <p className="text-2xl font-bold">02</p>
              <h3 className="mt-4 text-xl font-semibold">Ask the tutor anytime</h3>
              <p className="mt-3 text-sm text-[#475569]">Get instant explanations, examples, and study support.</p>
            </div>
            <div className="rounded-3xl border border-[#e6e9f4] bg-white p-8 shadow-sm">
              <p className="text-2xl font-bold">03</p>
              <h3 className="mt-4 text-xl font-semibold">Track your progress</h3>
              <p className="mt-3 text-sm text-[#475569]">See how your study habits improve week by week.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="rounded-[32px] border border-[#e6e9f4] bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">How it works</p>
              <h2 className="text-3xl font-bold">Get started in three easy steps.</h2>
            </div>
            <div className="space-y-4 rounded-3xl bg-[#f8fafc] p-6">
              <p className="text-lg font-semibold">1. Sign up</p>
              <p className="text-sm text-[#475569]">Create an account and start with a short onboarding flow.</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-[#f8fafc] p-6">
              <p className="text-lg font-semibold">2. Personalize</p>
              <p className="text-sm text-[#475569]">Choose your subjects, hobbies, and daily study rhythm.</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-[#f8fafc] p-6">
              <p className="text-lg font-semibold">3. Learn with AI</p>
              <p className="text-sm text-[#475569]">Use the assistant, notes, schedule, and quizzes to grow every day.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
