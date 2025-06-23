import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-container w-full py-4 text-[var(--parent4)] bg-[var(--parent1)] text-center flex flex-col items-center gap-2 mt-8 ">
      <nav className="footer-nav flex gap-6 mb-2">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
      <div className="footer-copy text-sm text-[var(--parent4)] pt-6">
        &copy; {new Date().getFullYear()} GashKids. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer