import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"
import SmallHeading from "../TextUi/SmallHeading"
import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
const StatsTitle = () => {
  const variants = useScrollAnimationVariants(120, 0, 0.5);

  return (
    <motion.div  
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants} 
    className="flex flex-col item-center justify-center gap-[16px] lg:mt-[120px] mt-[40px] lg:w-[100%] w-full">
        <div className="flex flex-col items-center lg:items-start lg:justify-start justify-center lg:text-left text-center">
          <MediumHeading>Statistics</MediumHeading>
          <SmallHeading>Shop with Confidence</SmallHeading>
        </div>
        <span className="lg:text-left text-center">
        <Paragraph  >Unlock insights into your shopping behavior with Bytewise's advanced analytics. 
          Our tools help you track your purchases, monitor trends, and discover personalized product recommendations, 
          ensuring you make informed decisions every time you shop with us.</Paragraph>
        </span>
     
    </motion.div>
  )
}
export default StatsTitle