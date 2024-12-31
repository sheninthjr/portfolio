'use client';
import { BookOpen, Contact, Home, Lightbulb, NotebookText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';

function GiftPaper({
  color,
  startX,
  startY,
  direction,
}: {
  color: string;
  startX: number;
  startY: number;
  direction: string;
}) {
  return (
    <div
      className={`fixed ${color} w-4 h-4 rotate-45 z-[999]`}
      style={{
        left: startX,
        top: startY,
        animation: `paper-${direction} 1s forwards`,
      }}
    />
  );
}

interface GiftPaperType {
  id: string;
  color: string;
  startX: number;
  startY: number;
  direction: string;
}

export function Navbar() {
  const [giftPapers, setGiftPapers] = useState<GiftPaperType[]>([]);
  const router = useRouter();
  const navItems = [
    {
      icon: Home,
      label: 'Home',
      color: 'bg-white/90 text-cyan-500',
      particleColor: 'bg-cyan-500',
      route: '/',
    },
    {
      icon: Lightbulb,
      label: 'Projects',
      color: 'bg-white/90 text-yellow-500',
      particleColor: 'bg-yellow-500',
      route: '/projects',
    },
    {
      icon: NotebookText,
      label: 'Resume',
      color: 'bg-white/90 text-blue-500',
      particleColor: 'bg-blue-500',
      route: '/resume',
    },
    {
      icon: BookOpen,
      label: 'Hobbies',
      color: 'bg-white/90 text-green-500',
      particleColor: 'bg-green-500',
      route: '/hobbies',
    },
    {
      icon: Contact,
      label: 'Contact',
      color: 'text-white bg-red-500',
      particleColor: 'bg-red-500',
      route: '/contact',
    },
  ];

  const createGiftPapers = (
    event: MouseEvent<HTMLDivElement>,
    particleColor: string,
    route: string,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const startX = rect.x;
    const startY = rect.y;

    router.push(route);

    const directions = ['topLeft', 'top', 'topRight', 'right', 'left'];
    const newPapers = directions.flatMap((direction) =>
      Array.from({ length: 5 }, (_, i) => ({
        id: `${Date.now()}-${i}-${direction}`,
        startX,
        startY,
        direction,
        color: particleColor,
      })),
    );
    setGiftPapers((prev) => [...prev, ...newPapers]);
    setTimeout(() => {
      setGiftPapers((prev) =>
        prev.filter((p) => !newPapers.find((np) => np.id === p.id)),
      );
    }, 1000);
  };

  return (
    <>
      <div className="fixed left-0 right-0 bottom-2 z-[999]">
        <nav className="border border-neutral-900 p-2 flex bg-gray justify-evenly md:justify-between max-w-3xl mx-auto rounded-xl items-center h-16 bg-black/80">
          {navItems.map(
            ({ icon: Icon, label, color, particleColor, route }) => (
              <div
                key={label}
                className="flex items-center relative group cursor-pointer"
                onClick={(e) => createGiftPapers(e, particleColor, route)}
              >
                <Icon
                  className={`p-2 rounded-full w-10 h-10 md:absolute z-10 ${color}`}
                />
                <div className="relative">
                  <p
                    className="bg-blackish hidden md:block font-robotoFlex pl-4 pr-2 ml-7 py-1 rounded-lg whitespace-nowrap
                  transition-all duration-500 ease-in-out self-center
                  origin-[-10px_50%] group-hover:-rotate-[90deg]"
                  >
                    {label}
                  </p>
                </div>
              </div>
            ),
          )}
        </nav>
      </div>
      {giftPapers.map((paper) => (
        <GiftPaper
          key={paper.id}
          color={paper.color}
          startX={paper.startX}
          startY={paper.startY}
          direction={paper.direction}
        />
      ))}
    </>
  );
}
