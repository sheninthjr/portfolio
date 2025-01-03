import { Code, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.div
      className="flex space-x-3 items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row space-x-4 w-full items-center">
        <div className="flex flex-col space-y-3 md:space-y-0 pb-4 md:pb-0 md:flex-row items-center space-x-4 w-full">
          <div>
            <img
              src={'/pic.jpeg'}
              className="w-32 md:w-40 h-36 lg:h-40 rounded-3xl"
              alt="Profile"
            />
          </div>
          <div className="flex space-y-4 justify-center md:justify-normal w-full items-center">
            <div className="flex flex-col space-y-4">
              <h1 className="font-robotoFlex text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-lightwhite font-bold">
                Hey, I&apos;m <span className="text-white">Sheninth Jr</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-2 items-center font-metrophobic">
                <div className="flex gap-1 border justify-center w-fit items-center self-center border-neutral-700 text-lightwhite font-bold px-2 rounded-xl">
                  <Code className="text-[#4DA44B] w-5 h-5" />
                  <span>Open Source Contributor</span>
                </div>
                <a
                  href="https://youtube.com/@sheninthjr"
                  className="flex gap-1 border border-neutral-700 w-fit text-lightwhite font-bold  px-2 rounded-xl"
                >
                  <Youtube className="text-red-500" /> Youtuber
                </a>
              </div>
              <motion.div
                className="font-metrophobic text-lightwhite text-xl md:text-2xl font-semibold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p>
                  I Love building{' '}
                  <span className="text-white px-1 rounded-xl">SAAS</span>{' '}
                  products
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <FloatingIcons /> */}
      </div>
    </motion.div>
  );
}

export function MobileHeader() {
  return (
    <motion.div
      className="flex space-x-3 items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row space-x-4 w-full items-center">
        <div className="flex flex-col space-y-3 md:space-y-0 pb-4 md:pb-0 md:flex-row items-center space-x-4 w-full">
          <div>
            <img
              src={'/pic.jpeg'}
              className="w-32 md:w-40 h-36 lg:h-40 rounded-3xl"
              alt="Profile"
            />
          </div>
          <div className="flex space-y-4 justify-center md:justify-normal w-full items-center">
            <div className="flex flex-col space-y-4">
              <h1 className="font-robotoFlex text-4xl md:text-3xl lg:text-4xl xl:text-5xl text-lightwhite font-bold">
                Hey, I&apos;m <span className="text-white">Sheninth Jr</span>
              </h1>
              <div className="flex flex-col md:flex-row gap-2 items-center font-metrophobic">
                <div className="flex gap-1 border justify-center w-fit items-center self-center border-neutral-700 text-lightwhite font-bold px-2 rounded-xl">
                  <Code className="text-[#4DA44B] w-5 h-5" />
                  <span>Open Source Contributor</span>
                </div>
                <a
                  href="https://youtube.com/@sheninthjr"
                  className="flex gap-1 border border-neutral-700 w-fit text-lightwhite font-bold  px-2 rounded-xl"
                >
                  <Youtube className="text-red-500" /> Youtuber
                </a>
              </div>
              <motion.div
                className="font-metrophobic text-lightwhite text-xl md:text-2xl font-semibold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p>
                  I Love building{' '}
                  <span className="text-white px-1 rounded-xl">SAAS</span>{' '}
                  products
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <FloatingIcons /> */}
      </div>
    </motion.div>
  );
}
