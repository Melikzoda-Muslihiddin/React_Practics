import { Link } from "react-router-dom";

const Footerses = () => {
  return (
    <footer className="bg-[#f3f6fb] px-6 py-14 text-[#0b1a3a]">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="text-2xl font-bold text-[#1399ee]">
            SOFTCLUB
          </Link>

          <p className="mt-6 max-w-[320px] text-[18px] leading-8 text-[#435375]">
            Master an in-demand IT profession and start earning with modern
            technologies and strong practice.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Navigation</h3>

          <div className="mt-6 flex flex-col gap-4 text-[18px] text-[#435375]">
            <Link to="/" className="hover:text-[#1399ee]">
              Courses
            </Link>
            <Link to="/about" className="hover:text-[#1399ee]">
              About
            </Link>
            <Link to="/login" className="hover:text-[#1399ee]">
              Login
            </Link>
            <Link to="/register" className="hover:text-[#1399ee]">
              Register
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Contacts</h3>

          <div className="mt-6 flex flex-col gap-4 text-[18px] text-[#435375]">
            <p>info@softclub.tj</p>
            <p>(+992) 558 700 900</p>
            <p>Rahimi street 12, Dushanbe</p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d5cff] text-white"
            >
              f
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2e9fff] text-white"
            >
              t
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7f39fb] text-white"
            >
              i
            </a>
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14b85a] text-white"
            >
              w
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerses;
