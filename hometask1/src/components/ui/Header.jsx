import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = ({ scrollToContact }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `text-[12px] font-medium leading-none transition ${
      isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-900"
    }`;

  const handleContactClick = () => {
    if (location.pathname === "/") {
      scrollToContact?.();
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToContact?.();
      }, 100);
    }
  };

  return (
    <header className="bg-[#f8f8f8]">
      <div className="mx-auto flex h-20.5 max-w-280 items-center justify-between px-6">
        <Link
          to="/"
          className="text-[14px] font-semibold tracking-[0.22em] text-slate-900"
        >
          Booking
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <NavLink to="/" className={navClass}>
            Hotels
          </NavLink>

          <NavLink to="/catalog" className={navClass}>
            Hotel details
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About us
          </NavLink>

          <button
            type="button"
            onClick={handleContactClick}
            className="text-[12px] font-medium leading-none text-slate-400 transition hover:text-slate-900"
          >
            Contact
          </button>
        </nav>

        <Link
          to="/register"
          className="inline-flex h-9.5 items-center justify-center rounded-full bg-[#43a86f] px-5 text-[11px] font-semibold text-white transition hover:opacity-90"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;
