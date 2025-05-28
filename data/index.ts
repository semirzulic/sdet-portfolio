export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Process", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
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
    title:
      "Quality assurance enthusiast with a passion for automating excellence.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently Implementing WCAG compliance checks in Microfrontend projects",
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
    title: "Cross-Platform Automation Framework",
    des: "Significantly improving testing efficiency and coverage.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/automation-framework",
  },
  {
    id: 2,
    title: "CI/CD Pipeline Integration",
    des: "Implemented and managed Git pipelines, integrating automated tests into CI/CD workflows for continuous quality assurance in a microfrontend architecture.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/cicd-integration",
  },
  {
    id: 3,
    title: "WCAG Accessibility Testing Suite",
    des: "Developed a comprehensive testing suite for WCAG accessibility standards, ensuring products meet critical accessibility requirements.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/accessibility-testing",
  },
  {
    id: 4,
    title: "Mobile Testing",
    des: "Implement and manage comprehensive QA processes.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/development",
  },
];

export const testimonials = [
  {
    quote:
      "A major focus for Semir this year was automation, where he worked extensively on both writing new tests and debugging existing ones to improve reliability. His contributions helped maintain high automation passing rates and supported other teams in ensuring stable and efficient test execution. This work aligned well with the organization’s broader goal of strengthening automation frameworks and optimizing testing processes.",
    name: "Esmir Hodzic",
    title:
      "Engineering Manager at Personify Health | Leading Web, SSO & Localization Teams | Scaling Platforms for Global Reach",
    image: "/esko.jpeg",
  },
  {
    quote:
      "One of Semir’s key achievements was his role in the Client Shell Application upgrade. His proactive approach to testing and bug identification before production release was instrumental in ensuring a smooth transition. By maintaining clear communication with cross-functional teams, he facilitated efficient sign-offs and releases, preventing potential disruptions and reinforcing his reliability in critical projects.",
    name: "Hajrija Selimovic",
    title: "Sr. Manager, Engineering at Personify Health",
    image: "/hajra.png",
  },
  {
    quote:
      "Beyond technical execution, Semir has contributed to improving operational efficiency by taking ownership of testing and verification tasks across multiple projects. His proactive communication with development teams helped prevent bottlenecks and supported faster delivery cycles, resulting in smoother project execution.",
    name: "Edin Omeragic",
    title: "Tech Lead Software Engineer at Personify Health",
    image: "/edo.jpeg",
  },
  {
    quote:
      "Semir’s performance has been strong, with consistent contributions to key projects, automation improvements, and professional development. He has played an important role in maintaining and enhancing automation coverage while demonstrating a solid work ethic and a commitment to continuous learning. His efforts have directly contributed to the team’s success and the overall health of automation suites across the organization.",
    name: "Nedim Pasalic",
    title:
      "Engineering Leader at Cape Ann Enterprises| Delivery Manager | Client Partnership | Full-Stack Product Strategy",
    image: "/pasha.jpeg",
  },
  {
    quote:
      "Semir has consistently met expectations by delivering on key projects, strengthening automation frameworks, and advancing his technical expertise. His continued focus on test strategy, AI-driven automation, and accessibility will further enhance his impact and support both his individual growth and the team’s long-term success.",
    name: "Edin Murselovic",
    title: "Software Engineer and Project Manager at Cape Ann Enterprises",
    image: "/mursel.jpeg",
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
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
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
    title: "Senior SDET | Personify Health",
    desc: "Lead QA initiatives for Angular microfrontend projects, develop cross-platform automation, and manage comprehensive QA processes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Automation Specialist | Personify Health",
    desc: "Architect automation solutions for web and mobile, implement CI/CD pipelines, and conduct WCAG accessibility testing.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Web Developer | Cape Ann Enterprises",
    desc: "Developed dynamic websites using HTML5, CSS, JavaScript, Angular, and Drupal. Contributed to project planning and server-side configurations.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full Stack Developer | Cape Ann Enterprises",
    desc: "Implemented robust programming capabilities using PHP, SQL, and JavaScript. Applied OOP principles and integrated various libraries.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/semirzulic",
    alt: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/semir-zulic-342188288/",
    alt: "LinkedIn",
  },
];
