import React from "react";
import { useNavigate } from "react-router-dom";


const Landing = () => {
      const navigate = useNavigate();
  
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f8f9fc] group/design-root"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex w-full h-full grow flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d0f1c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_543)">
                  <path
                    d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_543">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] ">EveAI</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">Features</a>
              <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">Pricing</a>
              <a className="text-[#0d0f1c] text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]" onClick={() => navigate("/signup")}>
              <span className="truncate">Get Started</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvim9cQTNlczDM8ncTO8_KKjLp9_MSCpq5R8jgrybQ9PXjLJ_GSTU9-3rvlvrJlTNiPFzCiiEXNO3G-I_nxS4SnBmEKQ-oqd1ZlSTnI-OYDHfKgIl2SCO9fTy7iVKFI0S5azMHOasndwmLWIAsPotOnESHe3EUQ3ILd6sSOdLGNkMvYEvk7EEArVCeT50SpFEGLSSeQT7HVcK_6JsHtztkF5ScIjO2qNK5ye1wzQmmxGQ97CKc9DjusRlKGj_wp8i6UpkgSjsEO1gK")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Your Personalized Learning Companion
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      EduAssist adapts to your learning style, providing tailored support and resources to help you achieve your academic goals.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]" onClick={() => navigate("/signup")}>
                    <span className="truncate ">Get Started</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="flex flex-col gap-10 px-4 py-10 @container text-center">
              <div className="flex flex-col text-center gap-4 ">
                <h1 className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                  Key Features
                </h1>
                <p className="text-[#0d0f1c] text-base font-normal leading-normal max-w-[720px] mx-auto">
                  EduAssist offers a range of features designed to enhance your learning experience.
                </p>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                {/* Feature 1 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#ced2e9] bg-[#f8f9fc] p-4 flex-col">
                  <div className="text-[#0d0f1c]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152..." />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d0f1c] text-base font-bold leading-tight">Personalized Learning Paths</h2>
                    <p className="text-[#47569e] text-sm font-normal leading-normal">
                      Receive customized study plans and resources based on your strengths and weaknesses.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#ced2e9] bg-[#f8f9fc] p-4 flex-col">
                  <div className="text-[#0d0f1c]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40..." />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d0f1c] text-base font-bold leading-tight">Progress Tracking</h2>
                    <p className="text-[#47569e] text-sm font-normal leading-normal">
                      Monitor your progress with detailed analytics and insights into your learning journey.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#ced2e9] bg-[#f8f9fc] p-4 flex-col">
                  <div className="text-[#0d0f1c]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192..." />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#0d0f1c] text-base font-bold leading-tight">Collaborative Study Groups</h2>
                    <p className="text-[#47569e] text-sm font-normal leading-normal">
                      Connect with peers and form study groups to learn together and share knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              EveAI
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
