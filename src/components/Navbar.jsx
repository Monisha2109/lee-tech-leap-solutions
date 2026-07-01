import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { user, userData, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-400 border-b-2 border-emerald-400 pb-1 font-semibold drop-shadow-[0_0_6px_#34d399]"
      : "hover:text-emerald-400 transition";

  return (
    <nav className="bg-slate-950 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/">
          <h1 className="text-2xl font-bold text-emerald-400">
            LTLS
          </h1>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-8 font-medium">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/internships" className={navLinkClass}>
            Internships
          </NavLink>

          <NavLink to="/blog" className={navLinkClass}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </div>

        {/* Desktop Right Side */}

        <div className="hidden md:block">

          {!user ? (

            <Link
              to="/login"
              className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

          ) : (

            <div className="relative group">

              <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-xl font-semibold">

                👤 {userData?.name || "User"}

              </button>

              <div className="absolute right-0 mt-3 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">

                <Link
                  to="/profile"
                  className="block px-5 py-3 hover:bg-slate-800"
                >
                  👤 My Profile
                </Link>

                <Link
                  to={userData?.role === "admin" ? "/admin" : "/dashboard"}
                  className="block px-5 py-3 hover:bg-slate-800"
                >
                  📊 Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="w-full text-left px-5 py-3 hover:bg-slate-800 text-red-400"
                >
                  🚪 Logout
                </button>

              </div>

            </div>

          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col px-6 py-4 space-y-4">

            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>

            <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>

            <NavLink to="/projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>

            <NavLink to="/internships" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Internships
            </NavLink>

            <NavLink to="/blog" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>

            <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>

            <hr className="border-slate-700" />

            {!user ? (

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-emerald-500 text-center py-3 rounded-xl font-semibold"
              >
                Get Started
              </Link>

            ) : (

              <>

                <div className="font-semibold text-emerald-400">
                  👤 {userData?.name}
                </div>

                <Link
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                >
                  My Profile
                </Link>

                <Link
                  to={userData?.role === "admin" ? "/admin" : "/dashboard"}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-left text-red-400"
                >
                  Logout
                </button>

              </>

            )}

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;