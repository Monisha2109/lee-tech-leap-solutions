import webDevelopment from "../assets/images/services/web-development.jpg";
import ai from "../assets/images/services/ai.jpg";
import seo from "../assets/images/services/seo.png";
import digitalMarketing from "../assets/images/services/digital-marketing.jpeg";
import cloud from "../assets/images/services/cloud.jpeg";
import consulting from "../assets/images/services/consulting.webp";
import internship from "../assets/images/services/internship.jpeg";
import training from "../assets/images/services/training.jpeg";

const services = [
  {
    id: 1,
    title: "Web Development",
    image: webDevelopment,
    description:
      "We build responsive, modern, and high-performance websites tailored to your business needs.",

    points: [
      "Responsive Business Websites",
      "React.js Web Applications",
      "E-Commerce Development",
      "Admin Dashboards",
      "REST API Integration",
    ],
  },

  {
    id: 2,
    title: "AI Solutions",
    image: ai,
    description:
      "Integrate Artificial Intelligence into your business to automate processes and improve efficiency.",

    points: [
      "AI Chatbots",
      "Machine Learning",
      "Process Automation",
      "Predictive Analytics",
      "Custom AI Solutions",
    ],
  },

  {
    id: 3,
    title: "SEO Optimization",
    image: seo,
    description:
      "Improve your website ranking and attract more customers with advanced SEO strategies.",

    points: [
      "On-Page SEO",
      "Technical SEO",
      "Keyword Research",
      "Performance Optimization",
      "Google Ranking",
    ],
  },

  {
    id: 4,
    title: "Digital Marketing",
    image: digitalMarketing,
    description:
      "Grow your online presence through result-driven digital marketing campaigns.",

    points: [
      "Social Media Marketing",
      "Google Ads",
      "Content Marketing",
      "Email Campaigns",
      "Brand Promotion",
    ],
  },

  {
    id: 5,
    title: "Cloud Solutions",
    image: cloud,
    description:
      "Modern cloud infrastructure for scalable and secure applications.",

    points: [
      "Cloud Migration",
      "AWS Solutions",
      "Cloud Security",
      "Backup & Recovery",
      "DevOps Support",
    ],
  },

  {
    id: 6,
    title: "Internship Programs",
    image: internship,
    description:
      "Industry-oriented internships designed to give students real-world project experience.",

    points: [
      "Real Projects",
      "Mentor Support",
      "Certification",
      "Placement Guidance",
      "Skill Development",
    ],
  },

  {
    id: 7,
    title: "Business Consulting",
    image: consulting,
    description:
      "Helping businesses leverage technology for sustainable growth and innovation.",

    points: [
      "Technology Consulting",
      "Digital Transformation",
      "Business Strategy",
      "IT Planning",
      "Startup Guidance",
    ],
  },

  {
    id: 8,
    title: "Technical Training",
    image: training,
    description:
      "Professional training programs in the latest technologies for students and professionals.",

    points: [
      "Web Development",
      "Artificial Intelligence",
      "Cloud Computing",
      "Programming Languages",
      "Interview Preparation",
    ],
  },
];

export default services;