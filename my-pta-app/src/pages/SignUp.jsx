import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");

    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await apiClient.post("/auth/signup", {
        name: fullName,
        email,
        password,
      });

      localStorage.removeItem("onboard_completed");
      alert("Account created successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error("Signup Error:", err);
      setError(err.response?.data?.detail || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#0d0f1c]">
      <div className="mx-auto w-full max-w-[560px] px-6 py-10">
        <div className="rounded-[32px] border border-[#e6e9f4] bg-white p-8 shadow-sm">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">Create your account</p>
            <h1 className="mt-2 text-3xl font-bold text-[#0f172a]">Sign up with EveAI</h1>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <label className="block text-sm font-medium text-[#0f172a]">
              Full Name
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignUp()}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
              />
            </label>

            <label className="block text-sm font-medium text-[#0f172a]">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignUp()}
                placeholder="Enter your email"
                className="mt-2 w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
              />
            </label>

            <label className="block text-sm font-medium text-[#0f172a]">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignUp()}
                placeholder="Create a password"
                className="mt-2 w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
              />
            </label>

            <label className="block text-sm font-medium text-[#0f172a]">
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignUp()}
                placeholder="Confirm your password"
                className="mt-2 w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
              />
            </label>

            <button
              type="button"
              onClick={handleSignUp}
              className="w-full rounded-3xl bg-[#607afb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4f63df]"
            >
              Sign Up
            </button>

            <div className="text-center text-sm text-[#475569]">
              Already have an account?{' '}
              <button type="button" onClick={() => navigate("/login")} className="font-semibold text-[#0f172a] transition hover:text-[#1d4ed8]">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
