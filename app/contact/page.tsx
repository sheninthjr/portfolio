'use client';
import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  BriefcaseBusiness,
  Globe,
  MapPinCheck,
  Send,
} from 'lucide-react';
import type { SocialLink, ContactInformation, FeedbackForm } from '@/types';
import axios from 'axios';
import Link from 'next/link';

const SocialIcon: React.FC<SocialLink> = ({
  icon: Icon,
  href,
  label,
  color,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
    <div className="relative bg-gray-900/90 p-3 rounded-lg transform transition-all duration-500 hover:scale-110 hover:-translate-y-1">
      <Icon
        className={`w-6 h-6 transition-colors duration-300 ${color || 'text-gray-300 group-hover:text-white'}`}
      />
      <span className="sr-only font-robotoFlex">{label}</span>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  </a>
);

export default function Contact() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: '',
    feedback: '',
  });

  const contactInfo: ContactInformation = {
    location: 'Chennai',
    country: 'India',
    remoteWork: true,
    freelancing: true,
  };

  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      href: 'https://github.com/sheninthjr',
      label: 'GitHub',
      color: 'text-gray-200 group-hover:text-white',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sheninthjr',
      label: 'LinkedIn',
      color: 'text-blue-400 group-hover:text-blue-300',
    },
    {
      icon: Twitter,
      href: 'https://x.com/sheninthjr',
      label: 'Twitter',
      color: 'text-sky-400 group-hover:text-sky-300',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/sheninthjr',
      label: 'Instagram',
      color: 'text-pink-400 group-hover:text-pink-300',
    },
    {
      icon: Youtube,
      href: 'https://youtube.com/@sheninthjr',
      label: 'YouTube',
      color: 'text-red-400 group-hover:text-red-300',
    },
    {
      icon: Mail,
      href: 'mailto:sheninthjr23@gmail.com',
      label: 'Email',
      color: 'text-yellow-400 group-hover:text-yellow-300',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/feedback', {
        name: formData.name,
        feedback: formData.feedback,
      });
      if (res.status === 201) {
      }
    } catch (error) {
      console.error(error);
    }
    setFormData({ name: '', feedback: '' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="relative container mx-auto md:px-4 pt-8 pb-12 lg:py-28">
        <div className="max-w-6xl mx-auto bg-gray-900/80 backdrop-blur-xl rounded-2xl md:border border-gray shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-8">
              <div className="relative">
                <h2 className="text-3xl font-bold text-transparent font-robotoFlex bg-clip-text bg-lightwhite">
                  Let&apos;s Connect
                </h2>
                <p className="mt-2 text-gray-400 font-metrophobic">
                  Open for opportunities and collaborations
                </p>
              </div>
              <div className="space-y-6 backdrop-blur-md bg-gray-800/30 p-6 rounded-xl border border-gray">
                <div className="flex items-center space-x-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="p-3 rounded-lg bg-blue-500/10">
                    <MapPinCheck className="text-blue-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 font-robotoFlex">
                      Location
                    </p>
                    <p className="text-gray-400 font-metrophobic">
                      {contactInfo.location}, {contactInfo.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <Globe className="text-green-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200 font-robotoFlex">
                      Remote Work
                    </p>
                    <p className="text-gray-400 font-metrophobic">
                      Available Worldwide
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <BriefcaseBusiness className="text-purple-400 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold font-robotoFlex text-gray-200">
                      Freelancing
                    </p>
                    <p className="text-gray-400 font-metrophobic">
                      Open to Opportunities
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>
            </div>
            <div className="backdrop-blur-md bg-gray-800/30 p-8 rounded-xl border border-gray">
              <h2 className="text-2xl font-bold text-gray-200 font-robotoFlex mb-6">
                Send Feedback
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-lg font-robotoFlex font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-gray border font-metrophobic border-neutral-600 outline-none rounded-lg"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="feedback"
                    className="block text-lg font-robotoFlex font-medium text-gray-400 mb-2"
                  >
                    Feedback
                  </label>
                  <textarea
                    id="feedback"
                    value={formData.feedback}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        feedback: e.target.value,
                      }))
                    }
                    rows={4}
                    className="w-full bg-gray px-4 py-3 border border-neutral-600 font-metrophobic rounded-lg 
                             outline-none resize-none"
                    placeholder="Your feedback"
                    required
                  />
                </div>
                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="w-fit group relative inline-flex items-center justify-center px-4 font-robotoFlex py-3 
                           overflow-hidden font-medium rounded-lg bg-gray
                           text-white transition duration-300 ease-out border-2 border-transparent
                           "
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray group-hover:translate-x-0 ease">
                      <Send className="w-5 h-5" />
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                      Submit Feedback
                    </span>
                    <span className="relative invisible">Submit Feedback</span>
                  </button>
                  <Link
                    href={'/feedback'}
                    className="font-metrophobic h-fit text-cyan-500 hover:text-cyan-300"
                  >
                    View Feedback
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
