import {
  javascript,
  reactjs,
} from "../assets";

import cpp from '../assets/tech/cpp.png'
import cryptoimg from '../assets/cryptoimg.png'
import aiimg from '../assets/aiimg.png'
import cal from '../assets/cal.jpg'
import be from '../assets/company/be.png'
import tw from '../assets/company/science.jpg'
import sc from '../assets/company/school.png'
import stocks from '../assets/stock.png'
import front from '../assets/front.png'
import code from '../assets/coding.png'
import mysql from '../assets/tech/mysql.png'
import se from '../assets/company/se.png'
import py from '../assets/company/py.png'
import tab from '../assets/company/tab.png'
import ui from '../assets/company/ui.png'


export const navLinks = [

  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: code,
  },
  {
    title: "Frontend Developer",
    icon: front,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Stocks Trading",
    icon: stocks,
  },

];

const technologies = [
  {
    name: "Tableau",
    icon: tab,
  },
  {
    name: "Python",
    icon: py,
  },

 {
    name: "UI Path",
    icon: ui,
  },
  
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "MySQL",
    icon: mysql,
  },
 

const work = [
  {
    title: "AI & BI Intern",
    company_name: "Schneider Electric",
    icon: se,
    iconBg: "#383E56",
    date: "January 2025 - August 2025",
    points: [
      "Tableau, Python, SQL, Informatica, NodeJS, MongoDB",
    ],
  },

  {
    title: "Graduate Engineer Trainee",
    company_name: "Schneider Electric",
    icon: se,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "NodeJS, MongoDB, AWS, Salesforce",
    ],
  },
  
];


const experiences = [
  {
    title: "B.E in Computer Science & Engineering",
    company_name: "KLS Gogte Institute of Technology",
    icon: be,
    iconBg: "#383E56",
    date: "December 2021 - April 2025",
    points: [
      "CGPA : 7.83",
    ],
  },
  {
    title: "Pre University (Science)",
    company_name: "GSS College",
    icon: tw,
    iconBg: "#383E56",
    date: "June 2019 - March 2021",
    points: [
      "Score : 89%",
    ],
  },
  {
    title: "High School",
    company_name: "St. Xavier's High School",
    icon: sc,
    iconBg: "#383E56",
    date: "June 2018 - April 2019",
    points: [
      "Score : 85%",
    ],
  },
];


const projects = [
  {
    name: "CryptoBucks",
    description:
      "The application offers a user-friendly interface that includes Real-time market data, Trending Coins, Watchlist functionality, community forums and simple UI for beginners",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "recharts",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoimg,
    source_code_link: "https://github.com/ishan-26/Crypto-Screener",
    deployed_link: "https://crypto-screener-hazel.vercel.app",
  },
  {
    name: "MedNex",
    description:
      "Developed a comprehensive AI-powered Healthcare web app featuring tools for medical diagnosis, diet planning and calorie counting, enabling users to interact with features seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "geminiAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
    ],
    image: aiimg,
    source_code_link: "https://github.com/ishan-26/AI-HealthCare",
    deployed_link: "https://ai-healthcare-eight.vercel.app/",

  },
  {
    name: "Eventify",
    description:
      "A college event management application to organize class-wise deadlines, assignments, and academic events with seamless access control and notifications.",
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cal,
    source_code_link: "https://github.com/ishan-26/Eventify",
    deployed_link: "https://eventify-git.vercel.app/",

  },
];

export { services, technologies, experiences, work, projects };
