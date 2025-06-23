import Footer from "@/components/gust/Footer";
import Header from "@/components/gust/Header";
import React, { useState } from "react";
import "../app.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Login successful!");
        // Save token to localStorage or context
        localStorage.setItem("token", data.token);
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      setMessage("An error occurred");
    }
    setLoading(false);
  };

  return (
    <section className="magicpattern ">
      <Header />
      <div className="flex flex-col items-center text-[var(--parent4)] justify-center min-h-screen ">
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--parent2)] p-5 h-100  shadow-lg rounded-2xl w-[300px]"
        >
          <h2 className="text-2xl font-bold mb-16 text-center ">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full  text-[var(--parent1)] font-bold cursor-pointer rounded-2xl py-2 roundedtransition bg-[var(--parent3)]"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}

          <p className="mt-10 text-center">
            have't An account ? <Link to="/auth/signup" className="text-blue-400">Sign Up</Link><br />
            <Link className="text-orange-100 m-3">Forgot Password</Link>
          </p>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
