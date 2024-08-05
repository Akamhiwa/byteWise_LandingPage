import BreadCrumbs from "./BreadCrumbs"
import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"
import SmallHeading from "../TextUi/SmallHeading"
import SocialContainer from "./SocialContainer"
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants"
import { motion } from "framer-motion"
const ContactUsTextSection = () => {
    const variants1 = useScrollAnimationVariants(0, 60, 0.8);
    const variants2 = useScrollAnimationVariants(-60, 0, 0.6);
  return (
    <div className="pt-4 flex flex-col 2xl:gap-[65px]  gap-[32px]">
        <motion.div className="flex flex-col gap-[12px] xl:w-[100%] w-full" 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             variants={variants1}>
            <BreadCrumbs />
            <span className="flex flex-col gap-[12px]">
                <MediumHeading>How can we assist you today?</MediumHeading>
                <Paragraph>Explore a wide range of cutting-edge technology products, from the latest gadgets to essential accessories.</Paragraph>
            </span>
        </motion.div>
        <motion.div className="flex flex-col gap-[32px]"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
            variants={variants2}>
            <span className="flex flex-col lg:gap-[16px] gap-[8px]">
                <SmallHeading>Contact us</SmallHeading>
                <div className="h-[4px] lg:w-[30%] w-full bg-Primary rounded-full"></div>
            </span>
            <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-[0px] gap-[24px]  ">
                 <SocialContainer />
            </div>
        </motion.div>
    </div>
    
  )
}

export default ContactUsTextSection