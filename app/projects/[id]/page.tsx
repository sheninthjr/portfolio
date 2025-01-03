'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { projectDetails } from '@/data/projectDetails';
import {
  Github,
  Globe,
  Lock,
  PackageOpen,
  ArrowLeft,
  Code,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Terminal,
} from 'lucide-react';
import { ProjectType } from '@/types';
import Link from 'next/link';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails.find((p) => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.image.length) % project.image.length,
    );
  };

  const codeSnippet = `{
  "projectName": "${project.title}",
  "type": "${ProjectType[project.type]}",
  "status": "${project.status || 'In Development'}",
  "openSource": ${project.openSource},
}`;

  return (
    <div className="fixed inset-0 bg-blackish/95 overflow-y-auto md:pb-16">
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray/20 via-gray/10 to-transparent rounded-2xl border border-white/10">
          <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
            <nav className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <motion.div
                  whileHover={{ x: -4 }}
                  className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft size={20} />
                </motion.div>
                <span>Back to Projects</span>
              </Link>
              <div className="flex flex-wrap items-center gap-3 font-metrophobic">
                {project.status && (
                  <span
                    className={`flex gap-1 items-center px-3 py-1.5 text-sm ${project.status === 'Not Deployed' ? 'bg-red-500' : 'bg-blue-500/50'} rounded-full font-medium backdrop-blur-sm border border-green-500/20`}
                  >
                    <Globe size={16} />
                    {project.status}
                  </span>
                )}
                {project.openSource ? (
                  <div className="flex gap-1 p-2 bg-green-500/10 rounded-lg">
                    <PackageOpen className="text-green-400" size={20} />
                    <span className="text-sm">Open Source</span>
                  </div>
                ) : (
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <Lock className="text-yellow-400" size={20} />
                  </div>
                )}
              </div>
            </nav>
            <header className="space-y-4 md:space-y-6">
              <motion.h1
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-robotoFlex"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-metrophobic"
              >
                {project.description}
              </motion.p>
            </header>
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              <div className="relative w-full aspect-video md:aspect-auto rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={project.image[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain"
                  />
                </AnimatePresence>

                {project.image.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/80 hover:text-white transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/80 hover:text-white transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.image.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-white scale-125'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="space-y-6 md:space-y-8 font-metrophobic pb-14 md:pb-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white/70">
                    <Code size={20} />
                    <span className="text-lg font-medium font-robotoFlex">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.stacks.map((stack, index) => (
                      <motion.span
                        key={stack}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-lg text-sm md:text-base text-white/80 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        {stack}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/5 rounded-xl text-sm md:text-base text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
                    >
                      <Github size={18} />
                      View on GitHub
                      <ExternalLink size={14} className="ml-1" />
                    </motion.a>
                  )}
                  {project.LiveLink && (
                    <motion.a
                      href={project.LiveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/5 rounded-xl text-sm md:text-base text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10"
                    >
                      <Globe size={18} />
                      Visit Live
                      <ExternalLink size={14} className="ml-1" />
                    </motion.a>
                  )}
                </div>
                <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5">
                    <Terminal size={16} className="text-white/60" />
                    <span className="text-sm font-medium font-robotoFlex text-white/60">
                      Project Configuration
                    </span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code className="text-white/90 font-metrophobic">
                      {codeSnippet}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
