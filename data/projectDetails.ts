import { ProjectType } from '@/types';

export interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  image: string[];
  stacks: string[];
  type: ProjectType;
  githubLink: string;
  LiveLink: string;
  status: 'Deployed' | 'Not Deployed';
  openSource: boolean;
}

export const projectDetails: ProjectDetails[] = [
  {
    id: '1',
    title: 'LinkToPost',
    description:
      'LinkToPost is a user-friendly tool that converts YouTube links into visually appealing, shareable images. By simply entering a YouTube URL, users can generate card-like images optimized for sharing on social media platforms such as LinkedIn, Twitter, and Instagram.',
    image: [
      '/linktopost/l2p1.png',
      '/linktopost/l2p2.png',
      '/linktopost/l2p3.png',
      '/linktopost/l2p4.png',
    ],
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
    image: ['/timer/1.png', '/timer/2.png'],
    description:
      'Timer is a lightweight browser extension designed to help users monitor and enhance their productivity by tracking time spent on various tasks. It offers an intuitive interface for setting timers, viewing usage statistics, and managing work sessions.',
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
    image: [
      '/gamehub/1.png',
      '/gamehub/2.png',
      '/gamehub/3.png',
      '/gamehub/4.png',
      '/gamehub/5.png',
      '/gamehub/6.png',
      '/gamehub/7.png',
    ],
    description:
      'GameHub is a real-time multiplayer gaming platform that leverages WebSockets and Redis Pub/Sub for efficient backend communication. It supports concurrent user interactions, providing a seamless and scalable gaming experience with features like matchmaking and real-time updates.',
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
    openSource: false,
  },
  {
    id: '4',
    title: 'Travel Connect',
    image: [
      '/travelconnect/1.png',
      '/travelconnect/2.png',
      '/travelconnect/3.png',
      '/travelconnect/4.png',
    ],
    description:
      'Travel Connect is a comprehensive platform that allows users to share their travel plans and connect with fellow travelers based on location and timing. It includes a built-in chat feature for seamless communication, enabling users to plan meetups and explore destinations together.',
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
    image: ['/auto.png'],
    description:
      'The Question Generator automates the creation of question papers, significantly reducing manual effort. Utilizing Node.js, it generates diverse and relevant questions based on predefined parameters, streamlining the assessment preparation process.',
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
    image: [
      '/crowdfunding/1.png',
      '/crowdfunding/2.png',
      '/crowdfunding/3.png',
      '/crowdfunding/4.png',
    ],
    description:
      'CrowdFunding is a decentralized fundraising platform developed with Solidity and React.js, ensuring secure and transparent fundraising processes. It allows users to create and manage campaigns, track contributions, and facilitate peer-to-peer transactions using blockchain technology.',
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
      'CodeJR is a JavaScript-based coding platform designed for practicing Data Structures and Algorithms (DSA). It features Server-Side Rendering (SSR) and real-time validation, providing an efficient environment for coding practice with immediate feedback and performance tracking.',
    stacks: ['Next.js', 'Typescript', 'Vercel', 'Monaco editor'],
    type: ProjectType.WEB,
    image: ['/codejr/1.png', '/codejr/2.png'],
    githubLink: 'https://github.com/sheninthjr/CodeJr',
    LiveLink: 'https://code-jr.vercel.app',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '8',
    title: 'Food Delivery App',
    image: ['/food_app.png'],
    description:
      'The Food Delivery App UI is a mobile application interface designed using React Native and Expo. It emphasizes user-friendly design and responsive layouts, ensuring a seamless user experience across various devices.',
    stacks: ['React Native', 'Expo', 'Tailwind CSS', 'TypeScript'],
    type: ProjectType.APP,
    githubLink: '',
    LiveLink: 'https://github.com/sheninthjr/food-delivery-app',
    status: 'Not Deployed',
    openSource: true,
  },
  {
    id: '9',
    title: 'Initializing StoryBook',
    image: ['/storybook.png'],
    description:
      'Story Book is a frontend development workshop focused on building UI components and pages in isolation using Storybook. It facilitates the creation of reusable, testable, and maintainable UI elements, streamlining the frontend development workflow.',
    stacks: ['Storybook', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    type: ProjectType.OPENSOURCE,
    githubLink: 'https://github.com/code100x/cms/pull/470',
    LiveLink: 'https://66234a5ec2e12ce0e1adf381-evlzfokhvq.chromatic.com',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '10',
    title: 'SOL Wallet',
    image: ['/wallet/1.png', '/wallet/2.png', '/wallet/3.png'],
    description:
      'SOL Wallet is a web-based cryptocurrency wallet that provides a secure and intuitive platform for managing digital assets. It supports the creation of custom tokens, facilitates transactions, and enables SOL airdrops, leveraging the Solana ecosystem for robust performance and scalability.',
    stacks: ['Next.js', 'Solana Adapter', 'Tailwind CSS', 'TypeScript'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/Jr-Wallet',
    LiveLink: 'https://jrwallet.vercel.app/',
    status: 'Deployed',
    openSource: true,
  },
];
