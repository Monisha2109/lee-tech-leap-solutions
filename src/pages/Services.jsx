import ServiceSection from "../components/ServiceSection";
import services from "../data/servicesData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Services() {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const timer = setTimeout(() => {
        const section = document.getElementById(`service-${id}`);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [id]);
  return (
    <div className="bg-slate-950 text-white">

      {/* Hero */}

      <section className="py-28 text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Our <span className="text-emerald-400">Services</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-slate-300">
          We empower businesses, startups, and students with innovative
          technology solutions, helping them transform ideas into successful
          digital products.
        </p>

      </section>

      {/* Services */}

      {services.map((service, index) => (
        <div key={service.id} id={`service-${service.id}`}>
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            points={service.points}
            image={service.image}
            reverse={index % 2 !== 0}
          />
        </div>
      ))}

    </div>
  );
}

export default Services;