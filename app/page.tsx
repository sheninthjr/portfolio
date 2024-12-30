'use client';
import { About } from '@/components/About';
import { Header } from '@/components/Header';
import { LatestProjects } from '@/components/LatestProjects';
import { Skills } from '@/components/Skills';

export default function App() {
  return (
    <div className="bg-blackish p-6 backdrop-blur-lg h-[85%] top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 overflow-y-hidden overflow-x-hidden">
      <div className="text-white space-y-6 h-full flex flex-col">
        <Header />
        <div className="rounded-xl overflow-y-auto flex-1 space-y-4 overflow-x-hidden">
          <About />
          <Skills />
          <LatestProjects />
        </div>
      </div>
    </div>
  );
}
