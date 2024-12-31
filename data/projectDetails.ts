import { ProjectType } from '@/types';

interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  image: string[];
  stacks: string[];
  type: ProjectType;
  githubLink: string;
  LiveLink: string;
  status: 'Deployed' | '';
  openSource: boolean;
}

export const projectDetails: ProjectDetails[] = [
  {
    id: '1',
    title: 'LinkToPost',
    description:
      'LinkToPost is a convenient post generator that transforms YouTube links into shareable, visually appealing images. Simply paste your YouTube URL, and LinkToPost creates a stunning card-like image ready for sharing on LinkedIn, Twitter, and Instagram.',
    image: ['/linktopost.png', '/linktopost.png'],
    stacks: [
      'Next.js',
      'Node.js',
      'Cloudinary',
      'Postgresql',
      'Typescript',
      'Tailwindcss',
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
      'The Timer extension is a simple and efficient tool designed to help you track your speed and productivity.',
    stacks: ['React.js', 'Typescript', 'Tailwindcss', 'Vite'],
    type: ProjectType.EXTENSION,
    githubLink: 'https://github.com/sheninthjr/timer-extension',
    LiveLink: '',
    status: '',
    openSource: true,
  },
  {
    id: '3',
    title: 'GameHub',
    image: ['/linktopost.png'],
    description:
      'Created a multiplayer game platform using WebSockets, Redis Pub/Sub, and real-time backend communication.',
    stacks: ['Next.js', 'WebSockets', 'Redis', 'Node.js'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/gamehub',
    LiveLink: '',
    status: '',
    openSource: true,
  },
  {
    id: '4',
    title: 'Question Generator',
    image: ['/linktopost.png'],
    description:
      'Revolutionized the question paper creation process using Node.js, reducing workload with automated question generation.',
    stacks: ['Node.js', 'Prisma', 'MongoDB', 'PDF Generation'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/Automatic-Question-Generator',
    LiveLink: '',
    status: '',
    openSource: true,
  },
  {
    id: '5',
    title: 'CrowdFunding',
    image: ['/linktopost.png'],
    description:
      'Developed a decentralized fundraising platform using Solidity and React.js for secure and transparent fundraising.',
    stacks: ['Solidity', 'React.js', 'Typescript', 'Third Web'],
    type: ProjectType.WEB,
    githubLink: 'https://github.com/sheninthjr/Jr-Crowdfunding',
    LiveLink: 'https://jrcrowdfunding.vercel.app/',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '6',
    title: 'CodeJR',
    description:
      'Built a JavaScript coding platform for practicing DSA with SSR and real-time validation, deployed on Vercel.',
    stacks: ['Next.js', 'SSR', 'Vercel', 'JavaScript'],
    type: ProjectType.WEB,
    image: ['/linktopost.png'],
    githubLink: 'https://github.com/sheninthjr/CodeJr',
    LiveLink: 'https://code-jr.vercel.app',
    status: 'Deployed',
    openSource: true,
  },
  {
    id: '7',
    title: 'Food Delivery App UI',
    image: ['/linktopost.png'],
    description:
      'Developed a decentralized fundraising platform using Solidity and React.js for secure and transparent fundraising.',
    stacks: ['React Native', 'Expo', 'Tailwindcss', 'Typescript'],
    type: ProjectType.APP,
    githubLink: '',
    LiveLink: 'https://github.com/sheninthjr/food-delivery-app',
    status: '',
    openSource: false,
  },
  {
    id: '8',
    title: 'Story Book Initialized',
    image: ['/linktopost.png'],
    description:
      'Storybook is a frontend workshop for building UI components and pages in isolation.',
    stacks: ['Storybook', 'Next.js', 'Tailwindcss', 'Typescript'],
    type: ProjectType.OPENSOURCE,
    githubLink: '',
    LiveLink: '',
    status: '',
    openSource: true,
  },
];
