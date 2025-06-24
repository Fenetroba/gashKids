import Footer from "@/components/gust/Footer";
import Header from "@/components/gust/Header";
import React, { useState } from "react";
import "../app.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Load from "@/components/ui/Load";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/store/AuthSlice";
import { toast } from "sonner"

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loading } = useSelector((state) => state.auth);

const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(LoginUser(user)).then((result) => {
      toast(result.payload.message, {
        style: { background: '#333', color: '#fff' }
      })
      
    });
    console.log(user)

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
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={e => setUser({ ...user, password: e.target.value })}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center  text-[var(--parent1)] font-bold cursor-pointer rounded-2xl py-2 roundedtransition bg-[var(--parent3)]"
            disabled={loading}
          >
            {loading ? <Load/>: "Login"}
          </button>
     

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
