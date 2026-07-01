import { Link } from "react-router-dom";

function ServiceSection({
    title,
    description,
    points,
    image,
    reverse,
}) {
    return (
        <section
            id={title.toLowerCase().replace(/\s+/g, "-")}
            className="py-16 bg-slate-950 text-white scroll-mt-28"
        >

            <div
                className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start`}
            >

                {/* Image */}

                <div className={reverse ? "lg:order-2" : "lg:order-1"}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-[350px] object-cover rounded-3xl shadow-xl hover:scale-105 transition duration-500"
                    />
                </div>

                {/* Content */}

                <div className={reverse ? "lg:order-1" : "lg:order-2"}>

                    <p className="text-emerald-400 uppercase tracking-[3px] text-sm font-semibold mb-2">
                        Our Service
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h2>

                    <p className="text-slate-300 text-base leading-7 mb-6">
                        {description}
                    </p>

                    <ul className="space-y-3">

                        {points.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center gap-3 text-slate-200"
                            >
                                <span className="text-emerald-400 text-xl">
                                    ✓
                                </span>

                                <span>{item}</span>

                            </li>
                        ))}

                    </ul>

                    <Link
                        to="/login"
                        className="inline-block mt-10 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold transition duration-300"
                    >
                        Get Started
                    </Link>
                </div>

            </div>

        </section>
    );
}

export default ServiceSection;