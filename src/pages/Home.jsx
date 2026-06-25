function Home() {
    return (
        <div className="bg-slate-950 text-white">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Empowering Innovation
                    <span className="text-teal-400"> Through Technology</span>
                </h1>

                <p className="max-w-3xl text-slate-300 text-lg md:text-xl mb-8">
                    Lee Tech Leap Solutions helps businesses, students, and startups
                    transform ideas into digital solutions through cutting-edge
                    technology, AI, and innovation.
                </p>

                <div className="flex gap-4">
                    <button className="bg-teal-500 hover:bg-teal-600 px-8 py-3 rounded-lg font-semibold">
                        Explore Services
                    </button>

                    <button className="border border-teal-500 px-8 py-3 rounded-lg hover:bg-teal-500 transition">
                        Contact Us
                    </button>
                </div>

            </section>
            <section className="py-20 bg-slate-900">

                <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

                    <div className="bg-slate-800 p-8 rounded-xl text-center">
                        <h2 className="text-4xl font-bold text-teal-400">1000+</h2>
                        <p className="mt-2 text-slate-300">Projects Delivered</p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl text-center">
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
            {/* Services Preview Section */}

            <section className="py-20 bg-slate-950">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Our Core Services
                    </h2>

                    <p className="text-slate-400 mt-4">
                        Comprehensive solutions designed for businesses,
                        professionals, startups and students.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-bold text-teal-400 mb-4">
                            Digital Marketing
                        </h3>
                        <p>
                            SEO, social media marketing, branding, lead generation and growth strategies.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-bold text-teal-400 mb-4">
                            Education & Training
                        </h3>
                        <p>
                            AI training, placement preparation, technical workshops and career development.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-bold text-teal-400 mb-4">
                            Business Solutions
                        </h3>
                        <p>
                            HR support, process optimization, operations management and business growth.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-xl hover:scale-105 transition">
                        <h3 className="text-xl font-bold text-teal-400 mb-4">
                            Professional Consulting
                        </h3>
                        <p>
                            Strategic guidance from industry experts for startups and enterprises.
                        </p>
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