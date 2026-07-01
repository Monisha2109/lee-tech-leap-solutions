import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="bg-slate-950 text-white">

      <section className="py-24 text-center px-6">

        <h1 className="text-5xl font-bold mb-6">
          Our
          <span className="text-emerald-400"> Projects</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-300 text-lg">
          We build innovative software solutions that help businesses
          grow through modern technology, AI, and cloud computing.
        </p>

      </section>

      <section className="pb-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-6">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
            />

          ))}

        </div>

      </section>

      <section className="py-20 bg-slate-900 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Your Next Project?
        </h2>

        <p className="text-slate-300 mb-8">
          Let's transform your ideas into powerful digital solutions.
        </p>

        <Link
          to="/contact"
          className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold"
        >
          Contact Us
        </Link>

      </section>

    </div>
  );
}

export default Projects;