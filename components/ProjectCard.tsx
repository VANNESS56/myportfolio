"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Vanness School",
    category: "Next JS",
    desc: "Platform website sekolah modern yang responsif dengan fitur News, Stats, dan Bento Grid Facilities. Dibuat menggunakan Next.js 14 dan Framer Motion.",
    image: "https://i.ibb.co.com/B5Hd9Nkc/image.png",
    github: "#", 
    demo: "https://vannessschool.vercel.app",
    stack: ["Next.js 14", "Tailwind CSS", "Framer Motion"]
  },

   {
    title: "Vanness Store",
    category: "Web App",
    desc: "Website Toko Online yang dikelola menggunakan Database yang terkoneksi langsung ke Apps Script dan dilengkapi dengan Admin Dashboard",
    image: "https://i.ibb.co.com/QFgZXyst/image.png",
    github: "#",
    demo: "https://vannessstore.id",
    stack: ["HTML", "JavaScript", "Tailwind CSS"]
  }, 
  
 {
    title: "Website Kelas Sekolah",
    category: "Web App",
    desc: "Website Kelas Sekolah yang terintergrasi ke Admin Dashboard untuk mengelola data Siswa dan Mengedit/Menambahkan Informasi ke papan informasi Website untuk emmpermudah siswa dalam membaca dan mengingat informasi kelas yang diberikan.",
    image: "https://i.ibb.co.com/BdSYzLh/image.png",
    github: "#",
    demo: "https://demowebkelas-alpha.vercel.app/",
    stack: ["HTML", "JavaScript", "Tailwind CSS", "React", "Framer Motion"]
  }, 

{
    title: "Encryption Tool",
    category: "Tools",
    desc: "Web Tool sederhana yang digunakan untuk Mengenkripsi kode dalam format base64 dengan 4 level berbeda",
    image: "https://i.ibb.co.com/fVxyw5WQ/image.png",
    github: "#",
    demo: "https://v-encryption.vercel.app/",
    stack: ["HTML", "JavaScript", "Tailwind CSS"]
  }, 

{
    title: "V Clean",
    category: "Web App",
    desc: "Laundry Landing Page untuk UMKM yang dibuat menggunakan NextJS",
    image: "https://i.ibb.co.com/d463jyrL/image.png"",
    github: "#",
    demo: "https://v-encryption.vercel.app/",
    stack: ["Next.js", "Tailwind CSS"]
  }, 
  
];

export default function ProjectCard() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-16 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-blue-500"></span>
          Featured Work
        </h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <h3 className="text-4xl font-black text-white mt-4 mb-6 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map((tech, index) => (
                      <span key={index} className="text-[10px] bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a href={project.github} className="flex items-center gap-2 text-white text-sm font-bold hover:text-blue-500 transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white text-sm font-bold hover:text-blue-500 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative group-hover:scale-105 transition-transform duration-700">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="rounded-xl shadow-2xl shadow-blue-500/10 border border-white/5 w-full object-cover"
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
