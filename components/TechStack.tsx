"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Javascript", level: 85, color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
  { name: "Next.js", level: 90, color: "from-slate-200 to-slate-500" },
  { name: "React", level: 88, color: "from-cyan-400 to-cyan-600" },
  { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-teal-600" },
  { name: "Framer Motion", level: 75, color: "from-purple-500 to-pink-600" },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
            Expertise & Proficiency
          </h3>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            TECH <span className="text-slate-500 text-3xl md:text-4xl">STACK.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-slate-500 font-mono text-xs italic">
                  {skill.level}%
                </span>
              </div>

              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
