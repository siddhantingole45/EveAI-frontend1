import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/notes", label: "Notes" },
  { to: "/schedule", label: "Schedule" },
  { to: "/assistant", label: "Assistant" },
  { to: "/insights", label: "Insights" },
];

const AppShell = ({
  title,
  children,
  hideNav = false,
  hideSearch = false,
  headerAction,
  className = "",
}) => {
  const navigate = useNavigate();

  return (
    <div className={`min-h-screen bg-[#f8f9fc] text-[#0d0f1c] ${className}`}>
      <div className="border-b border-[#e9eaf2] bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-lg font-bold text-[#0d0f1c]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#607afb] text-white">
                E
              </span>
              EveAI
            </button>
            {!hideNav && (
              <nav className="hidden items-center gap-4 md:flex">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-[#eef2ff] text-[#1d4ed8]"
                          : "text-[#47569e] hover:bg-[#eff2ff] hover:text-[#1d4ed8]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            )}
          </div>

          <div className="flex flex-1 items-center justify-between gap-4 md:justify-end">
            {!hideSearch && (
              <div className="hidden flex-1 md:block">
                <input
                  type="text"
                  placeholder="Search EveAI"
                  className="w-full rounded-2xl border border-[#d2d6e4] bg-[#f5f7ff] px-4 py-3 text-sm text-[#0f111a] outline-none transition focus:border-[#607afb]"
                />
              </div>
            )}
            {headerAction && <div>{headerAction}</div>}
            <button
              type="button"
              onClick={() => navigate("/settings")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef2ff] text-[#1d4ed8]"
            >
              U
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-[1200px] px-6 py-6">
        {title && (
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#0f111a]">{title}</h1>
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default AppShell;
