import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f3f3f3] px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-black">404</h1>
        <p className="mb-6 text-lg text-black/70">Page not found</p>
        <Link
          to="/"
          className="rounded bg-[#ff3b3f] px-6 py-3 font-semibold text-white"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
