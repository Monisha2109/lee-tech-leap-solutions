import heroImage from "../assets/images/hero.jpg";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Home() {
    return (
        <div className="bg-slate-950 text-white">

            {/* Hero Section */}

<section className="min-h-screen flex items-center py-12 md:py-0">

<div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">                            Empowering Innovation
                            <span className="text-emerald-400"> Through Technology</span>
                        </h1>

<p className="text-slate-300 text-base md:text-lg mb-8 leading-7 md:leading-8">                            Lee Tech Leap Solutions empowers businesses,
                            startups and students through technology,
                            digital transformation, consulting and
                            professional training services.
                        </p>

<div className="flex flex-col sm:flex-row gap-4">                            <Link
                                to="/services"
className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold transition text-center"                            >
                                Explore Services
                            </Link>

                            <Link
                                to="/contact"
                                className="border border-emerald-500 px-6 py-3 md:px-8 rounded-lg hover:bg-emerald-500 transition text-center"                            >
                                Contact Us
                            </Link>
                        </div>

                    </motion.div>

                    {/* Right Image */}
                    <div>

                        <motion.img
                            src={heroImage}
                            alt="Technology Team"
className="w-full h-72 sm:h-96 md:h-[500px] object-cover rounded-3xl shadow-2xl"                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />


                    </div>

                </div>

            </section>

            {/*other statistic session */}

            <section className="py-20 bg-slate-900">

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 px-4 md:px-6">
                    <div className="bg-slate-800 p-8 rounded-xl text-center">
                        <h2 className="text-4xl font-bold text-teal-400">1000+</h2>
                        <p className="mt-2 text-slate-300">Projects Delivered</p>
                    </div>

                    <div className="bg-slate-800 p-5 md:p-8 rounded-xl text-center">
                        <h2 className="text-4xl font-bold text-teal-400">5000+</h2>
                        <p className="mt-2 text-slate-300">Students Trained</p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl text-center">
                        <h2 className="text-4xl font-bold text-teal-400">500+</h2>
                        <p className="mt-2 text-slate-300">Business Clients</p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl text-center">
                        <h2 className="text-4xl font-bold text-teal-400">10+</h2>
                        <p className="mt-2 text-slate-300">Technology Services</p>
                    </div>

                </div>

            </section>
            {/* Premium Services Section */}

            <section className="py-24 bg-slate-950">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold">
                            Our Professional Services
                        </h2>

                        <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">
                            We deliver innovative technology solutions that help businesses,
                            startups, and students accelerate their digital transformation journey.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {services.map((service) => (

                            <ServiceCard
                                key={service.id}
                                id={service.id}
                                image={service.image}
                                title={service.title}
                                description={service.description}
                            />

                        ))}

                    </div>

                </div>

            </section>
            {/* Why Choose Us Section */}
            <section className="py-20 bg-slate-900">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why Choose LTLS?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-slate-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4 text-teal-400">
                                Expert Team
                            </h3>
                            <p>
                                Experienced professionals delivering innovative digital solutions.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4 text-teal-400">
                                Industry Projects
                            </h3>
                            <p>
                                Hands-on experience through real client and internship projects.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-8 rounded-xl">
                            <h3 className="text-xl font-semibold mb-4 text-teal-400">
                                Innovation First
                            </h3>
                            <p>
                                Focused on AI, cloud technologies, and modern software development.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            {/* About LTLS Section */}
            <section className="py-20 bg-slate-950">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div>
                            <h2 className="text-4xl font-bold mb-6">
                                About LTLS
                            </h2>

                            <p className="text-slate-300 leading-8">
                                Lee Tech Leap Solutions is committed to empowering businesses,
                                institutions and professionals through innovative technology,
                                digital transformation, consulting and training solutions.

                                Our mission is to create measurable impact through practical,
                                scalable and future-ready services.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-10">
                            <h3 className="text-3xl font-bold text-teal-400 mb-4">
                                20+ Years
                            </h3>

                            <p>
                                Combined industry expertise across consulting,
                                technology, marketing and professional development.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Home;