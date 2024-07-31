/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
const SliderBtn = ({handleClick,children}) => {
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
    <motion.button 
    whileHover="hover"
    whileTap="tap"
    variants={buttonVariants}
   className='h-[60px] w-[60px] flex items-center justify-center  bg-Primary rounded-full'
   onClick={handleClick}
   >
    {children}
   </motion.button>
  )
}

export default SliderBtn