/* eslint-disable react/prop-types */
import Paragraph from "../TextUi/Paragraph"
import SubTitle from "../TextUi/SubTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
const Service = ({service}) => { 
    const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div
      className={`gradient-border ${service.isSpan ? 'col-span-2':'col-span-1'} bg-GradientBG min-h-full h-[332px]  
       rounded-[16px] text-left  `}
       onMouseMove={handleMouseMove}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       >
        <div className="w-full h-full px-[32px] pt-[8px] pb-[32px] rounded-[16px] relative overflow-hidden">
       <MouseEffectShape controls={controls} mousePosition={mousePosition} />
            <div className="flex flex-col h-full items-start justify-between ">  
            <span 
                className="text-[61px] font-semibold z-10 tracking-wider" 
                style={{ WebkitTextStroke: '1px #F4F4F5', color: 'transparent' }}>{service.ServiceNumber}
            </span>
            <div className="flex flex-col  w-[100%] gap-[4px]  ">
              <span className={`${service.isSpan ? 'w-[100%]':'w-[80%]'} z-10`}>
                <SubTitle>{service.ServiceTItle}</SubTitle>
              </span>
                <span className={`${service.isSpan ? 'w-[60%]':'w-[90%]'} z-10`}>
                <Paragraph isCentered={false}>{service.ServiceDetail}</Paragraph>
                </span>
                </div>
            </div>
                <div className="w-[142px] h-[142px] absolute -top-8 -right-8  bg-[#fff3] rounded-full flex items-center justify-start pl-10">
                  <Icon icon={service.icon.name} width={service.icon.width} height={service.icon.height} />
                </div>
        </div>
      
      </div>
  )
}

export default Service