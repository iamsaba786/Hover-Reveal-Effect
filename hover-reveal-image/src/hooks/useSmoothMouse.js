import { useState, useCallback, useEffect } from "react";

export const useSmoothMouse = () => {
  const [targetPos, setTargetPos] = useState({ x: 50, y: 50 });
  const [smoothPos, setSmoothPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTargetPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSmoothPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.12,
        y: prev.y + (targetPos.y - prev.y) * 0.12,
      }));
    }, 16);
    return () => clearInterval(id);
  }, [targetPos]);

  return { smoothPos, handleMouseMove, setTargetPos };
};
