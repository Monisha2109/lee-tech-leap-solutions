import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-teal-400">
            LTLS
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/services">Services</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/internships">Internships</Link>

          <Link to="/careers">Careers</Link>

          <Link to="/blog">Blog</Link>

          <Link to="/contact">Contact</Link>

        </div>

        {/* Button */}
        <button className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-lg">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;