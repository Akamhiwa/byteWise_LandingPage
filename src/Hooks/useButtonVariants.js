import { useMemo } from "react";

const useButtonVariants = () => {
  const buttonVariants = useMemo(() => ({
    hover: {
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Example of shadow animation on hover
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
