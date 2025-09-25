import React from "react";
import { useNavigate } from "react-router-dom";


const WeeklySchedule = () => {
        const navigate = useNavigate();
    
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0f111a] cursor-pointer" onClick={()=>navigate('/dashboard')}>
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0f111a] text-lg font-bold leading-tight tracking-[-0.015em]">
              EveAI
            </h2>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/dashboard">
                Dashboard
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">
                Subjects
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">
                Schedule
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="#">
                Resources
              </a>
            </div>
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#607afb] text-[#f8f9fc]gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
              <div className="text-amber-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                </svg>
              </div>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer " onClick={()=>navigate('/settings')}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeUg7mJm64UAVDdk45cIXGm2cs9zsU9Ce08Z-jdMxEbo5GyAzrUeysUED-aioBA85sJVhPLs9Z4h53_ofBKeqlZ9xVxaE0XAX339eLkZ6SFZmKjQ1zYURzFWd05Bxt17Y-Y-VCwVoNfnp2-cVTtWQee3esAVYwNeRQ9j2_kVtqcpKqGQG50c5qZvMB5bk8mrYA54o9JPG3UOkeTgFNrFlTv3WTpdPMuu9iVQ0cqhA7tevLB1wnK_182_wfCAB81nFTGwwNFZCS03wC")',
              }}
            ></div>
          </div>
        </header>

        {/* Title + Button */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#0f111a] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Weekly Schedule
              </p>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#607afb] text-[#f8f9fc]text-sm font-medium leading-normal" onClick={() => navigate("/regenerate-schedule")}>
                <span className="truncate text-amber-50 ">Regenerate Schedule</span>
              </button>
            </div>

            {/* Tabs */}
            <div className="pb-3">
              <div className="flex border-b border-[#d2d6e4] px-4 gap-8">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                  <a
                    key={day}
                    className={`flex flex-col items-center justify-center border-b-[3px] ${
                      index === 0
                        ? "border-b-[#e9ecfa] text-[#0f111a]"
                        : "border-b-transparent text-[#56618f]"
                    } pb-[13px] pt-4`}
                    href="#"
                  >
                    <p
                      className={`${
                        index === 0 ? "text-[#0f111a]" : "text-[#56618f]"
                      } text-sm font-bold leading-normal tracking-[0.015em]`}
                    >
                      {day}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#d2d6e4] bg-[#f9f9fb]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#f9f9fb] ">
                      <th className="px-4 py-3 text-[#0f111a] w-[400px] text-sm font-medium leading-normal text-center">
                        Time
                      </th>
                      <th className="px-4 py-3 text-[#0f111a] w-[400px] text-sm font-medium leading-normal text-center">
                        Subject/Hobby
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["9:00 AM - 10:00 AM", "Math"],
                      ["10:00 AM - 11:00 AM", "Science"],
                      ["11:00 AM - 12:00 PM", "History"],
                      ["12:00 PM - 1:00 PM", "Lunch Break"],
                      ["1:00 PM - 2:00 PM", "English"],
                      ["2:00 PM - 3:00 PM", "Art"],
                      ["3:00 PM - 4:00 PM", "Free Time"],
                      ["4:00 PM - 5:00 PM", "Sports"],
                      ["5:00 PM - 6:00 PM", "Music"],
                      ["6:00 PM - 7:00 PM", "Reading"],
                    ].map(([time, subject]) => (
                      <tr key={time} className="border-t border-t-[#d2d6e4]">
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#56618f] text-sm font-normal leading-normal">
                          {time}
                        </td>
                        <td className="h-[72px] px-4 py-2 w-[400px] text-[#0f111a] text-sm font-normal leading-normal">
                          {subject}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklySchedule;
