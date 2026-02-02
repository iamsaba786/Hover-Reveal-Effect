import React, { useState, useCallback, useEffect } from "react";

const HoverRevealImage = ({ isSpiderMan }) => {
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [smoothPos, setSmoothPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTargetPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  // SMOOTH LERP (keep your genius code!)
  useEffect(() => {
    const id = setInterval(() => {
      setSmoothPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.12,
        y: prev.y + (targetPos.y - prev.y) * 0.12,
      }));
    }, 16);

    return () => clearInterval(id);
  }, [targetPos]);

  return (
    <>
      {/* FULL SCREEN TOP IMAGE BACKGROUND */}
      <div
      // className="fixed inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat -z-10 opacity-95"
      // style={{ backgroundImage: 'url("/images/top-image.jpg")' }}
      />

      {/* MAIN CONTENT */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
        {/* Reveal Card - Now on top of full bg */}
        <div
          className="
            relative
            w-screen
            h-screen
            overflow-hidden
            cursor-pointer
            transition-all
            duration-300
            
          "
          onMouseMove={handleMouseMove}
          // onMouseLeave={() => setTargetPos({ x: 50, y: 50 })}
        >
          {/* Reveal Hole - BOTTOM IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center will-change-[clip-path]"
            style={{
              backgroundImage: `url("/images/${isSpiderMan ? "bottom-image.jpg" : "top-image.jpg"}")`,
              clipPath: `circle(10% at ${smoothPos.x}% ${smoothPos.y}%)`,
              // transition: "clip-path 0.25s ease-out",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default HoverRevealImage;
