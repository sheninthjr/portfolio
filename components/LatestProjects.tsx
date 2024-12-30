import { latestProjects } from '@/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function LatestProjects() {
  return (
    <>
      <motion.div
        className="bg-gray-800 flex flex-col space-y-3 rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h2 className="text-lightwhite text-3xl font-bold mb-3">
          LATEST PROJECTS
        </h2>
        <div className="flex justify-between items-center">
          {latestProjects.map((value, index) => (
            <div
              key={index}
              className="bg-gray w-80 rounded-xl p-2 flex flex-col space-y-2 shadow-lg shadow-neutral-600"
            >
              <div className="font-robotoFlex text-xl font-bold">
                {value.title}
              </div>
              <div className="font-metrophobic">{value.description}</div>
              <div className="relative">
                <div className="flex flex-col gap-2 font-metrophobic">
                  {value.stacks.map((s, i) => (
                    <div key={i} className="w-fit rounded-xl flex gap-2 px-2">
                      <span className="text-orange">-</span> {s}
                    </div>
                  ))}
                </div>
                <a
                  href={value.link}
                  className="flex gap-1 mr-2 absolute bottom-1 right-1 font-metrophobic justify-end items-center"
                >
                  <ArrowRight className="w-6 h-6 self-center text-orange rounded-full" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="text-center pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-gray-400 text-sm">
          © 2024 Sheninth Jr. All rights reserved.
        </p>
      </motion.div>
    </>
  );
}
