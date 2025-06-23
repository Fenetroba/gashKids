import React, { useState } from 'react'
import Header from '@/components/gust/Header'
import Footer from '@/components/gust/Footer'
import { Link } from 'react-router-dom'
import axios from '../lib/Axios'

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios('/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Registration successful!');
      } else {
        setMessage(data.message || 'Registration failed');
      }
    } catch (err) {
      setMessage('An error occurred');
    }
    setLoading(false);
  };

  return (
    <section className="magicpattern">
      <Header />
      <div className="flex flex-col items-center text-[var(--parent4)] justify-center min-h-screen ">
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--parent2)] p-5 h-100 shadow-lg rounded-2xl w-[300px]"
        >
          <h2 className="text-2xl font-bold mb-10 text-center ">Register</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full text-[var(--parent1)] font-bold cursor-pointer rounded-2xl py-2 roundedtransition bg-[var(--parent3)]"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500">{message}</p>
          )}
          <p className="mt-10 text-center">
            Already have an account? <Link to="/auth/login" className="text-blue-400">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </section>
  );
}

export default Register