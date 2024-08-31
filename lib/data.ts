import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;
  
  export const experiencesData = [
    {
      title: "Senior Software Consultant",
      location: "Singapore",
      description: [
        "Upgraded frontend of an application which was using Angularjs (Angular V1) to React V18. This migration is a total rewrite of the application using React, Typescript, Redux and Tailwind CSS",
        "Implemented AWS Lambda functions to help one key government client to move their data from S3 to their own FTP servers periodically in order to compliance with the client's data protection policies",
        "Involved in fixing client side accessibility, performance issues reported by Lighthouse / Purple HATS which resulted in increasing accessibility/ performance score more than 95%",
        "Upgraded client side libraries if there were any security vulnerabilities or if library became obsolete.",
        "Participated in client meetings to provide technical support for client concerns."
      ],
      icon: React.createElement(CgWorkAlt),
      date: "June 2022 - Present",
    },
    {
      title: "Lead Software Engineer",
      location: "Colombo, Sri Lanka",
      description: [
        "Built and maintained in-house built Gantt Chart Controller library using React, Redux, Typescript and Tailwind CSS",
        "Increased client side performance of different React components using lazy loading, state management and memoization",
        "Involved in implementing new features, fixing client side bugs and performance issues",
        "Mentored junior developers/interns, conducted knowledge transfer (KT) sessions within the team."
      ],
      icon: React.createElement(CgWorkAlt),
      date: "Oct 2019 - May 2022",
    },
    {
      title: "Senior Software Engineer",
      location: "Colombo, Sri Lanka",
      description: [
        "Developed hybrid mobile applications using Ionic and Angular which enabled customers to efficiently manage their supply chain operations on-the-go",
        "Actively involved in migrating a legacy Angular application to Angular 8 and making sure version upgrade has no impact on existing functionality",
        "Developed customer features using Angular and involved in bug fixing",
        "Conducted interviews and provided mentorship to undergraduate trainees, sharing best practices and industry knowledge to foster their growth and development"
      ],
      icon: React.createElement(CgWorkAlt),
      date: "Oct 2018 - Oct 2019",
    },
    {
      title: "Software Engineer - Java",
      location: "Colombo, Sri Lanka",
      description: [
        "Designed and implemented a highly configurable and customizable Student Management System for primary schools in New Zealand, leveraging Java, Play Framework, and PostgresSQL for the backend, and AngularJS and jQuery for the frontend",
        "Built a powerful RuleEngine based on the Nashorn Javascript Engine, which allows customers to specify and execute business rules with no or little technical knowledge.",
        "Developed different modules, such as Assessments, Attendance, Wellbeing, Learning Support, and Accounts, in collaboration with the client and Ministry of Education, New Zealand, to meet their specific requirements and ensure compliance with regulatory standards"
      ],
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2016 - Oct 2018",
    },
    {
      title: "Associate Software Engineer",
      location: "Colombo, Sri Lanka",
      description: [
        "Involved in the development of comprehensive code quality solution, utilizing technologies such as Java, Spring Boot, and PostgresSQL for the backend, and AngularJS, JavaScript, HTML, and CSS for the frontend.",
        "Implemented translators to convert core application to XML and vice versa.",
        "Implemented a plugin to export and import a database."
      ],
      icon: React.createElement(CgWorkAlt),
      date: "Nov 2014 - Jan 2016",
    }
  ] as const;
  
  export const projectsData = [
    {
      title: "NCS Group",
      description:
        "Responsible for the development and deployment of digital projects for key government clients in Singapore.",
      tags: ["React", "Angular", "Spring Boot", "jQuery", "Emberjs", "AWS", "AEM", "HTML", "CSS", "Javascript", "Typescript"],
      imageUrl: corpcommentImg,
    },
    {
      title: "IFS Aurena Client Framework",
      description:
        "Framework which provides ready-made components for application developers to rapidly build ERP applications.",
      tags: ["React", "Typescript", "Javascript", "HTML", "CSS", "Oracle", "PLSQL", "Java", "Spring Boot", "PostgresSQL"],
      imageUrl: rmtdevImg,
    },
    {
      title: "Infor Nexus",
      description:
        "Hybrid mobile application allowing customers to monitor and manage their supply chain.",
      tags: ["Ionic", "Angular", "Typescript", "Javascript", "HTML", "CSS", "Java", "Spring Boot", "PostgresSQL"],
      imageUrl: wordanalyticsImg,
    },
    {
      title: "Assembly Student Hub",
      description:
        "Student Management System used by more than 500 primary and secondary schools in New Zealand.",
      tags: ["Java", "Play Framework", "jQuery", "HTML", "CSS", "PostgresSQL"],
      imageUrl: wordanalyticsImg,
    },
    {
      title: "Speed Cloud Platform",
      description:
        "A next-generation rapid software development platform to develop web applications that support cloud scale and modern front-end demands.",
      tags: ["Angularjs", "Java", "Javascript", "Spring Boot", "PostgresSQL"],
      imageUrl: wordanalyticsImg,
    },
    {
      title: "ERA Insight",
      description:
        "A comprehensive code analysis tool that brings in analytics and gamification to the software development lifecycle.",
      tags: ["Java", "Angularjs", "Spring Boot", "PostgresSQL"],
      imageUrl: wordanalyticsImg,
    },
  ] as const;
  
  export const skillsData = [
    "Javascript",
    "Typescript",
    "Java",
    "Golang",
    "Nodejs",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Angular",
    "Strapi",
    "Emberjs",
    "Play Framework",
    "Ionic",
    "Express.js",
    "Tailwind CSS",
    "Spring Boot",
    "Git",
    "Docker",
    "AWS",
    "Azure"
  ] as const;
  
  export const educationData = [
    {
      title: "Master of Computer Science",
      location: "Colombo, Sri Lanka",
      description: "University of Colombo, GPA: 3.32",
      icon: React.createElement(LuGraduationCap),
      date: "Jan 2016 - Jan 2018",
    },
    {
      title: "Bachelor's in Information Technology",
      location: "Colombo, Sri Lanka",
      description: "British Computer Society",
      icon: React.createElement(LuGraduationCap),
      date: "June 2010 - June 2014",
    }
  ] as const;
  
  export const awardsData = [
    {
      title: "Research Publication - ICTER 2018",
      description:
        "Presented a research paper on 'Bug Prediction Model using Code Smells' at 18th International Conference on Advances in ICT for Emerging Regions (ICTer 2018) organized by University of Colombo School of Computing.",
      date: "Oct 2018",
      icon: React.createElement(FaReact),
    },
  ] as const;
  