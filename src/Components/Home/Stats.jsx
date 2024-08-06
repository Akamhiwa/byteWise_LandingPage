/* eslint-disable react/prop-types */
import useMouseEffect from '../../Hooks/useMouseEffect';
import MouseEffectShape from '../Shapes/MouseEffectShape';
import MediumHeading from '../TextUi/MediumHeading';
import { motion } from 'framer-motion';
import Paragraph from '../TextUi/Paragraph'
import useScrollAnimationVariants from '../../Hooks/useScrollAnimationVariants';
import CountUp from 'react-countup';
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
const Stats = ({stats}) => {
  const [counterOn,setCounterOn]=useState(false)
  
  const { value, operator, label } = stats;
    const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
    const variants = useScrollAnimationVariants(-80, 0, 0.8);
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants}
    className='relative inline-block p-[1px] w-full rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] 
    to-[rgba(142,142,143,0)] bg-clip-padding border border-transparent m-2'>

       <div 
        className='h-[200px]  w-full flex items-center relative  justify-center rounded-[16px] flex-col bg-GradientBG  '
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <MouseEffectShape controls={controls} mousePosition={mousePosition} />
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <span className='flex'>
              {counterOn &&<MediumHeading> <CountUp start={value.start} end={value.end} duration={4} separator="," className=""  /></MediumHeading>
            }
               <MediumHeading>{operator}</MediumHeading>
            </span>
            </ScrollTrigger>
            <Paragraph>{label}</Paragraph>
        </div>
    </motion.div>
   
  )
}

export default Stats