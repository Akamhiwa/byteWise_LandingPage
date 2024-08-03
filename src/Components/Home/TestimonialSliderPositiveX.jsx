/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";
import useAutoSlider from "../../Hooks/useAutoSlider";
const TestimonialSliderPositiveX = ({testimonial}) => {
  const otherFinalPositionCalculation = (width) => width / 2.58 - 24;
  const { ref, style, handleHoverStart, handleHoverEnd } = useAutoSlider(43, 95, otherFinalPositionCalculation);
  return (
    <div>
          <motion.div
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          className="flex lg:gap-[44px] gap-[24px]"
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