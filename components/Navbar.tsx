"use client";
export default function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[120] w-fit">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-10 py-4 rounded-full flex gap-10 text-[10px] font-black tracking-[0.2em] uppercase">
        <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
}