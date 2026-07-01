import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await loginUser(email, password);

      navigate("/");

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="bg-slate-900 rounded-3xl p-10 w-full max-w-md shadow-xl">

        <h1 className="text-4xl font-bold text-white mb-3 text-center">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Login to continue
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800 text-white px-5 py-4 rounded-xl outline-none border border-slate-700 focus:border-emerald-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-800 text-white px-5 py-4 rounded-xl outline-none border border-slate-700 focus:border-emerald-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-xl font-semibold text-white"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

        <p className="text-slate-400 text-center mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-emerald-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;