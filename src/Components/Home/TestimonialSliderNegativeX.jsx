/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Testimonial from "./Testimonial";
import useAutoSlider from "../../Hooks/useAutoSlider";
const TestimonialSliderPositiveX = ({testimonial}) => {
  const otherFinalPositionCalculation = (width) => -width / 6.8 - 24;
  const { ref, style, handleHoverStart, handleHoverEnd } = useAutoSlider(15,120, otherFinalPositionCalculation);
  return (
    <div>
          <motion.div
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          onTap={handleHoverStart}
          onTapCancel={handleHoverEnd}
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