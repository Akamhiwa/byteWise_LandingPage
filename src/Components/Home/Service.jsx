/* eslint-disable react/prop-types */
import { useState } from "react";
import Paragraph from "./Paragraph"
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Service = ({service}) => {
    //custom hook
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    controls.start({ opacity: 1 });
  };

  const handleMouseLeave = () => {
    controls.start({ opacity: 0 });
  };
  return (
    <div
      className={`gradient-border ${service.isSpan ? 'col-span-2':'col-span-1'} border-1 bg-GradientBG min-h-full h-[332px]  
       rounded-[16px] text-left relative `}
       onMouseMove={handleMouseMove}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
       >
        <div className="w-full h-full px-[32px] pt-[8px] pb-[32px] rounded-[16px] relative overflow-hidden">
        <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-[16px]"
        animate={controls}
        initial={{ opacity: 0 }}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(21, 29, 44, 0.5), transparent 50%)`,
        }}
      ></motion.div>
            <div className="flex flex-col h-full items-start justify-between ">  
            <span 
                className="text-[61px] font-semibold z-10 tracking-wide" 
                style={{ WebkitTextStroke: '1px #ffffff', color: 'transparent' }}>{service.ServiceNumber}
            </span>
            <div className="flex flex-col  w-[100%] gap-[4px]  ">
                <h1 className={`text-[24px] font-semibold z-10 capitalize leading-snug tracking-wide ${service.isSpan ? 'w-[100%]':'w-[100%]'}`}>{service.ServiceTItle}</h1>
                <span className={`${service.isSpan ? 'w-[60%]':'w-[80%]'} z-10`}>
                <Paragraph Text={service.ServiceDetail} isCentered={false}  />
                </span>
                </div>
            </div>
                <div className="w-[142px] h-[142px] absolute -top-8 -right-8  bg-[#fff3] rounded-full flex items-center justify-start pl-10">
                  {service.icon}
                </div>
        </div>
      
      </div>
  )
}

export default Service