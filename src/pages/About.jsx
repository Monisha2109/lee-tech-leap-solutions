import aboutImage from "../assets/images/about-company.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function About() {
    return (
        <div className="bg-slate-950 text-white">

            {/* Hero Section */}


            <section className="bg-slate-950 text-white py-24">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] gap-10 items-center px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >


                        <p className="text-emerald-400 uppercase tracking-widest font-semibold mb-4">
                            About Lee Tech Leap Solutions
                        </p>

                        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">                            Empowering Businesses Through
                            <span className="text-emerald-400"> Innovation & Technology</span>
                        </h1>

                        <p className="text-slate-300 text-base md:text-lg leading-8 mb-8 max-w-xl">                            Lee Tech Leap Solutions is a technology-driven company dedicated to
                            delivering innovative digital solutions, empowering businesses,
                            startups, and students through software development, AI solutions,
                            digital marketing, cloud technologies, and industry-oriented
                            internship programs.
                        </p>

                        <Link
                            to="/services"
                            className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition"
                        >
                            Explore Services
                        </Link>

                    </motion.div>

                    <div>

                        <motion.img
                            src={aboutImage}
                            alt="About Lee Tech Leap Solutions"
                            className="rounded-3xl shadow-2xl"
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        />

                    </div>

                </div>

            </section>
            {/* our story */}

            <section className="bg-slate-900 py-24 text-white">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-10">
                        Our Journey
                    </h2>

                    <p className="text-slate-300 text-lg leading-9 text-center max-w-5xl mx-auto">

                        Founded with the vision of bridging technology and innovation,
                        Lee Tech Leap Solutions has continuously evolved into a trusted
                        technology partner for businesses, startups, and aspiring professionals.

                        Our expertise spans web development, AI solutions, digital marketing,
                        cloud technologies, internship training, and business consulting,
                        enabling organizations to transform ideas into impactful digital experiences.

                    </p>

                </div>

            </section>

            {/* Company Overview */}
            <section className="py-20 bg-slate-900">

                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Who We Are
                    </h2>

                    <p className="text-slate-300 text-lg leading-8 text-center max-w-4xl mx-auto">
                        Lee Tech Leap Solutions is committed to delivering
                        innovative digital services, professional consulting,
                        education and technology solutions that help businesses
                        and individuals achieve measurable growth.
                    </p>

                </div>

            </section>
            {/* Mission & Vision */}

            <section className="bg-slate-950 py-24">

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

                    <div className="bg-slate-800 rounded-2xl p-10">

                        <h3 className="text-3xl font-bold text-emerald-400 mb-6">
                            Mission
                        </h3>

                        <p className="text-slate-300 leading-8">

                            Deliver innovative digital solutions that empower businesses,
                            students, and startups through cutting-edge technologies.

                        </p>

                    </div>

                    <div className="bg-slate-800 rounded-2xl p-10">

                        <h3 className="text-3xl font-bold text-emerald-400 mb-6">
                            Vision
                        </h3>

                        <p className="text-slate-300 leading-8">

                            Become a globally trusted technology company known
                            for innovation, excellence, and customer success.

                        </p>

                    </div>

                    <div className="bg-slate-800 rounded-2xl p-10">

                        <h3 className="text-3xl font-bold text-emerald-400 mb-6">
                            Core Values
                        </h3>

                        <ul className="space-y-3 text-slate-300">

                            <li>✔ Innovation</li>
                            <li>✔ Integrity</li>
                            <li>✔ Customer Success</li>
                            <li>✔ Continuous Learning</li>

                        </ul>

                    </div>

                </div>

            </section>
            {/* Why Choose Us */}

            <section className="bg-slate-900 py-24 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-5xl font-bold text-center mb-4">
                        Why Choose Lee Tech Leap Solutions?
                    </h2>

                    <p className="text-slate-400 text-center mb-16">
                        Delivering excellence through innovation, expertise, and customer-focused solutions.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1 */}

                        <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

                            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                                Industry Experts
                            </h3>

                            <p className="text-slate-300">
                                Experienced professionals delivering reliable technology solutions.
                            </p>

                        </div>

                        {/* Card 2 */}

                        <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

                            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                                Modern Technologies
                            </h3>

                            <p className="text-slate-300">
                                We use React, AI, Cloud Computing, and modern software development practices.
                            </p>

                        </div>

                        {/* Card 3 */}

                        <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

                            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                                Internship Programs
                            </h3>

                            <p className="text-slate-300">
                                Practical industry training with real-world projects and mentorship.
                            </p>

                        </div>

                        {/* Card 4 */}

                        <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

                            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                                Client-Centric Approach
                            </h3>

                            <p className="text-slate-300">
                                Every solution is designed to meet our clients' unique business goals.
                            </p>

                        </div>

                        {/* Card 5 */}

                        <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

                            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                                End-to-End Development
                            </h3>

                            <p className="text-slate-300">
                                From planning to deployment, we manage the complete software development lifecycle.
                            </p>

                        </div>

                        {/* Card 6 */}

                        <div className="bg-slate-800 p-8 rounded-2xl hover:-translate-y-2 transition duration-300">

                            <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                                Continuous Support
                            </h3>

                            <p className="text-slate-300">
                                Dedicated maintenance, updates, and technical support to ensure long-term success.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Company Statistics */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-5xl font-bold mb-4">
                            Our Impact in Numbers
                        </h2>

                        <p className="text-slate-400 text-lg">
                            Delivering measurable success through innovation and technology.
                        </p>

                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">

                            <h3 className="text-5xl font-bold text-emerald-400">
                                1000+
                            </h3>

                            <p className="mt-4 text-slate-300">
                                Projects Completed
                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">

                            <h3 className="text-5xl font-bold text-emerald-400">
                                5000+
                            </h3>

                            <p className="mt-4 text-slate-300">
                                Students Trained
                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">

                            <h3 className="text-5xl font-bold text-emerald-400">
                                500+
                            </h3>

                            <p className="mt-4 text-slate-300">
                                Business Clients
                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition duration-300">

                            <h3 className="text-5xl font-bold text-emerald-400">
                                98%
                            </h3>

                            <p className="mt-4 text-slate-300">
                                Client Satisfaction
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-24 bg-slate-950">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl p-16 text-center">

                        <h2 className="text-5xl font-bold text-white mb-6">
                            Let's Build Something Amazing Together
                        </h2>

                        <p className="text-white text-lg max-w-3xl mx-auto mb-10">
                            Whether you're a startup, business, or student, Lee Tech Leap Solutions
                            is ready to help transform your ideas into innovative digital solutions.
                        </p>

                        <Link
                            to="/contact"
                            className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:scale-105 transition"                            >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </section>





            {/* Timeline */}

            <section className="py-20 bg-slate-900">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-16">
                        Our Journey
                    </h2>

                    <div className="space-y-8">

                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h3 className="text-emerald-400 font-bold text-2xl">
                                2024
                            </h3>

                            <p>
                                Foundation of Lee Tech Leap Solutions with a vision to empower businesses through technology.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h3 className="text-emerald-400 font-bold text-2xl">
                                2025
                            </h3>

                            <p>
                                Expanded into consulting, training and digital transformation services.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl">
                            <h3 className="text-emerald-400 font-bold text-2xl">
                                2026
                            </h3>

                            <p>
                                Launched internship and professional development initiatives for students.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default About;