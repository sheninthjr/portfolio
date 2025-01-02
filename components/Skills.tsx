import React, { useState, useEffect, useRef } from 'react';
import { CircleCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
}

interface SkillsData {
  [key: string]: Skill[];
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

interface SkillsCategoryProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

const skillsData: SkillsData = {
  Frontend: [
    { name: 'Next.js' },
    { name: 'React' },
    { name: 'React Native' },
    { name: 'Tailwindcss' },
    { name: 'Motion' },
  ],
  Backend: [
    { name: 'Node.js' },
    { name: 'Python' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'C++' },
    { name: 'GraphQL' },
    { name: 'Express' },
    { name: 'WebSockets' },
  ],
  Database: [
    { name: 'MongoDB' },
    { name: 'PostgreSQL' },
    { name: 'Prisma' },
    { name: 'MySQL' },
    { name: 'Redis' },
  ],
  DevOps: [
    { name: 'Docker' },
    { name: 'GitHub Actions' },
    { name: 'AWS (EC2)' },
    { name: 'Vercel' },
    { name: 'Netlify' },
  ],
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gray px-4 py-4 md:p-6 rounded-xl font-metrophobic shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <motion.div className="space-y-3">
        <h4 className="md:text-lg font-bold mb-2 text-white">{skill.name}</h4>
      </motion.div>
    </motion.div>
  );
};

const SkillsCategory: React.FC<SkillsCategoryProps> = ({
  category,
  isActive,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={{ x: 10 }}
      onClick={onClick}
      className={`text-left text-sm md:text-xl font-bold font-robotoFlex flex items-center gap-3 transition-all duration-300 ${
        isActive
          ? 'text-orange bg-orange/10 px-2 md:px-6 py-3 rounded-xl'
          : 'text-lightwhite hover:text-orange px-6 py-3'
      }`}
    >
      <motion.span
        initial={false}
        animate={{
          scale: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {isActive && <CircleCheck className="w-6 h-6" />}
      </motion.span>
      {category}
    </motion.button>
  );
};

export function Skills() {
  const [activeSection, setActiveSection] = useState('Frontend');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const category = entry.target.getAttribute('data-category');
          if (category) setActiveSection(category);
        }
      });
    }, options);

    const sections = document.querySelectorAll('.skills-section');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (category: string) => {
    const element = document.querySelector(`[data-category="${category}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-4"
    >
      <motion.h2
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-lightwhite font-robotoFlex text-3xl font-extrabold mb-16 text-center"
      >
        SKILLS
      </motion.h2>
      <div className="container mx-auto">
        <div className="flex flex-row gap-2 justify-between md:justify-normal md:gap-40 lg:gap-12">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="lg:w-1/4 sticky top-24 h-fit"
          >
            <div className="flex flex-col space-y-6 rounded-2xl">
              {Object.keys(skillsData).map((category) => (
                <SkillsCategory
                  key={category}
                  category={category}
                  isActive={activeSection === category}
                  onClick={() => scrollToSection(category)}
                />
              ))}
            </div>
          </motion.div>

          <div className="lg:w-3/4">
            <div className="space-y-32">
              {Object.entries(skillsData).map(([category, skills]) => (
                <motion.div
                  key={category}
                  className="skills-section min-h-[300px]"
                  data-category={category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
