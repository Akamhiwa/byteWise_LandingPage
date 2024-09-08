/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";
import useAutoSlider from "../../Hooks/useAutoSlider";
import useSliderSettings from "../../Hooks/useSliderSettings";

const TestimonialSliderPositiveX = ({testimonial}) => {
  const { isMobile, duration } = useSliderSettings({ 
    fastDuration: 15, 
    slowDuration: 120 
  });
  const otherFinalPositionCalculation = (width) => width / 3.88 - 24;
  const { ref, style, handleHoverStart, handleHoverEnd } = useAutoSlider(duration.fastDuration, duration.slowDuration, otherFinalPositionCalculation);
    return (
    <div>
          <motion.div
          onHoverStart={!isMobile ? handleHoverStart : null}
          onHoverEnd={!isMobile ? handleHoverEnd : null}
          className="flex lg:gap-[32px] gap-[24px]"
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