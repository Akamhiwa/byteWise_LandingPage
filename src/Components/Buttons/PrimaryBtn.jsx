/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useButtonVariants from "../../Hooks/useButtonVariants";
const PrimaryBtn = ({UrlPage,children}) => {
  const buttonVariants = useButtonVariants();
  return (
    <motion.div
    whileHover="hover"
    whileTap="tap"
    variants={buttonVariants}
    className="z-10"
  >
    <NavLink
      to={UrlPage}
      className="py-[14px] md:px-[60px] px-[42px] w-full   bg-Primary lg:text-[16px] text-[14px]
       tracking-widest uppercase rounded-[16px] font-bold hover:shadow-glow"
    >
      {children}
    </NavLink>
  </motion.div>
  )
}

export default PrimaryBtn