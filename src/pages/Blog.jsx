import BlogCard from "../components/BlogCard";
import blogs from "../data/blogData";
import { useState } from "react";
import { subscribeNewsletter } from "../services/newsletterService";


function Blog() {

  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    try {
      await subscribeNewsletter(email);

      alert("🎉 Successfully subscribed!");

      setEmail("");

    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <div className="bg-slate-950 text-white">

      {/* Hero */}

      <section className="py-24 text-center px-6">

        <h1 className="text-5xl font-bold mb-6">
          Latest <span className="text-emerald-400">Insights & Blogs</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          Stay updated with the latest trends in technology, artificial intelligence,
          web development, cloud computing, and digital transformation.
        </p>

      </section>

      {/* Blog Cards */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">

          {blogs.map((blog, index) => (

            <BlogCard
              key={index}
              {...blog}
            />

          ))}

        </div>

      </section>

      {/* Newsletter */}

      <section className="py-20 bg-slate-900">

        <div className="max-w-3xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>

          <p className="text-slate-300 mb-8">
            Subscribe to receive the latest technology articles, company news, and internship opportunities.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 w-full md:w-96 outline-none focus:border-emerald-400"
            />

            <button
              onClick={handleSubscribe}
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              Subscribe
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Blog;