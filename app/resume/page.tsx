'use client';
import { Terminal } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollRevealSectionProps {
  children: ReactNode;
  delay?: number;
}

const ScrollRevealSection = ({
  children,
  delay = 0,
}: ScrollRevealSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blackish/80 p-6 backdrop-blur-lg h-[90%] md:h-[85%] top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 md:border border-white/10 md:shadow-lg shadow-white/5 overflow-hidden"
    >
      <div className="flex flex-col space-y-4 h-full">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-robotoFlex font-extrabold text-4xl text-lightwhite"
        >
          RESUME
        </motion.div>

        <div className="flex flex-col md:space-y-14 ld:space-y-20 overflow-y-auto h-full">
          <div className="flex flex-col space-y-4">
            <ScrollRevealSection>
              <div className="font-bold text-2xl font-metrophobic text-orange">
                Education
              </div>
            </ScrollRevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 md:space-y-0 mx-auto lg:mx-0">
              {[
                {
                  school: 'Velammal Institute of Technology',
                  course: 'B.Tech(Artificial Intelligence & Data Science)',
                  period: 'November 2021 - Present',
                  score: '8.6/10',
                  scoreLabel: 'CGPA',
                },
                {
                  school: 'Hebron Matriculation and Higher Secondary School',
                  course: 'Computer Science(11th & 12th)',
                  period: 'June 2019 - March 2021',
                  score: '88.5/100',
                  scoreLabel: 'Percentage',
                },
                {
                  school: 'Hebron Matriculation and Higher Secondary School',
                  course: 'Common Education',
                  period: 'June 2007 - March 2019',
                  score: '84/100',
                  scoreLabel: 'Percentage',
                },
              ].map((edu, index) => (
                <ScrollRevealSection key={index} delay={0.2 * index}>
                  <div className="font-metrophobic relative">
                    <div className="flex flex-col space-y-1 p-2 w-80 rounded-xl h-48 border-4 border-neutral-700">
                      <span className="text-lightwhite text-lg">
                        {edu.school}
                      </span>
                      <span className="text-white text-lg">{edu.course}</span>
                      <span className="font-semibold text-white/40">
                        {edu.period}
                      </span>
                      <div className="flex justify-between rounded-xl bg-gray p-2 items-center">
                        <span>{edu.scoreLabel}</span>
                        <span className="bg-lightwhite text-blackish px-2 rounded-lg font-bold">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-[40%]">
                      <div className="bg-gray h-8 w-10"></div>
                      <div className="absolute bg-gray h-4 w-24 -right-[70%]"></div>
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-16 md:pt-0">
            <ScrollRevealSection>
              <div className="font-bold text-2xl font-metrophobic text-orange">
                Internship
              </div>
            </ScrollRevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:mx-0">
              {[
                {
                  name: 'Yar Tech Services',
                  period: '3 Months',
                  role: 'R&D Innovation Engineer',
                },
                {
                  name: 'Marchello Tech',
                  period: '1 Months',
                  role: 'Full Stack Developer',
                },
                {
                  name: 'DLK Career Development',
                  period: '1 Months',
                  role: 'Data Science',
                },
              ].map((internship, index) => (
                <ScrollRevealSection key={index} delay={0.2 * index}>
                  <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border w-80 border-white/10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5">
                      <Terminal size={16} className="text-white/60" />
                      <span className="text-sm font-medium font-robotoFlex text-white/60">
                        {internship.name}
                      </span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sm">
                      <code className="text-white/90 font-metrophobic">
                        {`{
  "Name": "${internship.name}",
  "Internship Period": "${internship.period}",
  "Role": "${internship.role}",
}`}
                      </code>
                    </pre>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-10 md:pt-0">
            <ScrollRevealSection>
              <div className="font-bold text-2xl font-metrophobic text-orange">
                Certificates
              </div>
            </ScrollRevealSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto lg:mx-0">
              {[
                { src: '/c5.jpg', title: 'FULLSTACK' },
                { src: '/c2.png', title: 'MONGODB' },
                { src: '/c3.png', title: 'BUSINESS ANALYTICS' },
              ].map((cert, index) => (
                <ScrollRevealSection key={index} delay={0.2 * index}>
                  <div className="relative w-fit">
                    <img
                      src={cert.src}
                      alt="certificate"
                      className="w-80 h-40 rounded-xl object-cover"
                    />
                    <div className="py-2 absolute -bottom-0.5 rounded-b-xl bg-gray w-full font-bold font-metrophobic text-center">
                      {cert.title}
                    </div>
                  </div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
