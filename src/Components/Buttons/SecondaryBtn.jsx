/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import useButtonVariants from '../../Hooks/useButtonVariants';
const SecondaryBtn = ({UrlPage,children}) => {
  const buttonVariants = useButtonVariants();

  return (

    <motion.div
    whileHover="hover"
    whileTap="tap"
    variants={buttonVariants}
    className='relative  h-full  lg:py-[14px]  py-[12px] px-[1px]  rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]  '
  >
    <NavLink
      to={UrlPage}
      className="py-[14px] md:px-[60px] px-[42px] lg:text-[16px] whitespace-nowrap text-[14px] uppercase tracking-widest rounded-[16px] font-bold"
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