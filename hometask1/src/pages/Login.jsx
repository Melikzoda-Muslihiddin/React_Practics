import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.email === form.email && user.password === form.password,
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    login(foundUser);
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-[#07122e] px-6 py-16 text-white">
      <div className="mx-auto max-w-130 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
        <h1 className="text-center text-4xl font-bold">Login</h1>

        <p className="mt-4 text-center text-white/65">
          Enter your account to continue learning
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block text-lg text-white/80">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#1aa0f5]"
            />
          </div>

          <div>
            <label className="mb-2 block text-lg text-white/80">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#1aa0f5]"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#1aa0f5] px-6 py-4 text-lg font-medium text-white transition hover:bg-[#1190e3]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-white/65">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#5bc2ff] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
