import React from 'react';
import {
  Users,
  Video,
  Share2,
  MessageSquare,
  BookOpen,
  Code,
  Database,
  Network,
  ThumbsUp,
} from 'lucide-react';

export function Youtube() {
  const courses = [
    {
      title: 'Data Structures & Algorithms',
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: 'Full Stack Development',
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: 'System Design',
      icon: <Network className="w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-white/5 rounded-xl w-full h-full px-8 py-4 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6 rounded-xl transition-all duration-300">
          <div className="relative group">
            <img
              src="/pic.jpeg"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-700 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500"
              alt="Profile"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
              Educational
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-white hover:text-blue-400 font-robotoFlex transition-colors duration-300">
                Sheninth Jr
              </h1>
              <p className="text-gray-400 text-lg font-metrophobic">
                @sheninthjr
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-metrophobic">
              <div className="bg-white/10 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                <Users className="w-6 h-6 text-blue-400 mb-2" />
                <div className="text-sm text-gray-400">Subscribers</div>
                <div className="text-2xl font-bold text-white">761</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                <Video className="w-6 h-6 text-purple-400 mb-2" />
                <div className="text-sm text-gray-400">Videos</div>
                <div className="text-2xl font-bold text-white">88</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                <BookOpen className="w-6 h-6 text-green-400 mb-2" />
                <div className="text-sm text-gray-400">Courses</div>
                <div className="text-2xl font-bold text-white">3</div>
              </div>
              <div className="bg-white/10 p-4 rounded-xl transition-all duration-300 cursor-pointer">
                <ThumbsUp className="w-6 h-6 text-blue-500 mb-2" />
                <div className="text-sm text-gray-400">Likes</div>
                <div className="text-2xl font-bold text-white">2.45K</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed font-metrophobic">
              I'm here to teach you all you need to know about coding. Thus,
              please remember to subscribe to my channel and stay informed.
              Share your thoughts in the comments section.
            </p>

            <div className="flex flex-wrap gap-4 font-metrophobic">
              <a
                href="https://youtube.com/@sheninthjr"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded-full transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </a>
              <button className="bg-white/10 text-white px-4 py-1 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white/5 px-4 py-2 flex items-center font-metrophobic rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white/10 rounded-lg text-blue-400">
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {course.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
