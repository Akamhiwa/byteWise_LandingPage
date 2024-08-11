/* eslint-disable react/prop-types */
import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
import Paragraph from "../TextUi/Paragraph";
import SubTitle from "../TextUi/SubTitle";

const Team = ({team}) => {
    const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div  className="relative inline-block lg:p-[1px] p-[1px]  rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]
           bg-clip-padding border border-transparent"> 

           <div className="bg-GradientBG  lg:w-[450px] w-[300px] relative rounded-[16px] flex items-center justify-start pl-8 lg:pl-14 lg:gap-[32px] gap-[18px] py-[12px] lg:py-[24px]" 
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}  >

             <MouseEffectShape controls={controls} mousePosition={mousePosition} />
             <img src={team.image} alt="" className="lg:h-[93px] lg:w-[93px] w-[75px] h-[75px] rounded-full grayscale"/>
             <div className="flex flex-col gap-[8px] text-left">
                <SubTitle isSemibold={true}>{team.name}</SubTitle>
                <Paragraph>{team.workSpace}</Paragraph>

             </div>

           </div>
     </div>
  )
}

export default Team