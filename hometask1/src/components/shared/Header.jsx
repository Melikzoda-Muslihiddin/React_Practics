import { NavLink } from "react-router-dom";

const Header = ({ onScrollToContact }) => {
  const navClass = ({ isActive }) =>
    `text-sm font-semibold uppercase tracking-[0.12em] transition ${
      isActive ? "text-[#ff3b3f]" : "text-[#111111]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-2">
        <NavLink to="/" className="shrink-0">
          <img
            src="/images/logo.svg"
            alt=""
            className="h-5 w-40 object-contain md:h-12"
          />
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <a
            href="#services"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111111] transition hover:text-[#ff3b3f]"
          >
            Services
          </a>

          <a
            href="#results"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#111111] transition hover:text-[#ff3b3f]"
          >
            Results
          </a>

          <NavLink to="/todo" className={navClass}>
            Todo
          </NavLink>
        </nav>

        <button
          onClick={onScrollToContact}
          className="rounded-sm bg-[#ff3b3f] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:opacity-90"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
