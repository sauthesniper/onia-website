'use client';

import Image from "next/image";
import { useState } from "react";

export default function InteractiveLogo() {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  return (
    <div 
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/logos/roai.svg"
        alt="ROAI Logo"
        width={400}
        height={400}
        className="h-72 w-72 lg:h-96 lg:w-96 object-contain drop-shadow-2xl transition-all duration-300 ease-out"
        priority
        style={{ 
          transform,
          transformStyle: 'preserve-3d' 
        }}
      />
    </div>
  );
}
