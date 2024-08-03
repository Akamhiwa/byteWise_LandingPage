/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js"
import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
const Partner = ({icon}) => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div  className="relative inline-block lg:p-[1px] p-[1px]  rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]
           bg-clip-padding border border-transparent">  
      <div className="relative bg-GradientBG text-textColor rounded-[16px]
            flex items-center justify-center lg:px-[62px] lg:py-[17px] px-[43px] py-[12px]"
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