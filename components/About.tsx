import { motion } from 'motion/react';

export function About() {
  return (
    <motion.div
      className="rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="text-lightwhite text-3xl font-extrabold mb-3 font-robotoFlex">
        ABOUT ME
      </h2>
      <p className="text-xl leading-relaxed font-metrophobic rounded-2xl text-justify">
        Hey, I solve real-world problems through code. Building complex
        applications is what I do best - from ideation to deployment. I work
        extensively with{' '}
        <span className="text-orange font-semibold">Next.js</span> and{' '}
        <span className="text-orange font-semibold">Nodejs</span>, diving deep
        into <span className="text-orange font-semibold">Web3</span>{' '}
        technologies while keeping everything running smoothly through{' '}
        <span className="text-orange font-semibold">DevOps</span>. Open source
        development isn&apos;t just work for me - it&apos;s where I innovate and
        grow. Got a challenging project? Let&apos;s talk about making it happen.
      </p>
    </motion.div>
  );
}
