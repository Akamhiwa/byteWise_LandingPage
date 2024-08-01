/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js"
import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
const Partner = ({icon}) => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div 
     
      className="relative inline-block p-[2px] rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]
       bg-clip-padding border border-transparent">
        
      <div
        className="relative bg-GradientBG text-white rounded-[16px] flex items-center justify-center gap-[44px] px-[62px] py-[17px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}  
      >
      <MouseEffectShape controls={controls} mousePosition={mousePosition} />
      <span className="z-10">
        <Icon icon={icon} width="50" height="50" />
      </span>
    </div>
  </div>
  )
}

export default Partner