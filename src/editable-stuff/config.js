import muditimg from "../editable-stuff/muditimg.jpg";
import dellLogo from "../assets/img/dell.png";
import boeingLogo from "../assets/img/dell.png"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mudit",
  middleName: "",
  lastName: "Garg",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: faGithub,
      url: "https://github.com/himudit",
    },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/mudit2303/",
    // },
    {
      image: faLinkedin,
      url: "https://www.linkedin.com/in/mudit-garg-03m/",
    },
  ],
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: muditimg,  // Use the imported image here
  imageSize: 375,
  message:
    "My name is Mudit Garg. I’m an undergraduate student pursuing a Bachelor's degree in Computer Engineering from the Manav Rachna University Faridabad, Haryana. I’m passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time, I enjoy working on open-source projects.",
  resume: "https://drive.google.com/file/d/1mhDPLKJzNC11qE0FekFFzcltc2TOIqoN/view?usp=sharing",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "himudit",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: muditimg,  // Use the imported image here
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: muditimg,  // Use the imported image here
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Web Development based Internships or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "gargmudit662@gmail.com",
};

// EXPERIENCES SECTION
const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',
      companylogo: dellLogo,  // Use the imported logo here
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: boeingLogo,  // Use the imported logo here
      date: 'May 2017 – May 2018',
    },
  ],
};

// Exporting the configuration for use in other parts of the app
export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
