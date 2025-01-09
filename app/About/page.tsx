"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TimelineItem } from "../components/TimelineItem";
import { SkillIcon } from "../components/SkillIcon";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import Link from "next/link";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function AboutMe() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.header variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 ">Usman Bangash</h1>
          <p className="text-xl text-gray-600 mb-4 font-semibold">
            Full Stack Developer
          </p>
          <div className="flex justify-center space-x-4 text-2xl">
            <Link
              href="https://github.com/usmanbangash98"
              target="_blank"
              className="text-gray-600 hover:text-white hover:bg-slate-800 rounded-full">
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/usmanbangash/"
              target="_blank"
              className="text-gray-600 hover:text-blue-400">
              <FaLinkedin />
            </Link>
          </div>
        </motion.header>

        {/* Timeline */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-16 underline underline-offset-4 decoration-lime-500 -rotate-6">
              Education
            </h2>
            <TimelineItem
              year="2024"
              title="Master of Science in Computer Science ( M.Sc )"
              description="Graduated from University of Peshawar with 4 GPA"
            />
            <TimelineItem
              year="2022"
              title="Bachelor of Science in Computer Science ( B.Sc )"
              description="Graduated from Fazaia Degree College with 3.6 GPA"
            />
            <h2 className="text-2xl font-semibold mb-16 underline underline-offset-4 decoration-purple-500 -rotate-2">
              Certifications
            </h2>
            <TimelineItem
              year="2023"
              title="Frontend Developement Libraries"
              description="Achieved certification from freeCodeCamp.org"
            />
            <TimelineItem
              year="2022"
              title="Backend Development and APIs"
              description="Achieved certification from freeCodeCamp.org"
            />
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-semibold mb-16 underline underline-offset-4 decoration-indigo-500 -rotate-6">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillIcon icon={FaHtml5} name="HTML5" color="#E34F26" />
            <SkillIcon icon={FaCss3Alt} name="CSS3" color="#1572B6" />
            <SkillIcon icon={FaJs} name="JavaScript" color="#c4ca0e" />
            <SkillIcon icon={FaReact} name="React" color="#61DAFB" />
            <SkillIcon icon={FaNodeJs} name="Node.js" color="#339933" />
            <SkillIcon icon={SiMongodb} name="MongoDB" color="#47A248" />
            <SkillIcon
              icon={SiTailwindcss}
              name="Tailwind CSS"
              color="#06B6D4"
            />
            <SkillIcon icon={SiTypescript} name="TypeScript" color="#3178C6" />
            <SkillIcon icon={FaPython} name="Python" color="#c4ca0e" />
            <SkillIcon icon={RiNextjsFill} name="NextJs" color="#191908" />
            <SkillIcon
              icon={TbBrandFramerMotion}
              name="Framer Motion"
              color="#191908"
            />
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
