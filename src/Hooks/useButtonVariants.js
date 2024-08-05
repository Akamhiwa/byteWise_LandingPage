import { useMemo } from "react";

const useButtonVariants = () => {
  const buttonVariants = useMemo(() => ({
    hover: {
      scale: 1.05, // Example of scale animation on hover
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95 // Example of scale animation on tap/click
    }
  }), []);

  return buttonVariants;
};

export default useButtonVariants;
