/* eslint-disable react/no-unescaped-entities */
import BigHeading from "../TextUi/BigHeading"
import BlurShape from "../Shapes/BlurShape"
import Paragraph from "../TextUi/Paragraph"
import PrimaryBtn from "../Buttons/PrimaryBtn"
import useMouseEffect from "../../Hooks/useMouseEffect"
import MouseEffectShape from "../Shapes/MouseEffectShape"
const CTA = () => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div className="w-full py-[200px] ">
      <div className="w-full  gradient-border  ">
      <div 
       className="w-full bg-GradientBG  overflow-hidden relative  py-[100px] px-[300px]    rounded-[16px] "  
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
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA