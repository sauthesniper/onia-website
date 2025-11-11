'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener('resize', resizeCanvas);

//     // Matrix characters - mix of AI/ML related symbols and Romanian characters
//     const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()AI∑∫∂∇αβγδεθλμπσφψωΩ∞∈∉⊂⊃∪∩';
//     const charArray = characters.split('');

//     const fontSize = 14;
//     const columns = Math.floor(canvas.width / fontSize);

//     // Array of drops - one per column
//     const drops: number[] = [];
//     for (let i = 0; i < columns; i++) {
//       drops[i] = Math.random() * -100; // Start with random positions
//     }

//     // Colors for variety
//     const colors = [
//       'rgba(0, 255, 255, 0.9)',     // Cyan (primary)
//       'rgba(100, 255, 218, 0.9)',   // Turquoise
//       'rgba(0, 200, 255, 0.9)',     // Light blue
//       'rgba(0, 150, 255, 0.9)',     // Blue
//     ];

//     let animationFrameId: number;

//     const draw = () => {
//       // Fade effect for trailing
//       ctx.fillStyle = 'rgba(30, 58, 138, 0.05)'; // Very subtle fade with blue tint
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.font = `${fontSize}px monospace`;

//       for (let i = 0; i < drops.length; i++) {
//         // Random character
//         const char = charArray[Math.floor(Math.random() * charArray.length)];
        
//         // Use different colors for variety
//         const colorIndex = Math.floor(Math.random() * colors.length);
//         ctx.fillStyle = colors[colorIndex];

//         // Draw the character
//         const x = i * fontSize;
//         const y = drops[i] * fontSize;
//         ctx.fillText(char, x, y);

//         // Add glow effect for some characters
//         if (Math.random() > 0.95) {
//           ctx.shadowBlur = 10;
//           ctx.shadowColor = colors[colorIndex];
//           ctx.fillText(char, x, y);
//           ctx.shadowBlur = 0;
//         }

//         // Reset drop to top randomly after it crosses the screen
//         if (y > canvas.height && Math.random() > 0.975) {
//           drops[i] = 0;
//         }

//         // Move drop down
//         drops[i]++;
//       }

//       animationFrameId = requestAnimationFrame(draw);
//     };

//     draw();

//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
