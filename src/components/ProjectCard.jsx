function ProjectCard({
  title,
  image,
  description,
  technologies,
}) {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

      <div className="p-8">

        <h2 className="text-2xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-slate-300 leading-7 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">

          {technologies.map((tech, index) => (

            <span
              key={index}
              className="bg-slate-800 px-4 py-2 rounded-full text-sm text-emerald-400"
            >
              {tech}
            </span>

          ))}

        </div>

        <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold">
          View Details
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;