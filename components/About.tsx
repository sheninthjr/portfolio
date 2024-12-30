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
      <p className="text-xl leading-relaxed font-metrophobic rounded-2xl">
        I am a highly motivated and versatile software developer specializing in{' '}
        <span className="text-orange font-semibold">
          Full Stack Development
        </span>{' '}
        with expertise in modern frameworks such as{' '}
        <span className="text-orange font-semibold">Next.js</span>,{' '}
        <span className="text-orange font-semibold">React</span>, and{' '}
        <span className="text-orange font-semibold">Node.js</span>. I thrive in
        collaborative environments and enjoy tackling challenges with innovative
        solutions.
      </p>
    </motion.div>
  );
}
