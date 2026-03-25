import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { AuthContext } from "../context/AuthContext";

const Headerses = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { user, logout } = useContext(AuthContext);

  const handleLanguage = () => {
    if (language === "EN") changeLanguage("RU");
    else if (language === "RU") changeLanguage("TJ");
    else changeLanguage("EN");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07122e]/80 backdrop-blur">
      <div className="mx-auto flex max-w-300 items-center justify-between px-6 py-4 text-white">
        <Link to="/" className="text-xl font-bold">
          SOFTCLUB
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link to="/" className="hover:text-[#1aa0f5]">
            Courses
          </Link>
          <Link to="/about" className="hover:text-[#1aa0f5]">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full bg-white/10 px-3 py-2"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button
            onClick={handleLanguage}
            className="rounded-full bg-white/10 px-4 py-2 text-sm"
          >
            {language}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2">
                {user.name}
              </span>

              <button
                onClick={logout}
                className="rounded-full border border-red-400 px-4 py-2 text-sm text-red-300 hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-full border border-[#1aa0f5] px-5 py-2 text-sm text-[#1aa0f5] hover:bg-[#1aa0f5] hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headerses;
