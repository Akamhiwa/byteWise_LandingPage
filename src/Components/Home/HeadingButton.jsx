import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const HeadingButton = () => {
  const buttonVariants = {
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
  };

  return (
    <div className="flex items-center justify-center gap-[44px]">
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <NavLink
          to={"/Product"}
          className="py-[14px] px-[60px] bg-Primary text-[16px] tracking-widest uppercase rounded-[16px] font-bold shadow-glow hover:shadow-none"
        >
          Products
        </NavLink>
      </motion.div>
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <NavLink
          to={"/About"}
          className="py-[14px] px-[60px] text-[16px] uppercase tracking-widste rounded-[16px] font-bold gradient-border"
          style={{
            background: 'linear-gradient(to bottom, rgba(21, 29, 44, 25), rgba(11, 16, 24, 25))'
          }}
        >
          About Us
        </NavLink>
      </motion.div>
    </div>
  );
};

export default HeadingButton;