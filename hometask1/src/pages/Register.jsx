import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
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
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill all fields");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((user) => user.email === form.email);
    if (exists) {
      setError("User already exists");
      return;
    }
    const newUser = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      password: form.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    navigate("/login");
  };

  return (
    <section className="min-h-screen bg-[#07122e] px-6 py-16 text-white">
      <div className="mx-auto max-w-130 rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
        <h1 className="text-center text-4xl font-bold">Register</h1>

        <p className="mt-4 text-center text-white/65">
          Create your account and start learning
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block text-lg text-white/80">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/40 focus:border-[#1aa0f5]"
            />
          </div>
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
          <div>
            <label className="mb-2 block text-lg text-white/80">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              placeholder="Repeat your password"
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
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-white/65">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5bc2ff] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
