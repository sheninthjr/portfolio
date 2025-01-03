'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, User, ChevronDown, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';

type FeedbackForm = {
  id: string;
  name: string;
  feedback: string;
};

const Feedback = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<FeedbackForm[]>([]);

  useEffect(() => {
    async function main() {
      const res = await axios.get('/api/feedback');
      setFeedback(res.data);
    }
    main();
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full max-w-4xl mx-auto px-4 py-6 flex gap-14 md:gap-40 items-center">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            whileHover={{ x: -4 }}
            className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={20} />
          </motion.div>
          <span className="hidden md:block">Back to Contact</span>
        </Link>
        <h2 className="text-2xl font-bold font-robotoFlex text-white/90 text-center">
          User Feedback
        </h2>
        <div></div>
      </div>
      <div className="flex-grow overflow-hidden max-w-2xl mx-auto w-full px-4 pb-6">
        <div className="h-[92%] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-sm font-metrophobic rounded-xl border border-neutral-700 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/8"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/8 ring-1 ring-white/20">
                      <User size={16} className="text-white/70" />
                    </div>
                    <span className="text-lg text-white/90 font-semibold">
                      {item.name}
                    </span>
                  </div>
                  <motion.button
                    onClick={() => toggleExpand(item.id)}
                    className="flex items-center gap-1.5 text-white/70 hover:text-white/90 transition-colors"
                  >
                    <span className="text-sm font-medium">
                      {expandedId === item.id ? 'Hide' : 'View'}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>
                </div>
              </div>
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-white/10 bg-white/3"
                  >
                    <div className="p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-white/70">
                          <MessageSquare size={16} />
                          <span className="text-sm font-medium">Feedback</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed pl-6">
                          {item.feedback}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
