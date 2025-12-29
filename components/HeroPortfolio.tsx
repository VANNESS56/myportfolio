"use client";
import { motion } from "framer-motion";

export default function HeroPortfolio() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#050505] px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-500 font-mono mb-4 tracking-widest text-sm"
        >
          {"<HELLO WORLD />"}
        </motion.p>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
        >
          I'M VANNESS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            WEB DEVELOPER
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 mt-8 max-w-xl text-lg md:text-xl leading-relaxed"
        >
          Frontend & Backend Developer yang fokus pada performa, UI/UX yang modern dan lainnya
        </motion.p>
      </div>
    </section>
  );
}