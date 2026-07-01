import internshipHero from "../assets/images/careers/career-hero.jpeg";
import internshipImage from "../assets/images/careers/internship-program.jpeg";
import { motion } from "framer-motion";
import JobCard from "../components/JobCard";
import jobs from "../data/jobsData";
import { useState } from "react";
import InternshipForm from "../components/InternshipForm";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Careers() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [openForm, setOpenForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [selectedInternship, setSelectedInternship] = useState("");

  const handleApply = (title) => {

    if (!user) {

      navigate("/login");

      return;

    }

    setSelectedInternship(title);

    setOpenForm(true);

  };
  return (

    <div className="bg-slate-950 text-white">

      {/* Hero */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h1 className="text-5xl font-bold mb-6">

              Launch Your Career Through
              <span className="text-emerald-400">
                Professional Internships
              </span>

            </h1>

            <p className="text-slate-300 text-lg leading-8">

              Join an innovative team passionate about building digital products, AI solutions, and next-generation software.

            </p>

          </motion.div>


          <motion.img
            src={internshipHero}
            alt=""
            className="rounded-3xl h-[420px] object-cover shadow-xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

        </div>

      </section>

      {/* Openings */}

      <section className="py-20">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">

            Available Internship Domains
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 px-6">

          {jobs.map((job, index) => (

            <JobCard
              key={index}
              {...job}
              onApply={() => {
                console.log("Apply clicked");
                handleApply(job.title);
              }}
            />

          ))}

        </div>

      </section>

      {/* Internship */}

      <section className="py-20 bg-slate-900">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">

          <img

            src={internshipImage}

            className="rounded-3xl h-[380px] object-cover"

          />

          <div>

            <h2 className="text-3xl font-bold mb-6">

              Why Join Our Internship Program?

            </h2>

            <p className="text-slate-300 leading-8">

              <ul className="space-y-4 text-slate-300">
                <li>✔ Work on live client projects</li>
                <li>✔ Learn from experienced industry mentors</li>
                <li>✔ Receive an internship completion certificate</li>
                <li>✔ Build an impressive portfolio</li>
                <li>✔ Improve communication and teamwork skills</li>
                <li>✔ Career guidance and placement support</li>
              </ul>
            </p>

            <button
              onClick={() => handleApply("General Internship")}
              className="mt-8 bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-xl font-semibold transition"
            >
              Apply Internship
            </button>

          </div>

        </div>

      </section>
      {openForm && (
        <InternshipForm
          internship={selectedInternship}
          onClose={() => setOpenForm(false)}
          onSuccess={() => { }}
        />
      )}
    </div>

  );

}

export default Careers;