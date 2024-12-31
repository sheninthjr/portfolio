'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Building2,
  Briefcase,
  ChevronDown,
  Clock,
  ListChecks,
} from 'lucide-react';
import { interviewDetails } from '@/data/interview';

export function InterviewExperience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="grid gap-6">
        {interviewDetails.map((interview) => (
          <motion.div
            key={interview.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white font-robotoFlex">
                    {interview.name}
                  </h3>
                  <div className="flex items-center gap-4 text-white/60 font-metrophobic">
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      <span>{interview.jobDescription}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 size={18} />
                      <span>{interview.companyType}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                  <Star
                    className="text-yellow-400"
                    size={18}
                    fill="currentColor"
                  />
                  <span className="text-white font-medium">
                    {interview.ratings.toFixed(1)}
                  </span>
                </div>
              </div>
              <motion.button
                onClick={() => toggleExpand(interview.id)}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <span className="text-sm font-medium">Read More</span>
                <motion.div
                  animate={{ rotate: expandedId === interview.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </motion.button>
            </div>
            <AnimatePresence>
              {expandedId === interview.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-white/10"
                >
                  <div className="p-6 space-y-6">
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 font-robotoFlex text-lg font-medium text-white">
                        <ListChecks size={20} />
                        Honest Review
                      </h4>
                      <ul className="space-y-2 text-white/80 font-metrophobic">
                        {interview.honestReview.map((review, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-white/40 min-w-[20px]">
                              {index + 1}.
                            </span>
                            <span>{review}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 text-lg font-medium font-robotoFlex text-white">
                        <Clock size={20} />
                        Interview Rounds
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-metrophobic">
                        {interview.totalInterviewRounds.map((round, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white/80"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white font-medium">
                              {index + 1}
                            </div>
                            <span>{round}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
