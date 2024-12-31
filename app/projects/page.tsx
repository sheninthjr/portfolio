'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ProjectProps, ProjectType } from '@/types';

const projects: ProjectProps[] = [
  {
    id: '1',
    title: 'LinkToPost',
    description:
      'Developed a tool to transform social media links into attractive shareable images, enabling cross-platform sharing.',
    stacks: ['Next.js', 'Node.js', 'Cloudinary', 'Postgresql'],
    type: ProjectType.WEB,
  },
  {
    id: '2',
    title: 'Timer',
    description:
      'The Timer extension is a simple and efficient tool designed to help you track your speed and productivity.',
    stacks: ['React.js', 'Typescript', 'Tailwindcss', 'Vite'],
    type: ProjectType.EXTENSION,
  },
  {
    id: '3',
    title: 'GameHub',
    description:
      'Created a multiplayer game platform using WebSockets, Redis Pub/Sub, and real-time backend communication.',
    stacks: ['Next.js', 'WebSockets', 'Redis', 'Node.js'],
    type: ProjectType.WEB,
  },
  {
    id: '4',
    title: 'Question Generator',
    description:
      'Revolutionized the question paper creation process using Node.js, reducing workload with automated question generation.',
    stacks: ['Node.js', 'Prisma', 'MongoDB', 'PDF Generation'],
    type: ProjectType.WEB,
  },
  {
    id: '5',
    title: 'CrowdFunding',
    description:
      'Developed a decentralized fundraising platform using Solidity and React.js for secure and transparent fundraising.',
    stacks: ['Solidity', 'React.js', 'Typescript', 'Third Web'],
    type: ProjectType.WEB,
  },
  {
    id: '6',
    title: 'CodeJR',
    description:
      'Built a JavaScript coding platform for practicing DSA with SSR and real-time validation, deployed on Vercel.',
    stacks: ['Next.js', 'SSR', 'Vercel', 'JavaScript'],
    type: ProjectType.WEB,
  },
  {
    id: '7',
    title: 'Food Delivery App UI',
    description:
      'Developed a decentralized fundraising platform using Solidity and React.js for secure and transparent fundraising.',
    stacks: ['React Native', 'Expo', 'Tailwindcss', 'Typescript'],
    type: ProjectType.APP,
  },
  {
    id: '8',
    title: 'Story Book Initialized',
    description:
      'Storybook is a frontend workshop for building UI components and pages in isolation',
    stacks: ['Storybook', 'Next.js', 'Tailwindcss', 'Typescript'],
    type: ProjectType.OPENSOURCE,
  },
];

export default function Projects() {
  const [activeType, setActiveType] = useState<ProjectType>(ProjectType.WEB);
  const router = useRouter();

  const handleRoute = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const tabs = [
    { type: ProjectType.WEB, label: 'Web' },
    { type: ProjectType.APP, label: 'App' },
    { type: ProjectType.EXTENSION, label: 'Extension' },
    { type: ProjectType.OPENSOURCE, label: 'Open Source' },
  ];

  const filteredProjects = projects.filter(
    (project) => project.type === activeType,
  );

  return (
    <div className="bg-blackish/80 p-6 backdrop-blur-lg h-[88%] md:h-[85%] md:top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 md:border border-white/10 shadow-lg shadow-white/5 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-robotoFlex text-4xl font-extrabold text-lightwhite mb-8"
      >
        PROJECTS
      </motion.div>
      <div className="flex gap-4 mb-8">
        {tabs.map(({ type, label }) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`relative px-2 md:px-4  py-2 text-sm font-medium rounded-lg transition-colors duration-200
              ${activeType === type ? 'text-white' : 'text-white/50 hover:text-white/70'}`}
          >
            {label}
            {activeType === type && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => handleRoute(project.id)}
              className="relative group overflow-hidden rounded-xl shadow-lg shadow-neutral-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gray group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative p-6 h-full">
                <motion.h3 className="text-2xl font-bold mb-3 font-robotoFlex">
                  {project.title.toUpperCase()}
                </motion.h3>
                <motion.p className="font-metrophobic text-sm mb-4">
                  {project.description}
                </motion.p>
                <div className="relative">
                  <div className="flex flex-col gap-2 font-metrophobic">
                    {project.stacks.map((s, i) => (
                      <div key={i} className="w-fit rounded-xl flex gap-2 px-2">
                        <span className="text-orange">-</span> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
