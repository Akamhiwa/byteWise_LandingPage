/* eslint-disable react/no-unescaped-entities */
import BlurShape from "../Shapes/BlurShape"
import Paragraph from "../TextUi/Paragraph"
import PrimaryBtn from "../Buttons/PrimaryBtn"
import useMouseEffect from "../../Hooks/useMouseEffect"
import MouseEffectShape from "../Shapes/MouseEffectShape"
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants"
import { motion } from "framer-motion"
import BigHeadingAnimate from "../TextUi/BigHeadingAnimate"
const CTA = () => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  const variants = useScrollAnimationVariants(0, 80, 0.5);
  return (
    <div className="w-full lg:py-[200px] flex items-center justify-center py-[100px] ">
      <motion.div className="w-full relative inline-block p-[1px] rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] 
          o-[rgba(142,142,143,0)] bg-clip-padding border border-transparent m-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={variants}
          >
      <div 
       className="w-full bg-GradientBG  overflow-hidden relative py-[35px]  md:px-[24px] px-[12px] lg:h-[500px] h-full  rounded-[16px] "  
       onMouseMove={handleMouseMove}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       >
        <MouseEffectShape controls={controls} mousePosition={mousePosition} />
        <BlurShape />
        <div className="w-full flex items-center justify-center h-full flex-col lg:gap-[48px] gap-[28px] z-10">
          <div className="flex flex-col lg:gap-[24px] gap-[14px] z-10 2xl:w-[65%] md:w-[85%] w-[100%]">
            <BigHeadingAnimate>Have a Question or Need Assistance?</BigHeadingAnimate>
            <Paragraph>Reach out to our team for expert advice, product inquiries, or any assistance you need. We're here to help!</Paragraph>
           </div>
            <PrimaryBtn UrlPage="/Contact" >Contact us</PrimaryBtn>     
        </div>
        </div>
    </motion.div>
      </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA