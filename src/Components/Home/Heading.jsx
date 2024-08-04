// import { motion } from "framer-motion"

import Paragraph from "../TextUi/Paragraph"
import PrimaryBtn from "../Buttons/PrimaryBtn"
import SecondaryBtn from "../Buttons/SecondaryBtn"
import { motion } from "framer-motion"
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants"
import BigHeadingAnimate from "../TextUi/BigHeadingAnimate"
const Heading = () => {
  const variants = useScrollAnimationVariants(0, 80, 0.5);
  return (
    <motion.div className="md:w-[900px] w-full lg:w-[1018px] text-center mt-[147px] pb-6 "
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants}
    >
      <div className="flex flex-col lg:gap-[32px] gap-[26px]  ">
            <div className="flex flex-col lg:gap-[12px] gap-[6px] "> 
                <span className="text-[24px] uppercase tracking-widest">Bytewise</span>

                  <div className="flex flex-col lg:gap-[24px] gap-[18px] ">
                       <BigHeadingAnimate>Unleashing the Power of Technology</BigHeadingAnimate>
                       <Paragraph >Explore a wide range of cutting-edge technology products, from the latest gadgets to essential accessories. 
                                          Bytewise is committed to bringing you the best in tech, with unbeatable prices and unparalleled customer service. 
                                          Join us and experience the future of shopping today.</Paragraph>
                  </div>
            </div>
            <div className="flex items-center justify-center lg:gap-[44px]   gap-[14px] ">
              <PrimaryBtn  UrlPage="/Product">Products</PrimaryBtn>
             <SecondaryBtn  UrlPage="/About">About Us</SecondaryBtn>
             </div>
        </div>
    </motion.div >
  )
}

export default Heading