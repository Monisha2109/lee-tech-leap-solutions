import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

function Dashboard() {
  const { user, userData } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white py-14 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Welcome */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold">
            Welcome Back,
            <span className="text-emerald-400">
              {" "}
              {userData?.name}
            </span>{" "}
            👋
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Manage your LTLS account from one place.
          </p>
        </motion.div>


        {/* Quick Actions */}

        <h2 className="text-3xl font-bold mb-6">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          <Link
            to="/services"
            className="bg-slate-900 rounded-2xl p-8 hover:bg-emerald-500 transition"
          >
            🌐
            <h3 className="mt-4 text-xl font-semibold">
              Services
            </h3>
          </Link>

          <Link
            to="/internships"
            className="bg-slate-900 rounded-2xl p-8 hover:bg-emerald-500 transition"
          >
            🎓
            <h3 className="mt-4 text-xl font-semibold">
              Internships
            </h3>
          </Link>

          <Link
            to="/projects"
            className="bg-slate-900 rounded-2xl p-8 hover:bg-emerald-500 transition"
          >
            💻
            <h3 className="mt-4 text-xl font-semibold">
              Projects
            </h3>
          </Link>

          <Link
            to="/contact"
            className="bg-slate-900 rounded-2xl p-8 hover:bg-emerald-500 transition"
          >
            📩
            <h3 className="mt-4 text-xl font-semibold">
              Contact
            </h3>
          </Link>

        </div>

        {/* Statistics */}

        <h2 className="text-3xl font-bold mb-6">
          Statistics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h1 className="text-5xl font-bold text-emerald-400">
              0
            </h1>

            <p className="mt-3 text-slate-400">
              Applications
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h1 className="text-5xl font-bold text-emerald-400">
              8
            </h1>

            <p className="mt-3 text-slate-400">
              Services
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h1 className="text-5xl font-bold text-emerald-400">
              1
            </h1>

            <p className="mt-3 text-slate-400">
              Notifications
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h1 className="text-5xl font-bold text-emerald-400">
              0
            </h1>

            <p className="mt-3 text-slate-400">
              Messages
            </p>
          </div>

        </div>

        {/* Recent Activity */}

        <h2 className="text-3xl font-bold mb-6">
          Recent Activity
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8">

          <ul className="space-y-5 text-lg">

            <li>✅ Account Created Successfully</li>

            <li>✅ Email Verified</li>

            <li>✅ Logged Into LTLS</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;