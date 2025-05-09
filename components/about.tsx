"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Backend developer with 3 years of experience specializing in scalable and efficient system design. Proficient in{" "}
        <span className="font-medium">JavaScript</span>,{" "}
        <span className="font-medium">PostgreSQL</span>,{" "}
        <span className="font-medium">Prisma</span>,{" "}
        <span className="font-medium">RabbitMQ</span>,{" "}
        <span className="font-medium">Redis</span>, and{" "}
        <span className="font-medium">Socket.io</span>.

        Currently working as an{" "}
        <span className="font-medium">Associate Software Developer</span> at Clixlogix, where I've developed scalable collaborative applications with real-time features using Socket.io and Redis Pub/Sub. I've optimized database performance using PostgreSQL with Prisma ORM and implemented advanced RBAC systems for secure team collaboration.

        Previously at SearchingYard Group, I led backend development for high-traffic e-commerce platforms, focusing on performance optimization and caching strategies.

        I hold a{" "}
        <span className="font-medium">Bachelor's degree in Computer Science</span> from Chandigarh University. I am passionate about building robust, maintainable, and scalable solutions while continuously adapting to emerging technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and exploring new technologies.
      </p>
    </motion.section>
  );
}
