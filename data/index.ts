import { LatestProjectsTypes } from '@/types';

export const latestProjects: LatestProjectsTypes[] = [
  {
    title: 'LinkToPost',
    description:
      'Developed a tool to transform social media links into attractive shareable images, enabling cross-platform sharing.',
    stacks: ['Next.js', 'Node.js', 'Cloudinary', 'Postgresql'],
    link: 'https://github.com/linktopost',
  },
  {
    title: 'GameHub',
    description:
      'Created a multiplayer game platform using WebSockets, Redis Pub/Sub, and real-time backend communication.',
    stacks: ['Next.js', 'WebSockets', 'Redis', 'Node.js'],
    link: 'https://github.com/gamehub',
  },
  {
    title: 'CrowdFunding',
    description:
      'Developed a decentralized fundraising platform using Solidity and React.js for secure and transparent fundraising.',
    stacks: ['Solidity', 'React.js', 'Typescript', 'Third Web'],
    link: 'https://github.com/sheninthjr/Jr-Crowdfunding',
  },
];
