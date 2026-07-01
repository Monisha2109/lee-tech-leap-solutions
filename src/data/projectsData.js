import dashboard from "../assets/images/projects/business-dashboard.jpeg";
import chatbot from "../assets/images/projects/ai-chatbot.webp";
import ecommerce from "../assets/images/projects/ecommerce.jpeg";

const projects = [
  {
    title: "Business Management Dashboard",
    image: dashboard,
    description:
      "A modern dashboard developed for businesses to monitor sales, employees, analytics, and reports in one place.",

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB"
    ]
  },

  {
    title: "AI Customer Support Chatbot",
    image: chatbot,
    description:
      "An AI-powered chatbot that automates customer support, answers FAQs, and improves response time.",

    technologies: [
      "Python",
      "OpenAI API",
      "React",
      "Firebase"
    ]
  },

  {
    title: "E-Commerce Platform",
    image: ecommerce,
    description:
      "A scalable online shopping platform with secure authentication, payments, and inventory management.",

    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Stripe"
    ]
  }
];

export default projects;