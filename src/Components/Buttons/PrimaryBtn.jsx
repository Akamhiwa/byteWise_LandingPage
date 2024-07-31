/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const PrimaryBtn = ({UrlPage,children}) => {
    const buttonVariants = {
        hover: {
          // boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Example of shadow animation on hover
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
    <motion.div
    whileHover="hover"
    whileTap="tap"
    variants={buttonVariants}
  >
    <NavLink
      to={UrlPage}
      className="py-[14px] px-[60px] bg-Primary text-[16px] tracking-widest uppercase rounded-[16px] font-bold hover:shadow-glow"
    >
      {children}
    </NavLink>
  </motion.div>
  )
}

export default PrimaryBtn