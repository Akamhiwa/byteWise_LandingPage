import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"
import { motion } from "framer-motion";
const Footer = () => {
  const variants = useScrollAnimationVariants(0, 80, 0.5);
  return (
    <motion.div 
      className="flex justify-between items-center bg-GradientBG w-screen 2xl:px-[220px] xl:px-[200px] lg:px-[120px] md:px-[40px] px-[20px] py-[31px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={variants}>
          <MediumHeading>BYTEWISE</MediumHeading>
          <Paragraph> @ 2024 All rights Reserved to ByteWise</Paragraph>
    </motion.div>
  )
}

export default Footer