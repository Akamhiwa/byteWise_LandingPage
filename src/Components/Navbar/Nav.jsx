/* eslint-disable no-mixed-spaces-and-tabs */
import { NavLink } from "react-router-dom"
import Languages from "./Languages"
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const Nav = () => {
  const variants = useScrollAnimationVariants(0, -80, 0.5);
  const [isNav,setIsNav]=useState(false)

  return (
    <>
    <motion.div 
    className={`2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px] h-[95px] fixed inset-0 z-40 backdrop-blur-md`}
    style={{ 
      background: 'linear-gradient(to bottom, rgba(21, 29, 44, 0.25), rgba(11, 16, 24, 0.25))'
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants}
    >
         <div className="flex items-center h-full justify-between ">
        <NavLink to={'/Home'} className={' uppercase tracking-widest md:text-[31px] text-[21px] font-semibold '}>ByteWIse</NavLink>
        <ul className=" md:flex hidden items-center justify-center lg:gap-[32px] gap-[16px] ">
            <NavLink to={'/Home'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>Home</NavLink>
            <NavLink to={'/Product'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>Products</NavLink>
            <NavLink to={'/About'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>About US</NavLink>
            <NavLink to={'/Contact'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>Contact Us</NavLink>
        </ul>
        <div className="flex item-center justify-center  gap-[24px]">
          <Languages />
          <div className="relative md:hidden flex  p-[1px] rounded-[16px]  bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]
             bg-clip-padding border border-transparent" onClick={()=>setIsNav(true)}>
            <span className="flex md:hidden bg-GradientBG rounded-[16px] p-1 items-center h-[37px] w-[37px]   justify-center  cursor-pointer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22 18.005c0 .55-.446.995-.995.995h-8.01a.995.995 0 0 1 0-1.99h8.01c.55 0  .995.445.995.995M22 12c0 .55-.446.995-.995.995H2.995a.995.995 0 1 1 0-1.99h18.01c.55 0 .995.446.995.995m-.995-5.01a.995.995 0 0 0 0-1.99H8.995a.995.995 0 1 0 0 1.99z"/>
            </svg>
            </span>
          </div>
        </div>
    </div>
    </motion.div>
    <AnimatePresence>
    {isNav &&(
          <motion.div 
          className="fixed bg-GradientBG md:hidden flex flex-col items-center justify-center gap-[32px] inset-0 z-40" 
          initial={{x:"100%"}}
          animate={{x:0}}
          exit={{x:"100%"}}
          transition={{duration:0.6}}>
              <span className="absolute top-9 right-9  hover:bg-[#363C49] py-3 px-3  rounded-[16px] cursor-pointer" onClick={()=>setIsNav(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
              </span>
              <NavLink to={'/Home'} className={'text-[41px] uppercase tracking-widest hover:text-Primary'} onClick={()=>setIsNav(PreValue=>!PreValue)}>Home</NavLink>
              <NavLink to={'/Product'} className={'text-[41px] uppercase tracking-widest hover:text-Primary'} onClick={()=>setIsNav(PreValue=>!PreValue)}>Products</NavLink>
              <NavLink to={'/About'} className={'text-[41px] uppercase tracking-widest hover:text-Primary'} onClick={()=>setIsNav(PreValue=>!PreValue)}>About US</NavLink>
              <NavLink to={'/Contact'} className={'text-[41px] uppercase tracking-widest hover:text-Primary'} onClick={()=>setIsNav(PreValue=>!PreValue)}>Contact Us</NavLink>
          </motion.div>
        )}

    </AnimatePresence>
      
    </>
     
  )
}

export default Nav