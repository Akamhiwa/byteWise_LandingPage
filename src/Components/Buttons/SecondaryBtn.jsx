/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
const SecondaryBtn = ({UrlPage,children}) => {
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
    <motion.div
    whileHover="hover"
    whileTap="tap"
    variants={buttonVariants}
  >
    <NavLink
      to={UrlPage}
      className="py-[14px] px-[60px] text-[16px] uppercase tracking-widest rounded-[16px] font-bold gradient-border"
      style={{
        background: 'linear-gradient(to bottom, rgba(21, 29, 44, 25), rgba(11, 16, 24, 25))'
      }}
    >
    {children}
    </NavLink>
  </motion.div>
  )
}

export default SecondaryBtn