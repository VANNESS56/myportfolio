"use client";
import { motion } from "framer-motion";

const experiences = [
  { year: "2021 - Present", title: "Frontend & Backend Developer", company: " ", desc: "Membangun web dan landing page UMKM dengan kesan yang profesional" },
  { year: "2020", title: "Web Design Intern", company: " ", desc: "Belajar UI/UX dan implementasi slicing ke React." },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black mb-12 italic">JOURNEY</h2>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-8 border-l border-white/10 pl-8 relative"
            >
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_#3b82f6]" />
              <div>
                <span className="text-blue-500 font-mono text-sm uppercase">{exp.year}</span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.title} — {exp.company}</h3>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}