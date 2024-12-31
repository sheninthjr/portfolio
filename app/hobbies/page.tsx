'use client';
import { BlogPost } from '@/components/BlogPost';
import { InterviewExperience } from '@/components/InterviewExperience';
import { Youtube } from '@/components/Youtube';
import { useState } from 'react';

export default function Hobbies() {
  const [activeTab, setActiveTab] = useState('Youtube');

  const tabs = ['Youtube', 'Blog Post', 'Interview Experience'];

  return (
    <div className="bg-blackish/80 p-6 backdrop-blur-lg h-[85%] top-6 rounded-xl max-w-6xl mx-auto fixed w-full left-0 right-0 border border-white/10 shadow-lg shadow-white/5 overflow-y-auto">
      <div className="flex justify-center mb-4 font-robotoFlex">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-2 md:px-4 md:py-2 mx-2 ${
              activeTab === tab
                ? 'border-b-4 md:border-b-8 text-xs md:text-xl border-gray text-white font-bold shadow-md'
                : 'bg-transparent text-xs md:text-lg text-lightwhite hover:text-white'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="p-2 h-[90%] rounded-xl font-metrophobic">
        {activeTab === 'Youtube' && <Youtube />}
        {activeTab === 'Blog Post' && <BlogPost />}
        {activeTab === 'Interview Experience' && <InterviewExperience />}
      </div>
    </div>
  );
}
