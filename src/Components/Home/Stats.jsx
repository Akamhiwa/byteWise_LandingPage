/* eslint-disable react/prop-types */
import useMouseEffect from '../../Hooks/useMouseEffect';
import MouseEffectShape from '../Shapes/MouseEffectShape';
import MediumHeading from '../TextUi/MediumHeading';
import { motion } from 'framer-motion';
import Paragraph from '../TextUi/Paragraph'
import useScrollAnimationVariants from '../../Hooks/useScrollAnimationVariants';
const Stats = ({stats}) => {
    const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
    const variants = useScrollAnimationVariants(-80, 0, 0.5);
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants}
    className='relative inline-block p-[2px] rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] 
    to-[rgba(142,142,143,0)] bg-clip-padding border border-transparent m-2'>

       <div 
        className='h-[200px] flex items-center relative  justify-center rounded-[16px] flex-col w-[300px] bg-GradientBG  '
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <MouseEffectShape controls={controls} mousePosition={mousePosition} />
            <MediumHeading>{stats.value}</MediumHeading>
            <Paragraph isCentered={true}>{stats.label}</Paragraph>
        </div>
    </motion.div>
   
  )
}

export default Stats