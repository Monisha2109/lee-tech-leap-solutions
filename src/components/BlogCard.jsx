function BlogCard({
  title,
  image,
  date,
  category,
  description,
}) {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">

        <p className="text-emerald-400 text-sm mb-2">
          {category} • {date}
        </p>

        <h2 className="text-2xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-slate-300 leading-7 mb-6">
          {description}
        </p>

        <button className="text-emerald-400 font-semibold hover:text-emerald-300 transition">
          Read More →
        </button>

      </div>

    </div>
  );
}

export default BlogCard;