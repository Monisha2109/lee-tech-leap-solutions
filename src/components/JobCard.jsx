function JobCard({
  title,
  location,
  type,
  experience,
  skills,
  onApply,
  applied,
}) {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 hover:border hover:border-emerald-400 transition duration-300 shadow-lg">

      <h2 className="text-2xl font-bold mb-4 text-white">
        {title}
      </h2>

      <div className="space-y-2 text-slate-300">

        <p>📍 {location}</p>

        <p>💼 {type}</p>

        <p>⭐ {experience}</p>

      </div>

      <div className="flex flex-wrap gap-3 my-6">

        {skills.map((skill, index) => (

          <span
            key={index}
            className="bg-slate-800 px-4 py-2 rounded-full text-sm text-emerald-400"
          >
            {skill}
          </span>

        ))}

      </div>

      <button
        onClick={onApply}
        disabled={applied}
        className={`w-full py-3 rounded-xl font-semibold transition
          ${
            applied
              ? "bg-green-600 cursor-not-allowed"
              : "bg-emerald-500 hover:bg-emerald-600"
          }`}
      >
        {applied ? "Applied ✓" : "Apply Now"}
      </button>

    </div>
  );
}

export default JobCard;