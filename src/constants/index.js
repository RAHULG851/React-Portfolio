import project1 from "../assets/projects/E-commerce.jpg";
import project2 from "../assets/projects/hospital (3).jpg";
import project3 from "../assets/projects/Chat.jpg"
import project4 from "../assets/projects/project-4.jpg"

export const HERO_CONTENT = `I am a passionate MERN Stack 
Developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile MERN Stack Developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const INTERNSHIPS = [
  {
    year: "Sept 2024-Feb 2025",
    role: "MERN Stack Developer",
    company: "3RI Technologies Pvt Ltd",
    description: `As a MERN Stack Development Intern at 3RI Technologies, I independently built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I developed and optimized RESTful APIs, designed MongoDB schemas, and gained professional experience in Oracle SQL, writing complex queries. Throughout the internship, I enhanced my skills in backend and frontend development while following best coding practices and utilizing Git for version control.`,
    technologies: ["Javascript","MongoDB","Express.js","React.js","Node.js","Git"],
  },
  // {
  //   year: "Dec 2023-Feb 2024",
  //   role: "Frontend Developer",
  //   company: "Sunanda Infotech Pvt Ltd",
  //   description: `Designed and developed user interfaces for web applications using  React.Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "JavaScript", "mySQL"],
  // },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "I developed a scalable MERN stack E-Commerce platform with a responsive UI using React, Redux, and Tailwind CSS. The backend was built with Node.js, Express, and MongoDB, featuring secure authentication and role-based access control. Additionally, I optimized performance by improving database queries, reducing load times, and enhancing overall efficiency for a seamless user experience.",
    technologies: ["React","Express.js","Node.js","MongoDB"],
  },

  {
    title: "HealthCare and Wellness Hub",
    image: project2,
    description:
      "I developed a responsive hospital management system using React, featuring an intuitive UI for patient, doctor, and staff management. I implemented React Router for seamless navigation and utilized hooks for efficient state management and performance optimization. Additionally, I integrated form handling and validation to ensure accurate data input and enhance the overall user experience.",
    technologies: ["React.js","ReactRouterHook","Javascript"]
  },


  {
    title: "Chat Application",
    image: project3,
    description:
      "I developed a real-time chat application using React and Node.js, leveraging WebSockets for instant messaging. I implemented Redux for efficient state management and integrated MongoDB for secure data storage. The backend was built with Express, ensuring smooth communication and a seamless user experience",
    technologies: ["Node.js","Express.js","MongoDB","Socket.io"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "Designed and developed a responsive portfolio website using React, showcasing projects and skills with an intuitive UI. Implemented React Router for seamless navigation and optimized performance with lazy loading and efficient state management. Ensured a dynamic and engaging user experience with interactive components and modern UI/UX principles.",
    technologies: ["React.js","ReactRouter"],
  },
]


export const CONTACT = {
  phoneNo: "+91 9645241364 ",
  email: "techno@gmail.com",
};
