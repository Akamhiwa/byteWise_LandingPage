/* eslint-disable react/no-unescaped-entities */
import BigHeading from "../TextUi/BigHeading"
import BlurShape from "../Shapes/BlurShape"
import Paragraph from "../TextUi/Paragraph"
import PrimaryBtn from "../Buttons/PrimaryBtn"
import useMouseEffect from "../../Hooks/useMouseEffect"
import MouseEffectShape from "../Shapes/MouseEffectShape"
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants"
import { motion } from "framer-motion"
const CTA = () => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  const variants = useScrollAnimationVariants(0, 80, 0.5);
  return (
    <div className="w-full py-[200px] ">
      <motion.div className="w-full relative inline-block p-[2px] rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] 
          o-[rgba(142,142,143,0)] bg-clip-padding border border-transparent m-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={variants}
          >
      <div 
       className="w-full bg-GradientBG  overflow-hidden relative  py-[100px] px-[300px]  rounded-[16px] "  
       onMouseMove={handleMouseMove}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       >
        <MouseEffectShape controls={controls} mousePosition={mousePosition} />
        <BlurShape />
        <div className="w-full flex items-center justify-center h-full flex-col gap-[48px] z-10">
          <div className="flex flex-col gap-[24px] z-10">
            <BigHeading>Have a Question or Need Assistance?</BigHeading>
            <Paragraph isCentered={true}>Reach out to our team for expert advice, product inquiries, or any assistance you need. We're here to help!</Paragraph>
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