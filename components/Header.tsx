import { Code, Youtube } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.div
      className="flex space-x-3 items-center sticky"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <img
          src={'/pic.jpeg'}
          className="w-40 h-30 rounded-3xl"
          alt="Profile"
        />
      </div>
      <div className="flex space-y-4 justify-between w-full items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="font-robotoFlex text-5xl font-bold">
            Hey, I'm{' '}
            <span className="text-lightwhite text-5xl">Sheninth Jr</span>
          </h1>
          <div className="flex gap-2 font-metrophobic">
            <div className="flex gap-1 border justify-center items-center self-center border-neutral-700 text-lightwhite font-bold px-2 rounded-xl">
              <Code className="text-[#4DA44B] w-5 h-5" />
              <span>Open Source Contributor</span>
            </div>
            <a
              href="https://youtube.com/@sheninthjr"
              className="flex gap-1 border border-neutral-700 text-lightwhite font-bold  px-2 rounded-xl"
            >
              <Youtube className="text-red-500" /> Youtuber
            </a>
          </div>
          <motion.div
            className="font-metrophobic text-2xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p>
              I Love building{' '}
              <span className="text-lightwhite px-1 rounded-xl">SAAS</span>{' '}
              products
            </p>
          </motion.div>
        </div>
        <FloatingIcons />
      </div>
    </motion.div>
  );
}
