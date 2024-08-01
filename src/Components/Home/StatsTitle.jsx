import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"
import SmallHeading from "../TextUi/SmallHeading"
import { motion } from "framer-motion";
/* eslint-disable react/no-unescaped-entities */
const StatsTitle = () => {
  const variants = useScrollAnimationVariants(80, 0, 0.5);

  return (
    <motion.div  
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants} 
    className="flex flex-col item-start justify-start gap-[16px] pt-[120px] w-[50%]">
        <div className="flex flex-col gap text-left">
          <MediumHeading>Statistics</MediumHeading>
          <SmallHeading>Shop with Confidence</SmallHeading>
        </div>
        <Paragraph  isCentered={false} >Unlock insights into your shopping behavior with Bytewise's advanced analytics. 
          Our tools help you track your purchases, monitor trends, and discover personalized product recommendations, 
          ensuring you make informed decisions every time you shop with us.</Paragraph>
    </motion.div>
  )
}
export default StatsTitle