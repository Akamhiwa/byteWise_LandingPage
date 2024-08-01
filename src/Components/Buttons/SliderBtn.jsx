/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import useButtonVariants from '../../Hooks/useButtonVariants';
const SliderBtn = ({handleClick,children}) => {
  const buttonVariants = useButtonVariants();
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