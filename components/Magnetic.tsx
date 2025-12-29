"use client";
import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      
      // Hitung titik tengah elemen
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      
      // Kita kasih power 0.5 biar tarikannya gak terlalu liar
      setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block" // Agar pas dengan ukuran kontennya
    >
      {children}
    </motion.div>
  );
}