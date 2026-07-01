import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function ServiceCard({
  id,
  image,
  title,
  description,
}) {
  return (
    <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-3">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-emerald-400 mb-4">
          {title}
        </h3>

        <p className="text-slate-300 leading-7 mb-6">
          {description}
        </p>

        <Link
          to={`/services/${id}`}
          className="flex items-center gap-2 text-emerald-400 font-semibold hover:text-white transition"
        >
          Learn More
          <FaArrowRight />

        </Link>

      </div>

    </div>
  );
}

export default ServiceCard;