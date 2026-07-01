import contactHero from "../assets/images/services/consulting.webp";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendMessage } from "../services/contactService";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    try {

      setLoading(true);

      await sendMessage({
        name,
        email,
        subject,
        message,
      });

      alert(
        "Message sent successfully!\n\nOur team will contact you shortly."
      );

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="bg-slate-950 text-white">

      {/* Hero Section */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[3px] text-emerald-400 font-semibold mb-3">
              Contact Us
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Let's Build Something
              <span className="text-emerald-400"> Amazing Together</span>
            </h1>

            <p className="text-slate-300 text-lg leading-8">
              Whether you're looking for web development, AI solutions,
              internships, cloud services, or digital marketing, our team is
              ready to help you transform your ideas into reality.
            </p>

          </motion.div>

          <motion.img
            src={contactHero}
            alt="Business Consultation"
            className="rounded-3xl h-[430px] w-full object-cover shadow-xl"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

        </div>

      </section>

      {/* Contact Details & Form */}

      <section className="pb-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex gap-5">

              <FaPhoneAlt className="text-emerald-400 text-2xl mt-1" />

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Phone
                </h3>

                <p className="text-slate-300">
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <FaEnvelope className="text-emerald-400 text-2xl mt-1" />

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Email
                </h3>

                <p className="text-slate-300">
                  info@leetechleap.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <FaMapMarkerAlt className="text-emerald-400 text-2xl mt-1" />

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Office
                </h3>

                <p className="text-slate-300">
                  Chennai, Tamil Nadu, India
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <FaClock className="text-emerald-400 text-2xl mt-1" />

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Working Hours
                </h3>

                <p className="text-slate-300">
                  Monday - Saturday
                </p>

                <p className="text-slate-300">
                  9:00 AM - 6:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 rounded-3xl p-8 space-y-6"
          >

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-emerald-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-emerald-400"
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-emerald-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-emerald-400"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </section>

      {/* Map */}

      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-10">
            Find Us
          </h2>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[450px] rounded-3xl border-0"
            loading="lazy"
          ></iframe>

        </div>

      </section>

    </div>
  );
}

export default Contact;