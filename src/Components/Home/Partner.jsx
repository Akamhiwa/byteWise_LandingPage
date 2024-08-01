/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js"
import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
const Partner = ({icon}) => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();

  return (
    <div
        className="gradient-border relative bg-GradientBG text-white rounded-[16px]
        flex items-center justify-center  gap-[44px] 
           px-[62px] py-[17px]"
           onMouseMove={handleMouseMove}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
      >
          <MouseEffectShape controls={controls} mousePosition={mousePosition} />
          <span className="z-10">
          <Icon icon={icon} width="50" height="50" />
          </span>
</div>
  )
}

export default Partner