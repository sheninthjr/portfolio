'use client';
import { About } from '@/components/About';
import { Header, MobileHeader } from '@/components/Header';
import { LatestProjects } from '@/components/LatestProjects';
import { Skills } from '@/components/Skills';

export default function App() {
  return (
    <div className="bg-blackish px-6 md:p-6 backdrop-blur-lg h-[90%] md:top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 overflow-y-hidden overflow-x-hidden">
      <div className="text-white space-y-6 h-full flex flex-col">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="rounded-xl overflow-y-auto flex-1 space-y-4 overflow-x-hidden">
          <div className="md:hidden">
            <MobileHeader />
          </div>
          <About />
          <Skills />
          <LatestProjects />
        </div>
      </div>
    </div>
  );
}
