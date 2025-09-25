import React from "react";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
    const navigate = useNavigate();
    
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f9f9fb] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9eaf2] px-10 py-3">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-[#0f111a]">
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
              <h2 className="text-[#0f111a] text-lg font-bold leading-tight tracking-[-0.015em]">
                EveAI
              </h2>
            </div>

            <div className="flex items-center gap-9">
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/subjects">
                Subjects
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/schedule">
                Schedule
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/notes">
                Notes
              </a>
              <a className="text-[#0f111a] text-sm font-medium leading-normal" href="/practice-quiz">
                Quizzes
              </a><a className="text-[#0f111a] text-sm font-medium leading-normal" href="/insights">
                Insights
              </a>
            </div>
          </div>

          <div className="flex flex-1 justify-end gap-8">
            <label className="flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#56618f] flex border-none bg-[#e9eaf2] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0f111a] focus:outline-0 focus:ring-0 border-none bg-[#e9eaf2] focus:border-none h-full placeholder:text-[#56618f] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                />
              </div>
            </label>

            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer " onClick={() => navigate("/settings")}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2K0yPHWEtSwcIsz1hZKNhRkF25bqRC7RGnAxaiiZf_Y4_Z0tgVCHDQ77ZWnciq7lBBc61RXycsLCefqjs0wkEnD6gICIrvBfLAK4Z9PL9PKlxPQ6_4FCSoKDra4vp-_CZ_MmzZ7Ua3dcTweTSM3q3gvhZ4eocwBUkCgLy0kIKS8Mqkexqnud9Q84orDqBkT0nvnqJRTRwdSFoNGDeMxfj-bFnrwi8AAYycpIzPcOLrSxE8PwOtTvJv3x8JQ4U_K8sn6JFVulRUxf4")',
              }}
            />
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0f111a] tracking-light text-[32px] font-bold leading-tight">Welcome back, Sarah!</p>
                <p className="text-[#56618f] text-sm font-normal leading-normal">
                  Here's your personalized learning dashboard for today.
                </p>
              </div>
            </div>

            <div className="p-4 @container">
              <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGrBUL650iArmgFd0pwunkQdPmaYaRuKVpstJRhIjPZL-WzpN3iyKxr7NVRmnm4u7_2f7R8yowFoaPG4s4K0SIsB6VQaRweQQiHlHY1JkTIr5PHVDOATpUJNP_8ci6e2QjR6h6Tsk-elVFc8yOS6D0293MAN4YtcBTWJ9b0ymFwcw35aOEryRLzHHU0onn-vPdZDpc6eb9Ts3L7AUs9O5kmdrZEAqbmempjgrMJJpW6gETb165BX5mjIZL_KRMxsLAbU3nTqm21ufK")',
                  }}
                />
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                  <p className="text-[#0f111a] text-lg font-bold leading-tight tracking-[-0.015em]">Interactive Schedule</p>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#56618f] text-base font-normal leading-normal">
                        View your personalized learning schedule for today. Click on any event to see more details or make changes.
                      </p>
                      <p className="text-[#56618f] text-base font-normal leading-normal">Today's Schedule</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eaf2]">
                <p className="text-[#0f111a] text-base font-medium leading-normal">Progress</p>
                <p className="text-[#0f111a] tracking-light text-2xl font-bold leading-tight">75%</p>
                <p className="text-[#07883d] text-base font-medium leading-normal">+10%</p>
              </div>

              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eaf2]">
                <p className="text-[#0f111a] text-base font-medium leading-normal">Streak</p>
                <p className="text-[#0f111a] tracking-light text-2xl font-bold leading-tight">5 days</p>
                <p className="text-[#07883d] text-base font-medium leading-normal">+1 day</p>
              </div>

              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e9eaf2]">
                <p className="text-[#0f111a] text-base font-medium leading-normal">Subjects</p>
                <p className="text-[#0f111a] tracking-light text-2xl font-bold leading-tight">3</p>
                <p className="text-[#07883d] text-base font-medium leading-normal">+1</p>
              </div>
            </div>

            <h2 className="text-[#0f111a] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Quick Actions
            </h2>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer hover:border-2" onClick={() => navigate("/assistant")}
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSi40f1JsxnqPSQBDZF4f90wsXX3nlq5Iixfk7QcNUzkHQDuZ3e222moYhUYaAiH7qlV7YF9KCRqoLpcfmSgLTZ2D9dvlV2neX7hZDj1OOVK7veKT62ROp7pvjNo1CuT86MxFN4ooXrgz8sJhkaT-qWuIZwzeifC0Ov7wni2nZEJpUNYjpZz7eIx_gx23ogd7gAsRPhhHztLyaiTupihoqEo7lTUF7wDGLnq-fdQ-Z1MBUtOqrdeKBGWhU6BeTWm710oAm02r2x3v8")',
                  }}
                />
                <p className="text-[#0f111a] text-base font-medium leading-normal">Ask a Doubt</p>
              </div>

              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer hover:border-2" onClick={() => navigate("/quiz")}
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPPBLl2FYlUlhl7CDQndTPJTMwCyoYiHaq4NzCTpqd7HEvMWbEuVMQ64qyPwuVKehmGGfcEhxnHS2h0hSl5Uq8giR-yym5cNnG_Jk9sAMlhA2pB0I8O67zhO-ozkr2y5xUOFVe7_xkbfiLXa-Q3a4CRG1IcWzIw7vruJfN4APprLQ4BZ4xxaxAmvn58bGnbFg7iyf-IJ46o2yIQ4GBJzqyqSRgImGjCX145XRGV1H1byoWX3fEeu5InFi762NL8siegHWmFJc_TjDU")',
                  }}
                />
                <p className="text-[#0f111a] text-base font-medium leading-normal">Generate Quiz</p>
              </div>

              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer hover:border-2" onClick={() => navigate("/notes")}
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9buc366hE0vpKu6Xj-5lzVMhepxO_nQ0OsnTYa1L0iCeD62N6LLNGXpmiIFZGwjjtt_7BhXOyCU-0y-3CBR_Z3dCYy_MJ4eIThrSiCwmYBF8JSCjq6S1gIjR5nHaewelk60xIvq69aul4Z2Utg4-Bq0ekI29KLA_oQnb2l1Dyu3yy1L0-uIjBG59dbkqU1f2S3vrcM_82fv6goy9U6C9iGXCoj8ifiVZp8ZrZ6qnDgJBtRYSsCe_ECE6idp4VwiVzXx4PV6l6DVOp")',
                  }}
                />
                <p className="text-[#0f111a] text-base font-medium leading-normal">View Notes</p>
              </div>

              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer hover:border-2" onClick={() => navigate("/schedule")}
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPEH6uxKtI52KgpC1mBp2gC937wkQ8AAgP039rE-IlCGtjCzBU_4ajFdvf8Xgh6jhqJLC4Qa7-1Aj0XifjdET4hKvsh-hhywto0qJJfHXSgsERHYI_Sidm0ZtXFXYpspgg1DXYnxUvTCus5eeKuLFsrE6zxuisRVarXB3ccfeXTnqH1lCQ_0NTHk4KleTqAHUGVLNycXXTY7tX9dgUU9jYd0FLykA6xHQLiikn-rWZhA5wmZJlLUt9MfYgEMSqAuJ20FeqlCc8e0CZ")',
                  }}
                />
                <p className="text-[#0f111a] text-base font-medium leading-normal">Edit Schedule</p>
              </div>

              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer hover:border-2" onClick={() => navigate("/settings")}
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7iQQeHXWwA7UPD6mG8pWIHS-uL4awjxxepXejxOHY1c4cYFg-5Vc9MgE6b-spUN3jIZgnl4NK8eUbPlhIbTDMJtZ03JMIa0-xIa2HY6cNnwDH_SDmmUEryVDqBmRTDUTZ7yjsErU8VCfUcWm5ZLuYs2r0EgAzrIJw7IW9v6_t2P2ehUcsUpooFB6ZoilTx5gKrLPVrILywguSMDg9YYf-BhH02yMKGgMHiMB4cZ3M77NTVcjVK34Bpr7VciiOAatwQWw-ynzhXvE")',
                  }}
                />
                <p className="text-[#0f111a] text-base font-medium leading-normal">Change Subjects/Hobbies</p>
              </div>
            </div>
          </div>
        </div>
         <button
          onClick={() => navigate("/assistant")}
          className="fixed bottom-6 right-6 bg-[#0f111a] text-white p-4 rounded-full shadow-lg hover:bg-[#2a2f45] transition-all duration-200 flex items-center justify-center"
          title="AI Assistant"
        >
          {/* AI Icon (you can replace with any svg/logo) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
