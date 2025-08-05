import { Layout, Star, Code } from "lucide-react";
import spilltheitea from "../.././assets/spilltheitea.png";
import motion2024 from "../.././assets/motion2024.jpg";
import glspayroll from "../.././assets/glspayroll.png";
import tigercookiesmnl from "../.././assets/tigercookiesmnl.png";
import aittorney from "../.././assets/aittorney.png";
import artify from "../.././assets/artify.png";
import ustamp from "../.././assets/ustamp.png";
import esumbong from "../.././assets/esumbong.png";
import hiccup from "../.././assets/hiccup.png"

const projects = [
  {
    id: 1,
    title:
      "Ai.ttorney: A Mobile Application for AI-Powered Legal Education and Rights Awareness",
    description:
      "Developed an AI-powered legal mobile application featuring an intelligent chatbot, a law firm locator, integrated lawyer consultation services, and legal knowledge base.",
    image: aittorney,
    tags: ["Software Development"],
    technologies: ["React Native", "Python", "PostgreSQL"],
    repoLink: "https://github.com/mikko13/#",
    icon: <Layout size={24} />,
  },
  {
    id: 2,
    title: "Unified Attendance and Salary Computation for Tiger Cookies MNL",
    description:
      "Created a web-based biometric (facial recognition) attendance tracker with automated payroll processing, reducing manual errors for Tiger Cookies MNL",
    image: tigercookiesmnl,
    tags: ["Software Development"],
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "TailwindCSS"],
    repoLink: "https://github.com/mikko13/TigerCookiesMNL",
    icon: <Layout size={24} />,
  },
  {
    id: 3,
    title: "MOTION 2024",
    description:
      "Co-directed MOTION 2024, an event by TOMCAT-UST that brought together university media organizations in the Philippines to promote responsible tech and AI use in media.",
    image: motion2024,
    tags: ["Non-IT Related"],
    technologies: ["Program Management", "Teamwork", "Leadership"],
    icon: <Star size={24} />,
  },
  {
    id: 4,
    title: "Spill the i-Tea",
    description:
      "Helped in planning the budget and financial logistics for Spill the i-Tea, an event where UST IT alumni shared their academic and professional journeys to current UST IT Students.",
    image: spilltheitea,
    tags: ["Non-IT Related"],
    technologies: ["Teamwork", "Financial Analysis", "Analytical Skills"],
    icon: <Star size={24} />,
  },
  {
    id: 5,
    title: "Payroll Management System for GLS Manpower Services",
    description:
      "Developed a web-based payroll system automating salary calculations, tax deductions, and payslip generation for GLS Manpower Services.",
    image: glspayroll,
    tags: ["Software Development"],
    technologies: [
      "MongoDB",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "Vite",
      "TailwindCSS",
      "Typescript",
    ],
    repoLink: "https://github.com/mikko13/GLS-Payroll-Management-System",
    icon: <Code size={24} />,
  },
  {
    id: 6,
    title: "Artify - Art and Design Showcase Application",
    description:
      "Developed a creative platform that empowers artists to showcase their work, connect with a vibrant community, and collaborate through features like digital portfolios and feedback tools",
    image: artify,
    tags: ["Software Development"],
    technologies: ["Kotlin", "Firebase"],
    repoLink: "https://github.com/mikko13/#",
    icon: <Code size={24} />,
  },
  {
    id: 7,
    title: "USTamp – University of Santo Tomas Approval Management Platform",
    description:
      "Designed a web-based document approval system for the University of Santo Tomas, automating workflows for students, faculty, and staff to submit, review, and approve files efficiently",
    image: ustamp,
    tags: ["Software Development"],
    technologies: ["AngularJS", "MariaDB", "C#", "ASP.NET", "MaterializeCSS"],
    repoLink: "https://github.com/mikko13/#",
    icon: <Code size={24} />,
  },
  {
    id: 8,
    title: "E-SUMBONG - An Electronic Complaint Reporting Web Application",
    description:
      "Developed an electronic complaint reporting web application (E-SUMBONG) to streamline the submission and management of public complaints online",
    image: esumbong,
    tags: ["Software Development"],
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    repoLink: "https://github.com/mikko13/E-Sumbong",
    icon: <Code size={24} />,
  },
  {
    id: 9,
    title: "Hiccup Cafe Ordering System",
    description:
      "Developed an ordering system for Hiccup Cafe to streamline food and beverage orders, enhance customer experience, and support future franchise operations.",
    image: hiccup,
    tags: ["Software Development"],
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    repoLink: "https://github.com/mikko13/Hiccup-Website",
    icon: <Code size={24} />,
  },
];

export default projects;
