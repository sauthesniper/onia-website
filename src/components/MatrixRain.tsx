'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const squaresRef = useRef<Map<string, { opacity: number; targetOpacity: number }>>(new Map());

  const SQUARE_SIZE = 30;
  const SQUARE_GAP = 10;
  const BASE_OPACITY = 0.05;
  const HOVER_OPACITY = 0.3;
  const HOVER_RADIUS = 3;
  const TRANSITION_SPEED = 0.15;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const cellSize = SQUARE_SIZE + SQUARE_GAP;
    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / cellSize);
      const rows = Math.ceil(canvas.height / cellSize);

      // Calculate mouse grid position
      const mouseGridX = Math.floor(mouseRef.current.x / cellSize);
      const mouseGridY = Math.floor(mouseRef.current.y / cellSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cellSize;
          const y = row * cellSize;
          const key = `${col}-${row}`;

          // Initialize square data if not exists
          if (!squaresRef.current.has(key)) {
            squaresRef.current.set(key, { 
              opacity: BASE_OPACITY, 
              targetOpacity: BASE_OPACITY 
            });
          }

          const square = squaresRef.current.get(key)!;

          // Calculate distance from mouse position
          const distX = Math.abs(col - mouseGridX);
          const distY = Math.abs(row - mouseGridY);
          const isInRadius = distX < HOVER_RADIUS && distY < HOVER_RADIUS;

          // Set target opacity based on distance
          if (isInRadius) {
            const maxDist = HOVER_RADIUS - 1;
            const dist = Math.max(distX, distY);
            const falloff = 1 - (dist / maxDist) * 0.7;
            square.targetOpacity = BASE_OPACITY + (HOVER_OPACITY - BASE_OPACITY) * falloff;
          } else {
            square.targetOpacity = BASE_OPACITY;
          }

          // Smooth transition
          square.opacity += (square.targetOpacity - square.opacity) * TRANSITION_SPEED;

          // Draw square
          ctx.fillStyle = `rgba(0, 255, 255, ${square.opacity})`;
          ctx.fillRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
