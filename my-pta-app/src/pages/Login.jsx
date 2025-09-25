import React, { useState } from "react";
// Import React Router components for routing
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ForgotPassword from "../Components/ForgotPassword";
import Modal from "../Components/Modal";

// A single-file React app requires all components to be in one file.
// Here are placeholder components for the routes.

// The original Login component, now placed inside the main App component.
const Login = () => {
    // Initialize state variables for email and password inputs using the useState hook.
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [forgotPassword, setForgotPassword] = useState(false);

    const handleClose = () => {
        setForgotPassword(prev => !prev);
    }
    
    // The useNavigate hook must be used inside a component that is a child of a <Router>.
    const navigate = useNavigate();

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            {/* Header */}
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0d0f1c]">
                        <div className="size-4">
                            {/* Logo */}
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_6_543)">
                                    <path
                                        d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_543">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
                            EveAI
                        </h2>
                    </div>
                </header>

                {/* Login Form */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0d0f1c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            Welcome back
                        </h2>

                        {/* Email Input */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0d0f1c] text-base font-medium leading-normal pb-2">
                                    Email
                                </p>
                                <input
                                    type="email" // Added type for proper form handling
                                    placeholder="Enter your email"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border  bg-[#f8f9fc] border-[#ced2e9] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
                                    value={email} // Binds the input value to the state
                                    onChange={(e) => setEmail(e.target.value)} // Updates the state on every change
                                />
                            </label>
                        </div>

                        {/* Password Input */}
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0d0f1c] text-base font-medium leading-normal pb-2">
                                    Password
                                </p>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
                                    value={password} // Binds the input value to the state
                                    onChange={(e) => setPassword(e.target.value)} // Updates the state on every change
                                />
                            </label>
                        </div>

                        {/* Login Button */}
                        <div className="flex px-4 py-3">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate("/ask-class")}>
                                <span className="truncate" >Log in</span>
                            </button>
                        </div>

                        {/* Google Login */}
                        <div className="flex px-4 py-3">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#607afb] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
                                {/* Removed the <FcGoogle> component and replaced it with a simple SVG */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M22.613 12.234c0-.608-.052-1.196-.15-1.764h-10.463v3.313h5.922a4.57 4.57 0 0 1-1.99 2.983v2.162h2.784c1.63-1.503 2.57-3.698 2.57-6.313z" fill="#4285f4"/>
                                    <path d="M12.001 23.999c3.23 0 5.92-1.07 7.894-2.89l-2.784-2.162c-.752.5-1.716.8-3.003.8-2.31 0-4.275-1.554-4.97-3.628h-2.883v2.247c1.372 2.723 4.296 4.753 7.746 4.753z" fill="#34a853"/>
                                    <path d="M7.03 14.896c-.18-.5-.27-.923-.27-1.464s.09-.964.27-1.464v-2.247h-2.883c-.707 1.408-1.127 3.016-1.127 4.71s.42 3.302 1.127 4.71l2.883-2.247z" fill="#fbbc05"/>
                                    <path d="M12.001 7.15c1.298 0 2.45.45 3.364 1.314l2.36-2.36c-1.465-1.39-3.37-2.254-5.724-2.254-3.45 0-6.374 2.03-7.746 4.752l2.883 2.247c.695-2.074 2.66-3.628 4.97-3.628z" fill="#ea4335"/>
                                </svg>
                                <span className="truncate text-white" onClick={() => navigate("/ask-class")}>Log in with SearchEngineCo</span>
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <p className="text-[#47569e] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer" onClick={() => handleClose()}>
                            Forgot password?
                        </p>
                        {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />} />}


                        {/* Create Account Button */}
                        <div className="flex px-4 py-3">
                            <button
                                onClick={() => navigate("/signup")}
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#4CAF50] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                            >
                                <span className="truncate">Create an Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;