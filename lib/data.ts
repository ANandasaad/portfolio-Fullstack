import coCreation from "@/public/coCreation.png";
import rmtdevImg from "@/public/rmtdev.png";
import winWadi from "@/public/winWadi.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";


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
    title: "Associate Software Developer",
    location: "Clixlogix Pvt Ltd, Noida",
    description:
      "Spearheaded the development of high-performance backend APIs for collaborative and e-commerce platforms. 🚀 Boosted response times by 30% and increased app adoption to 50K+ users through real-time communication and robust data handling. Implemented secure authentication (JWT, OAuth2, RBAC) and optimized performance using MongoDB, Redis, and RabbitMQ. Collaborated cross-functionally in an Agile team to deliver scalable, production-ready systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – Present",
  },
  {
    title: "Software Developer",
    location: "SearchingYard Group, Bhubaneswar",
    description:
      "Led backend development for a high-traffic e-commerce platform using Node.js and GraphQL. ⚙️ Reduced MongoDB query time by 40% with advanced indexing and schema optimization. Enhanced API speed with Redis caching and minimized latency through smart database strategies. Delivered scalable and resilient services while maintaining seamless frontend integrations.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2022 – Jan 2024",
  },
 
] as const;


export const projectsData = [
  {
    title: "Co-Creation App",
    description:
      "Built a real-time, role-based collaboration platform with task management and AI-assisted workflows. Engineered using PostgreSQL, Prisma, and Redis Pub/Sub for scalable, instant updates across teams.",
    tags: ["JavaScript", "PostgreSQL", "RabbitMQ", "Redis", "Socket.io", "Node.js", "Express", "AWS",'Prisma'],
    imageUrl: coCreation,
    url: "",
  },
  {
    title: "WinWadi",
    description:
      "WinWadi is your all-in-one platform for affiliate marketing, influencer collaborations, and advertiser programs. Discover performance-driven campaigns, boost your brand visibility, and connect with top creators to maximize ROI.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Node.js", "Express", "MongoDB", "PostgreSQL", "AWS",'Prisma'],
    imageUrl: winWadi,
    url: "https://winwadi.vercel.app"
  }
  
  
  ,

] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Golang",
  "Node.js",
  "Express",
  "FastAPI",
  "Next.js",
  "React",
  "React Query",
  "Redux",
  "Tailwind",
  "Prisma",
  "Mongoose",
  "Sequelize",
  "GraphQL",
  "Git",
  "Docker",
  "Kubernetes",
  "Microservices",
  "RabbitMQ",
  "AWS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Docker",
  "Kubernetes",
  "Microservices",
  "RabbitMQ",
  "NATS",
  "Kafka",
  "Redis",
  "Nginx",


] as const;
