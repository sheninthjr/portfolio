'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ProjectType } from '@/types';
import { ProjectDetails } from '@/data/projectDetails';

const projects: ProjectDetails[] = [
  {
    id: '1',
    title: 'LinkToPost',
    description:
      'Converts YouTube links into visually appealing images, enabling easy sharing on social media platforms like LinkedIn, Twitter, and Instagram. This tool enhances engagement by transforming video content into shareable visual posts.',
    image: ['/linktopost.png', '/linktopost.png'],
    stacks: [
      'Next.js',
      'Node.js',
      'Cloudinary',
      'PostgreSQL',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Vercel',
    ],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/linktopost',
    LiveLink: 'https://linktopost.vercel.app',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '2',
    title: 'Timer',
    image: ['/linktopost.png'],
    description:
      'A lightweight browser extension that tracks time spent on various tasks to boost productivity. It provides users with detailed usage statistics and customizable timers to manage work sessions effectively.',
    stacks: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    type: ProjectType.EXTENSION,
    githubLink: 'https://github.com/sheninthjr/timer-extension',
    LiveLink: '',
    status: 'Not Deployed',
    openSource: true,
  },
  {
    id: '3',
    title: 'GameHub',
    image: ['/linktopost.png'],
    description:
      'A real-time multiplayer gaming platform that leverages WebSockets and Redis for seamless interactions. GameHub supports matchmaking, real-time updates, and persistent game states to ensure an engaging and scalable gaming experience.',
    stacks: [
      'Next.js',
      'WebSockets',
      'Redis',
      'Node.js',
      'Docker',
      'Typescript',
    ],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/gamehub',
    LiveLink: '',
    status: 'Not Deployed',
    openSource: true,
  },
  {
    id: '4',
    title: 'Travel Connect',
    image: ['/linktopost.png'],
    description:
      'Connects travelers by allowing them to share their travel plans and communicate through an integrated chat feature. Travel Connect facilitates meetups and collaborative exploration, enhancing the overall travel experience.',
    stacks: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'TypeScript'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/travel_connect',
    LiveLink: 'https://travelconnectjr.vercel.app',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '5',
    title: 'Question Generator',
    image: ['/linktopost.png'],
    description:
      'Automates the creation of question papers using Node.js, significantly reducing manual effort. The Question Generator produces diverse and relevant questions based on predefined criteria, streamlining the assessment preparation process.',
    stacks: ['React', 'Node.js', 'PostgreSQL', 'TypeScript', 'Prisma'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/Automatic-Question-Generator',
    LiveLink: '',
    status: 'Not Deployed',
    openSource: true,
  },
  {
    id: '6',
    title: 'CrowdFunding',
    image: ['/linktopost.png'],
    description:
      'A decentralized fundraising platform built with Solidity and React.js, ensuring secure and transparent transactions. CrowdFunding allows users to create and manage campaigns, track contributions, and facilitate peer-to-peer donations using blockchain technology.',
    stacks: ['Solidity', 'React.js', 'TypeScript', 'Third Web'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/Jr-Crowdfunding',
    LiveLink: 'https://jrcrowdfunding.vercel.app/',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '7',
    title: 'CodeJR',
    description:
      'A JavaScript-based platform for practicing Data Structures and Algorithms (DSA) with Server-Side Rendering (SSR) and real-time code validation. CodeJR provides an interactive environment for users to enhance their coding skills with immediate feedback.',
    stacks: ['Next.js', 'Typescript', 'Vercel', 'Monaco editor'],
    type: ProjectType.WEB,
    image: ['/linktopost.png'],
    githubLink: 'https://github.com/sheninthjr/CodeJr',
    LiveLink: 'https://code-jr.vercel.app',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '8',
    title: 'Food Delivery App',
    image: ['/linktopost.png'],
    description:
      'A mobile application UI designed with React Native and Expo for a food delivery service. The Food Delivery App UI focuses on user-friendly design and responsive layouts to ensure a seamless ordering experience across various devices.',
    stacks: ['React Native', 'Expo', 'Tailwind CSS', 'TypeScript'],
    type: ProjectType.APP,
    githubLink: '',
    LiveLink: 'https://github.com/sheninthjr/food-delivery-app',
    status: 'Not Deployed',
    openSource: false,
  },
  {
    id: '9',
    title: 'Story Book Initialized',
    image: ['/linktopost.png'],
    description:
      'A workshop project utilizing Storybook to build and test UI components in isolation. Story Book Initialized promotes the creation of reusable and maintainable UI elements, enhancing the frontend development workflow.',
    stacks: ['Storybook', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    type: ProjectType.OPENSOURCE,
    githubLink: '',
    LiveLink: '',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '10',
    title: 'SOL Wallet',
    image: ['/linktopost.png'],
    description:
      'A web-based cryptocurrency wallet for managing SOL tokens, creating custom tokens, and performing airdrops. SOL Wallet leverages the Solana ecosystem to provide a secure and user-friendly platform for digital asset management.',
    stacks: ['Next.js', 'Solana Adapter', 'Tailwind CSS', 'TypeScript'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/Jr-Wallet',
    LiveLink: 'https://jrwallet.vercel.app/',
    status: 'Deployed',
    openSource: true,
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
    <div className="bg-blackish/80 p-6 backdrop-blur-lg h-[90%] md:h-[85%] md:top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 md:border border-white/10 md:shadow-lg shadow-white/5 overflow-y-auto">
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
            className={`relative px-2 md:px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
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
              <div className="relative p-6 h-full flex flex-col space-y-2">
                <motion.h3 className="text-2xl font-bold font-robotoFlex">
                  {project.title.toUpperCase()}
                </motion.h3>
                <motion.p className="font-metrophobic text-sm">
                  {project.description}
                </motion.p>
                <div className="relative">
                  <div className="flex flex-col font-metrophobic">
                    {project.stacks.map((s, i) => (
                      <div key={i} className="w-fit rounded-xl flex gap-2">
                        {i + 1 <= 4 && (
                          <>
                            <span className="text-orange">-</span>
                            <span className="text-lightwhite">{s}</span>
                          </>
                        )}
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
