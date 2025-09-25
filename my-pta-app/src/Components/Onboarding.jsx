import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Onboarding = () => {
  const [customHobby, setCustomHobby] = useState("");
      const navigate = useNavigate();


  return (
    <div>
      {/* Add Custom Hobby */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Add a custom hobby"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg 
                       text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] 
                       bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] 
                       p-[15px] text-base font-normal leading-normal"
            value={customHobby}
            onChange={(e) => setCustomHobby(e.target.value)}
          />
        </label>
      </div>

      {/* Daily Time Commitment */}
      <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Daily Time Commitment
      </h3>

      {/* Study Time */}
      <div className="@container">
        <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
          <div className="flex w-full shrink-[3] items-center justify-between">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Study Time
            </p>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal @[480px]:hidden">
              2 hours
            </p>
          </div>
          <div className="flex h-4 w-full items-center gap-4">
            <div className="flex h-1 flex-1 rounded-sm bg-[#ced2e9]">
              <div className="h-full w-[32%] rounded-sm bg-[#607afb]"></div>
              <div className="relative">
                <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]"></div>
              </div>
            </div>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal hidden @[480px]:block">
              2 hours
            </p>
          </div>
        </div>
      </div>

      {/* Hobby Time */}
      <div className="@container">
        <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
          <div className="flex w-full shrink-[3] items-center justify-between">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Hobby Time
            </p>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal @[480px]:hidden">
              1 hour
            </p>
          </div>
          <div className="flex h-4 w-full items-center gap-4">
            <div className="flex h-1 flex-1 rounded-sm bg-[#ced2e9]">
              <div className="h-full w-[32%] rounded-sm bg-[#607afb]"></div>
              <div className="relative">
                <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]"></div>
              </div>
            </div>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal hidden @[480px]:block">
              1 hour
            </p>
          </div>
        </div>
      </div>

      {/* Breaks */}
      <div className="@container">
        <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row @[480px]:items-center">
          <div className="flex w-full shrink-[3] items-center justify-between">
            <p className="text-[#0d0f1c] text-base font-medium leading-normal">
              Breaks
            </p>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal @[480px]:hidden">
              30 minutes
            </p>
          </div>
          <div className="flex h-4 w-full items-center gap-4">
            <div className="flex h-1 flex-1 rounded-sm bg-[#ced2e9]">
              <div className="h-full w-[32%] rounded-sm bg-[#607afb]"></div>
              <div className="relative">
                <div className="absolute -left-2 -top-1.5 size-4 rounded-full bg-[#607afb]"></div>
              </div>
            </div>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal hidden @[480px]:block">
              30 minutes
            </p>
          </div>
        </div>
      </div>

      {/* Complete Button */}
      <div className="flex px-4 py-3 justify-center">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#607afb] text-[#f8f9fc] text-base font-bold leading-normal tracking-[0.015em]" onClick={() => navigate("/dashboard")}>
          <span className="truncate">Complete Onboarding</span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
