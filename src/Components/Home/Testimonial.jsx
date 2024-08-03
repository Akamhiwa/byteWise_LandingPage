import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
import Paragraph from "../TextUi/Paragraph"
import SubTitle from "../TextUi/SubTitle"

/* eslint-disable react/prop-types */
const Testimonial = ({testimonial}) => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div className=" inline-block p-[1px] rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] 
    to-[rgba(142,142,143,0)] bg-clip-padding border border-transparent">
        <div 
          className="relative bg-GradientBG lg:px-[42px] md:px-[34px] px-[22px] lg:pt-[32px] 
                     md:pt-[24px] pt-[16px] lg:pb-[64px] md:pb-[44px] pb-[32px] rounded-[16px]  flex flex-col lg:gap-[32px] gap-[18px]  lg:w-[636px] md:w-[450px] w-[400px] text-left"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
         >
          <MouseEffectShape controls={controls} mousePosition={mousePosition} />
            <div className="flex gap-[24px] lg:items-start items-center  lg:justify-start">
                <span className="h-[65px] w-[65px] z-10  bg-center rounded-full bg-cover grayscale"    
                style={{ 
                backgroundImage: `url(${testimonial.imagePath})`,
              }}> </span>
                <div className="flex flex-col  ">
                    <SubTitle>{testimonial.name}</SubTitle>
                    <Paragraph>{testimonial.Position}</Paragraph>

                </div>
            </div>

               <Paragraph >{testimonial.Qoute}</Paragraph>
            

        </div>

    </div>
  
  )
}

export default Testimonial