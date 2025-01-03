'use client';
import { latestProjects } from '@/data';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

export function LatestProjects() {
  const router = useRouter();

  const handlerRouting = (id: string) => {
    router.push(`/projects/${id}`);
  };

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 self-center md:self-auto gap-8 justify-between items-center">
          {latestProjects.map((value, index) => (
            <button
              onClick={() => handlerRouting(value.id)}
              key={index}
              className="bg-gray w-80 rounded-xl p-2.5 flex flex-col space-y-2 shadow-lg shadow-neutral-600"
            >
              <div className="font-robotoFlex text-xl font-bold">
                {value.title}
              </div>
              <div className="font-metrophobic text-start">
                {value.description}
              </div>
              <div className="relative">
                <div className="flex flex-col gap-2 font-metrophobic">
                  {value.stacks.map((s, i) => (
                    <div key={i} className="w-fit rounded-xl flex gap-2 px-2">
                      <span className="text-orange">-</span> {s}
                    </div>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="text-center pt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <p className="text-gray-400 text-md font-metrophobic">
          © 2025 Sheninth Jr. All rights reserved.
        </p>
      </motion.div>
    </>
  );
}
