/* eslint-disable react/prop-types */
import { motion } from "framer-motion"
const MouseEffectShape = ({controls,mousePosition}) => {
  return (
    <motion.div
    className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-[16px]"
    animate={controls}
    initial={{ opacity: 0 }}
    style={{
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(21, 29, 44, 0.7), transparent 70%)`,
    }}
  ></motion.div>
   
  )
}

export default MouseEffectShape