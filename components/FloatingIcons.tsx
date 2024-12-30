import { Github, Linkedin, Twitter, Youtube } from 'lucide-react';

export function FloatingIcons() {
  return (
    <div className="flex border-4 border-neutral-700 p-4 h-40 rounded-2xl relative w-72 overflow-hidden">
      <a
        href="https://github.com/sheninthjr"
        target="_blank"
        className="absolute animate-bounce-1 hover:[animation-play-state:paused]"
      >
        <Github className="bg-gray p-2 h-10 w-10 text-white rounded-full transition-colors cursor-pointer" />
      </a>
      <a
        href="https://x.com/sheninthjr"
        target="_blank"
        className="absolute animate-bounce-2 hover:[animation-play-state:paused]"
      >
        <Twitter className="bg-gray p-2 h-10 w-10 text-white rounded-full transition-colors cursor-pointer" />
      </a>
      <a
        href="https://youtube.com/@sheninthjr"
        target="_blank"
        className="absolute animate-bounce-3 hover:[animation-play-state:paused]"
      >
        <Youtube className="bg-gray p-2 h-10 w-10 text-white rounded-full transition-colors cursor-pointer" />
      </a>
      <a
        href="https://linkedin.com/in/sheninthjr"
        target="_blank"
        className="absolute animate-bounce-4 hover:[animation-play-state:paused]"
      >
        <Linkedin className="bg-gray px-2 h-10 w-10 text-white rounded-full transition-colors cursor-pointer" />
      </a>
    </div>
  );
}
