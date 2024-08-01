// useMouseEffect.js
import { useState } from 'react';
import { useAnimation } from 'framer-motion';

const useMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    controls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: 0 });
  };

  return {
    mousePosition,
    controls,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useMouseEffect;
