"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = 25;
    const cols = 40;
    const total = rows * cols;

    // Create all squares
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < total; i++) {
      const square = document.createElement("div");
      square.className = "matrix-square";
      square.dataset.index = String(i);
      fragment.appendChild(square);
    }
    container.appendChild(fragment);

    const squares = Array.from(container.querySelectorAll(".matrix-square"));
    const maxRadius = 2;

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!target.classList.contains("matrix-square")) return;

      const index = parseInt(target.dataset.index || "0");
      const row = Math.floor(index / cols);
      const col = index % cols;

      squares.forEach((square, idx) => {
        const targetRow = Math.floor(idx / cols);
        const targetCol = idx % cols;
        const distance = Math.sqrt(
          Math.pow(targetRow - row, 2) + Math.pow(targetCol - col, 2)
        );

        if (distance <= maxRadius) {
          const delay = distance * 15;
          setTimeout(() => {
            square.classList.add("splash");
            setTimeout(() => {
              square.classList.remove("splash");
            }, 300);
          }, delay);
        }
      });
    };

    container.addEventListener("mouseover", handleMouseOver);

    return () => {
      container.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <div
        ref={containerRef}
        className="matrix-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(40, 0.5em)",
          gridTemplateRows: "repeat(25, 0.5em)",
          gap: "2px",
        }}
      />
      <style jsx>{`
        .matrix-square {
          width: 0.5em;
          height: 0.5em;
          background-color: #5b21b6;
          opacity: 0.4;
          transition: all 0.3s ease;
        }

        .matrix-square.splash {
          background-color: #a78bfa;
          transform: scale(0.6);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
