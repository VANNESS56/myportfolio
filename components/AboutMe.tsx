"use client";
import { motion } from "framer-motion";
import { MapPin, Coffee, Code2, Sparkles } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <h3 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
            Introduction
          </h3>
          <h2 className="text-4xl font-black text-white tracking-tighter italic">
            ABOUT <span className="text-slate-500">ME</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
          
          {/* Card 1: Deskripsi Utama */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center gap-6 group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Sparkles className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Frontend & Backend Developer yang fokus pada Interaktivitas.</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Halo! Saya Vanness. Saya suka mengubah baris kode menjadi pengalaman visual yang memukau. 
                Fokus utama saya adalah membangun antarmuka web yang tidak hanya berfungsi dengan baik, 
                tetapi juga memberikan kesan mewah melalui animasi yang halus.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Lokasi */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between group"
          >
            <MapPin className="text-slate-500 group-hover:text-blue-500 transition-colors" />
            <div>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Based in</p>
              <h4 className="text-lg font-bold">Sumatera Selatan, Palembang, ID</h4>
            </div>
          </motion.div>

          {/* Card 3: Status */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-blue-600 rounded-[2.5rem] p-8 flex flex-col justify-between text-white"
          >
            <Code2 className="w-8 h-8 opacity-50" />
            <h4 className="font-bold leading-tight">Membangun Web Profile & Dashboard</h4>
          </motion.div>

          {/* Card 4: Passion (Full Width on Mobile) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/5 rounded-[2.5rem] p-8 md:px-12 flex items-center justify-between group"
          >
            <div className="flex items-center gap-6">
              <div className="hidden md:flex w-14 h-14 bg-white/5 rounded-full items-center justify-center text-2xl">
                ☕
              </div>
              <p className="text-slate-300 font-medium">
                Terinspirasi oleh desain minimalis dan <span className="text-white font-bold italic">modern motion.</span>
              </p>
            </div>
            <Coffee className="text-slate-700 group-hover:text-orange-500 transition-colors" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}