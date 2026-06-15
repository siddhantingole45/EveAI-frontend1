import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client";
import ForgotPassword from "../Components/ForgotPassword";
import Modal from "../Components/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setForgotPassword((prev) => !prev);
  };

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("username", email);
      formData.append("password", password);

      const response = await apiClient.post("/auth/login", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      localStorage.setItem("access_token", response.data.access_token);
      const onboardingCompleted = localStorage.getItem("onboard_completed") === "true";
      navigate(onboardingCompleted ? "/dashboard" : "/onboarding/class");
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.detail || "Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] text-[#0d0f1c]">
      <div className="mx-auto w-full max-w-[560px] px-6 py-10">
        <div className="rounded-[32px] border border-[#e6e9f4] bg-white p-8 shadow-sm">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#64748b]">Welcome back</p>
            <h1 className="mt-2 text-3xl font-bold text-[#0f172a]">Log in to EveAI</h1>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <label className="block text-sm font-medium text-[#0f172a]">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
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
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter your password"
                className="mt-2 w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-4 py-3 text-sm text-[#0f172a] outline-none transition focus:border-[#607afb] focus:ring-2 focus:ring-[#dbe4ff]"
              />
            </label>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full rounded-3xl bg-[#607afb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4f63df]"
            >
              Log in
            </button>

            <button
              type="button"
              className="w-full rounded-3xl border border-[#d2d6e4] bg-[#f8fafc] px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:border-[#607afb] hover:text-[#1d4ed8]"
            >
              <div className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.613 12.234c0-.608-.052-1.196-.15-1.764h-10.463v3.313h5.922a4.57 4.57 0 0 1-1.99 2.983v2.162h2.784c1.63-1.503 2.57-3.698 2.57-6.313z" fill="#4285f4" />
                  <path d="M12.001 23.999c3.23 0 5.92-1.07 7.894-2.89l-2.784-2.162c-.752.5-1.716.8-3.003.8-2.31 0-4.275-1.554-4.97-3.628h-2.883v2.247c1.372 2.723 4.296 4.753 7.746 4.753z" fill="#34a853" />
                  <path d="M7.03 14.896c-.18-.5-.27-.923-.27-1.464s.09-.964.27-1.464v-2.247h-2.883c-.707 1.408-1.127 3.016-1.127 4.71s.42 3.302 1.127 4.71l2.883-2.247z" fill="#fbbc05" />
                  <path d="M12.001 7.15c1.298 0 2.45.45 3.364 1.314l2.36-2.36c-1.465-1.39-3.37-2.254-5.724-2.254-3.45 0-6.374 2.03-7.746 4.752l2.883 2.247c.695-2.074 2.66-3.628 4.97-3.628z" fill="#ea4335" />
                </svg>
                Continue with SearchEngineCo
              </div>
            </button>

            <div className="mt-3 flex items-center justify-between text-sm text-[#475569]">
              <button type="button" onClick={handleClose} className="underline transition hover:text-[#1d4ed8]">
                Forgot password?
              </button>
              <button type="button" onClick={() => navigate("/signup")} className="font-semibold text-[#0f172a] transition hover:text-[#1d4ed8]">
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>

      {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />} />}
    </div>
  );
};

export default Login;
