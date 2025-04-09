import { Layout, Star, Code } from "lucide-react";
import spilltheitea from "../.././assets/spilltheitea.png";
import motion2024 from "../.././assets/motion2024.jpg";
import esumbong from "../.././assets/esumbong.png";
import hiccup from "../.././assets/hiccup.png";
import placeholder from "../.././assets/placeholder.webp";
import personalwebsite from "../.././assets/personalwebsite.png";
import glspayroll from "../.././assets/glspayroll.png";

const projects = [
  {
    id: 1,
    title: "Unified Attendance and Salary Computation for Tiger Cookies MNL",
    description:
      "This streamlines attendance tracking and salary computation, ensuring efficient workforce management for bake shops. Automate payroll, track employee hours, and simplify operations—all in one system.",
    image: placeholder,
    tags: ["Software Development"],
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "TailwindCSS"],
    repoLink: "https://github.com/mikko13/TigerCookiesMNL",
    icon: <Layout size={24} />,
  },
  {
    id: 2,
    title: "MOTION 2024",
    description:
      "MOTION 2024 include speakers from media organizations in the country to share their insights and advocacies. It envisions a future in which media and AI collaborate responsibly, contributing to a more informed and responsible media landscape.",
    image: motion2024,
    tags: ["Non-IT Related"],
    technologies: ["Program Management", "Teamwork", "Leadership"],
    icon: <Star size={24} />,
  },
  {
    id: 3,
    title: "Spill the i-Tea",
    description:
      "This event aims to teach the students about the ins and outs of the IT Community, specifically about two alumni's journey as an IT student, and how things worked in the field for them, and how UST brought about the best in them as students from the IT community. ",
    image: spilltheitea,
    tags: ["Non-IT Related"],
    technologies: ["Teamwork", "Financial Analysis", "Analytical Skills"],
    icon: <Star size={24} />,
  },
  {
    id: 4,
    title: "Payroll Management System for GLS Manpower Services",
    description:
      "A web-based application designed to streamline employee salary processing. It enables efficient payroll management with features for employee data handling, salary computation, and automated payroll generation. The system ensures accuracy, reduces manual workload, and generates payroll reports for seamless financial management.",
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
    repoLink: "https://github.com/mikko13/gls",
    icon: <Code size={24} />,
  },
];

export default projects;
