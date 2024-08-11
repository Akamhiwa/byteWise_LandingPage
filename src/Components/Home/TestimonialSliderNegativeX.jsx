/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";
import useAutoSlider from "../../Hooks/useAutoSlider";
import { useEffect, useState } from "react";
const TestimonialSliderPositiveX = ({testimonial}) => {
  const [duration,setduration]=useState({
    fastduration:55,
    slowDuration:95
    
  })
  const otherFinalPositionCalculation = (width) => -width / 2.58 - 24;
  const { ref, style, handleHoverStart, handleHoverEnd } = useAutoSlider(duration.fastduration, duration.slowDuration, otherFinalPositionCalculation);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) { 
        setduration((prevDuration)=>(
          {
            ...prevDuration,
            fastduration:80,
            slowDuration:120
          }
        ));
      } else {
        setduration({
          fastduration:55,
          slowDuration:95
          
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
          <motion.div
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          className="flex gap-[22px] lg:gap-[32px]"
          ref={ref}
          style={style}
          >
            {
          [...testimonial,...testimonial].map((testimonial,idx)=>(
          <Testimonial testimonial={testimonial} key={idx}/>
          ))
        }
      </motion.div>

    </div>
  )
}

export default TestimonialSliderPositiveX