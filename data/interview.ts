import { InterviewExperienceTypes } from '@/types';

export const interviewDetails: InterviewExperienceTypes[] = [
  {
    id: '1',
    name: 'Presidio',
    jobDescription: 'Web Developer',
    companyType: 'Service',
    ratings: 4.5,
    honestReview: [
      'The first round includes an aptitude test, coding challenges, and SQL questions.',
      'The second round is a direct face-to-face interview lasting approximately 45 minutes, focusing on projects, Data Structures and Algorithms (DSA), and SQL.',
      'The third round involves extensive coding tasks where candidates must build a complete website end-to-end, including database setup, backend and frontend development, and deployment.',
    ],
    totalInterviewRounds: [
      'Aptitude Test',
      'Face-to-Face Interview',
      '3-Hour Live Coding Session',
      'HR Interview',
    ],
  },
  {
    id: '2',
    name: 'MultiCoreWare',
    jobDescription: 'Research Engineer',
    companyType: 'Product',
    ratings: 3,
    honestReview: [
      'The initial round consists of an aptitude test, coding challenges, and SQL questions.',
      'The second round involves solving three DSA problems categorized as Easy, Medium, and Hard, focusing on Arrays, Strings, and Two-Dimensional Arrays.',
      'The third round presents complex coding and DSA challenges to assess advanced problem-solving skills.',
      'The fourth round is a face-to-face interview where candidates are asked Level 1 questions on DSA, logical thinking, and participate in live DSA coding tasks.',
      'The fifth round includes questions on core subject concepts and additional problem-solving tasks.',
    ],
    totalInterviewRounds: [
      'Aptitude and Coding Multiple-Choice Questions',
      'Basic DSA Round',
      'Complex DSA Round',
      'Face-to-Face Interview',
      'Core Subject Interview',
      'HR Interview',
    ],
  },
  {
    id: '3',
    name: 'Mitsogo',
    jobDescription: 'Web Developer',
    companyType: 'Product',
    ratings: 4,
    honestReview: [
      'The first round includes an aptitude test, coding challenges, and SQL questions.',
      'The second round requires solving five handwritten DSA problems ranging from basic to medium difficulty.',
      'The third round presents a challenging DSA problem based on logic, which must be solved by writing a program.',
      'The fourth round consists of general questions aimed at evaluating logical thinking and problem-solving abilities.',
    ],
    totalInterviewRounds: [
      'Aptitude Test',
      'Basic DSA Round',
      'Advanced DSA Round',
      'General Interview',
      'HR Interview',
    ],
  },
  {
    id: '4',
    name: 'Yar Tech Service',
    jobDescription: 'R&D Innovation Engineer',
    companyType: 'Service',
    ratings: 4,
    honestReview: [
      'The first round consists of an aptitude test.',
      'The second round is a direct face-to-face interview focusing on previous projects.',
      'The third round involves a comprehensive coding assignment where candidates must build a project based on a given topic. This is a take-home assignment with a one-week deadline.',
      'The fourth round requires candidates to present and explain their completed assignment, including the technologies used.',
    ],
    totalInterviewRounds: [
      'Aptitude Test',
      'Face-to-Face Interview',
      'Take-Home Assignment Project',
      'Project Presentation',
      'HR Interview',
    ],
  },
];
