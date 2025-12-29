"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Github, Instagram, Linkedin, Copy, Check } from "lucide-react";

// Import komponen dari folder components
import Navbar from "../components/Navbar";
import Cursor from "../components/Cursor";
import HeroPortfolio from "../components/HeroPortfolio";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import ProjectCard from "../components/ProjectCard";
import Experience from "../components/Experience";
import Preloader from "../components/Preloader";
import Magnetic from "../components/Magnetic";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Kontrol Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("vannessvanness56@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      <main className="bg-[#050505] min-h-screen relative overflow-x-hidden selection:bg-blue-500/30 selection:text-white text-white">
        
        {/* 1. Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[110]"
          style={{ scaleX: scrollYProgress }}
        />

        {/* 2. Global Elements */}
        <Cursor />
        <Navbar />

        {/* 3. Hero Section */}
        <HeroPortfolio />

        {/* 4. About Me Section (Bento Grid) */}
        <div id="about">
          <AboutMe />
        </div>

        {/* 5. Tech Stack Section (Progress Bars) */}
        <div id="skills">
          <TechStack />
        </div>

        {/* 6. Project Showcase */}
        <div id="projects">
          <ProjectCard />
        </div>

        {/* 7. Experience Timeline */}
        <Experience />

        {/* 8. Contact & Footer Section */}
        <section id="contact" className="py-40 px-6 border-t border-white/5 bg-[#030303] relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-[8rem] font-black mb-12 tracking-tighter leading-[0.85]">
                LET'S <span className="text-blue-500 italic font-light">BUILD</span> <br /> SOMETHING.
              </h2>

              <div className="flex flex-wrap justify-center gap-6 mb-20">
                <Magnetic>
                  <a 
                    href="https://wa.me/628999991950" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center gap-3 shadow-2xl active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Me
                  </a>
                </Magnetic>

                <Magnetic>
                  <button 
                    onClick={handleCopyEmail}
                    className="bg-[#111] text-white border border-white/10 px-12 py-5 rounded-full font-bold hover:border-blue-500 transition-all duration-500 flex items-center gap-3 active:scale-95 group"
                  >
                    {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 group-hover:text-blue-500" />}
                    {copied ? "Copied!" : "Copy Email"}
                  </button>
                </Magnetic>
              </div>
            </motion.div>

            {/* Social Links Footer */}
            <div className="mt-48 pt-12 border-t border-white/5 relative z-10">
              <div className="flex justify-center gap-12 mb-12 text-slate-500">
                <Magnetic>
                  <a href="https://github.com/vanness56" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all p-2 inline-block">
                    <Github className="w-6 h-6" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://instagram.com/pannesscoyy" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all p-2 inline-block">
                    <Instagram className="w-6 h-6" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all p-2 inline-block">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </Magnetic>
              </div>
              
              <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.6em] mb-4 italic">
                Designed & Developed by Vanness • 2025
              </p>
              
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/5 border border-blue-500/10 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Available</span>
              </div>
            </div>
          </div>

          {/* Decorative Background Glow */}
          <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none -z-0" />
        </section>
      </main>
    </>
  );
}