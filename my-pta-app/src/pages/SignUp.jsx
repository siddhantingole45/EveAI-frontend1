import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/client"; // ✅ Import your new API client

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState(null);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const inputFields = [
        { label: "Full Name", placeholder: "Full Name", type: "text", value: fullName, setter: setFullName },
        { label: "Email", placeholder: "Email", type: "email", value: email, setter: setEmail },
        { label: "Password", placeholder: "Password", type: "password", value: password, setter: setPassword },
        { label: "Confirm Password", placeholder: "Confirm Password", type: "password", value: confirmPassword, setter: setConfirmPassword },
    ];

    const avatars = [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDJQUjfUueUNIlUgh9gbaXtfc5ra9_GOUSopWx4tgSddoK0edauoWbNzL6vrFYwhcyuFyD2bqjR9hxJQ19XYx1f7_7Zx3b2--5WPXge-S3dlWeG-TKHTNGML_44mH0Bl7J1KhloatSNgIJc7A7HbxFdlU5kn4WVMGg_GQwGaaL75VOyRSFJTSXSYVtThejtC7ht1cuo0ONJ5VJFde9TCvHfxv6OpM64gBK8rHYpQzLQ8gUVhwS8Bz2RmHiQhW4jXqrwmUsEpivTkC3i",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCvNxSatyN9xNMp--aNNgFZhfnlHx0w0J24tH43zeyAtbcopCWhr42SFFPz7T-1GrV5i6bbXC52-9LWtLe0MnndvYcTChgxsWzuD7sRcqDcjIowGfRoXiICFup8-Q2APwhhREGPtMUzzivsbFKI9VFIH96iM0kwUhC57Ss94-o78M3C64st6hXFGrKHGxZpod88r-42w0N9Fchoh69Ncl2Fisuz-ZrYBsMPgfmHm7vFhSotFwpVjquNY-g5b7bZGvplP4BjyP5E1lrq",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCw0EXJ0599dp32kW6PrNts_JpxjlVBdGSNwlY36UkyGxGQlYcifexlevk1guFi5rOx8asVVITL15dzOMYY9bJsub4GrMHik8-O_RI91UV068fgcscXiklORX_jhTIoNhkHz-CJdgE16Fd5bnKtOofe-lR5cS94bFQiTCbN_LmBj4gT-hC_NfSPtKHncNklDINgRBrjZo27JwvSxQnW8J1fQBXJ154yjz0BFwsQlstYniEnZ5RtfC_1e8hG2_9W1KwX87eN_44Stnn9",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuARcahHm_J6wGLU8ntk3DIdc1qQSfhiowb8Ux73asy71pBgnkHo2s7qloAuT1GLm-Bm00Yx8vdigAZsx6MlDcNqQGVhrC1MCx91Un2ICXNWB0fVW61Pf_9a5svUgtEiRV3ZfkKCrhIDcW8iH2QNeo0OVWRBOaSVxTg7EmzgXm9YnisnqSI4DuLUApF_eQb3ZTa06W8LxYWYah2-5tkkgZjzcFTUOuvsqD0h6OTLS1MpWNbOzVFGE4G_zVGBnKbJa5DgiSZ7l4autano",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA4hJHi2sBzyBe8wnXBEUZ0YRD7pTZgHqDQY7YEUiEiQsRKwO8kexGxa3_jzk5Hd4BdX7zpdHOF8WZKAPhSar6M5ZwF3Eo7ShhxfpRmWJ_KhppqWjTZvhziJRwIH4hDF23Ud8k_zRbCcNHKaV-wFOQk21Iap4Abksy7NWcIGpILIPqS4xVMwkQIqr_uyOES78gO0ofznagITaFZFzf7I81zRekqanweERdhrSYudYc-Xnpq8jiWDt608TcRbG7wCW6orndvjrAAzX99",
    ];

    const handleAvatarSelect = (idx) => setSelectedAvatar(idx);

    // ✅ New SignUp Handler
    const handleSignUp = async () => {
        setError(""); // Clear previous errors

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            // Backend expects a standard JSON body for signup
            await apiClient.post("/auth/signup", {
                name: fullName,
                email: email,
                password: password
            });

            // Upon success, redirect to login page (we can also prompt the user)
            alert("Account created successfully! Please log in.");
            navigate("/login");
        } catch (err) {
            console.error("Signup Error:", err);
            setError(err.response?.data?.detail || "Signup failed. Please try again.");
        }
    };

    return (
        <div
            className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden"
            style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
        >
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0d0f1c]">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">EveAI</h2>
                    </div>
                </header>

                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-h-[960px] flex-1">
                        <h2 className="text-[#0d0f1c] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
                            Create your account
                        </h2>

                        {/* ✅ Display Error if any */}
                        {error && (
                            <div className="px-4 text-red-500 text-sm text-center font-semibold">
                                {error}
                            </div>
                        )}

                        {inputFields.map((field, index) => (
                            <div key={index} className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                <label className="flex flex-col min-w-40 flex-1">
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border-none bg-[#e6e9f4] h-14 placeholder:text-[#47569e] p-4 text-base font-normal leading-normal"
                                        value={field.value}
                                        onChange={(e) => field.setter(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSignUp()}
                                    />
                                </label>
                            </div>
                        ))}

                        <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                            Choose your avatar
                        </h3>
                        <div className="flex items-center px-4 py-3 justify-center">
                            {avatars.map((src, idx) => (
                                <div
                                    key={idx}
                                    className={`overflow-visible ${idx === 4 ? "w-11" : "w-[34px]"} cursor-pointer`}
                                    onClick={() => handleAvatarSelect(idx)}
                                >
                                    <div
                                        className={`bg-center bg-no-repeat aspect-square bg-cover border-[#f8f9fc] bg-[#e6e9f4] text-[#47569e] rounded-full flex items-center justify-center size-11 border-4 ${selectedAvatar === idx ? 'border-blue-500' : ''}`}
                                        style={{ backgroundImage: `url(${src})` }}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex px-4 py-3">
                            <button 
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]" 
                                onClick={handleSignUp} // ✅ Attach handler
                            >
                                <span className="truncate">Sign Up</span>
                            </button>
                        </div>

                        <p className="text-[#47569e] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer" onClick={() => navigate("/login")}>
                            Already have an account? Log In
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;