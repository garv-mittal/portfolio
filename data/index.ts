export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I believe the best solutions come from collaborative problem-solving and a commitment to open dialogue.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a full stack SaaS Application with AI integration",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "VidTube- Backend of a platform like YouTube",
    des: "Built a fully functional backend for an application similar to YouTube using nodejs, mongodb, JWT, bcrypt, and handling images using Multer and Cloudinary. Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens, etc",
    img: "/vidtube.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/nodejs.svg"],
    link: "https://github.com/garv-mittal/Vid_Tube_Backend",
  },
  {
    id: 2,
    title: "MindSpace 3.0 - Ai Therapist",
    des: "A fully functional AI therapist that helps you and is always available for you no matter where you are. You can customize your therapy sessions according to your mood as well as use the mini activities to relax your mind.",
    img: "/mindspace.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nodejs.svg", "/gemini.png"],
    link: "https://mindspace03.vercel.app/",
  },
  {
    id: 3,
    title: "Ai Weather Forecast",
    des: "Not just your normal weather app but a weather app built using google gemini to not only predict weather but also give you suggestions for your day based on the weather forecast for that day.",
    img: "/weather.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/gemini.png"],
    link: "https://weathertheclimate.vercel.app/",
  },
  {
    id: 4,
    title: " AI Ticket Management System ",
    des: "A smart ticket management system that uses AI to automatically categorize, prioritize, and assign support tickets to themost appropriate moderators.Key Features: Ticket Creation, AI Processing, Moderator Assignment, Notification",
    img: "/aiticket.png",
    iconLists: ["/re.svg", "/tail.svg", "/inngest.svg", "/nodejs.svg"],
    link: "https://github.com/garv-mittal/AI-Ticket-Management-System",
  },
  {
    id: 5,
    title: "CodeAudit AI",
    des: "An AI powered code reviewer which examines and reviews your code through a expertly configured gemini powered AI model and returns a complete analysis result including errors(if any), how to optimize the code, some tips for future, etc ",
    img: "/codeaudit.png",
    iconLists: ["/re.svg", "/gemini.png", "/nodejs.svg"],
    link: "https://github.com/garv-mittal/AI-Ticket-Management-System",
  },
];

export const testimonials = [
  {
    quote:
      "Work in progress, just like great code — testimonials coming soon!",
    name: "..",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Node.js",
    img: "/nodejs.svg",
    nameImg: "/nodejs-name.svg",
  },
  {
    id: 3,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/nextjs-name.webp",
  },
  {
    id: 4,
    name: "prisma",
    img: "/prisma.png",
    nameImg: "/prisma-name.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Development Intern",
    desc: "Designed and optimized a student dashboard handling 1,000+ records, improving data analysis speed and user experience. Delivered features and bug fixes in an Agile setup to boost engagement. Also built the Dozenier Foundation website with seamless payment integration, enhancing accessibility and reach.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "SIH 2025",
    desc: "Led a team in the Smart India Hackathon (SIH), securing a Top 25 rank among 100+ teams at the college level. Oversaw project workflow and backend development, ensuring smooth execution and timely delivery",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Personel Projects",
  //   desc: "A collection of self-driven projects showcasing my technical skills and problem-solving ability. These projects reflect my initiative to learn beyond academics, explore new technologies, and build practical solutions. Each project highlights creativity, technical depth, and real-world application.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/garv-mittal"
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/garv-mittal-5243951bb/"
  },
  {
    id: 3,
    img: "/gfg.png",
    link:"https://www.geeksforgeeks.org/user/mittal04garv/"
  },
  {
    id: 4,
    img: "/leetcode.png",
    link:"https://leetcode.com/u/garvmittal021/"
  },
];
