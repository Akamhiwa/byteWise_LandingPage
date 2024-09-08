import { useMemo } from "react";

const useButtonVariants = () => {
  const buttonVariants = useMemo(() => ({
    hover: {
      scale: 1.05, 
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }), []);

  return buttonVariants;
};

export default useButtonVariants;
