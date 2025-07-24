import React, { useEffect, useState } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Layers } from 'lucide-react';
import CV from "../../public/cv.pdf";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 text-white bg-zinc-800 shadow-md transition-all duration-1000 ease-out transform ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        } overflow-x-hidden`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-20 md:py-3 py-2 flex items-center justify-between md:grid md:grid-cols-3">
        <h1 className="md:text-2xl text-md font-bold">Irfan Mohmand</h1>

        <nav className="hidden md:flex justify-center gap-8 font-semibold">
          <a href="#home" className="hover:text-red-400 transition duration-300">Home</a>
          <a href="#about" className="hover:text-red-400 transition duration-300">About</a>
          <a href="#skills" className="hover:text-red-400 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-red-400 transition duration-300">Projects</a>
          <a href="#experience" className="hover:text-red-400 transition duration-300">Experience</a>
        </nav>

        <div className="hidden md:flex justify-end">
          <a
            href={CV}
            download
            className="py-1 px-5 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-500 to-blue-600 hover:opacity-90 transition duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="md:hidden flex justify-end w-full mx-20">
          <button onClick={toggleMenu} className="transition-transform duration-300">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
      >
        <div className="backdrop-blur-md w-[90%] bg-gradient-to-b from-[#111827cc] to-[#1f2937cc] border-t border-gray-600 px-6 py-6 rounded-b-2xl shadow-2xl space-y-4 text-center font-medium">
          <MobileNavLink to="#home" icon={<Home />} label="Home" toggleMenu={toggleMenu} />
          <MobileNavLink to="#about" icon={<User />} label="About" toggleMenu={toggleMenu} />
          <MobileNavLink to="#skills" icon={<Code />} label="Skills" toggleMenu={toggleMenu} />
          <MobileNavLink to="#projects" icon={<Layers />} label="Projects" toggleMenu={toggleMenu} />
          <MobileNavLink to="#experience" icon={<Briefcase />} label="Experience" toggleMenu={toggleMenu} />

          <a
            href={CV}
            download
            className="inline-block mt-4 py-2 px-6 rounded-2xl font-semibold text-white bg-gradient-to-r from-red-500 to-blue-600 hover:scale-105 transform transition duration-300 shadow-md"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}

// Reusable mobile link component
function MobileNavLink({ to, icon, label, toggleMenu }) {
  return (
    <a
      href={to}
      onClick={toggleMenu}
      className="flex items-center justify-center gap-2 text-white hover:text-red-400 transition duration-300"
    >
      {icon}
      {label}
    </a>
  );
}

export default Navbar;
