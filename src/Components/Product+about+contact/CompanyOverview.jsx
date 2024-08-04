import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import { motion } from "framer-motion";
/* eslint-disable react/prop-types */
const CompanyOverview = ({imgUrl,flexDirection,children}) => {
  const variants = useScrollAnimationVariants(0, 80, 0.8);
  const variants2 = useScrollAnimationVariants(0, -80, 0.8);

  return (
    <div className="lg:pb-0 pb-14">
        <div 
          className={`flex flex-col ${flexDirection}  items-center lg:items-start lg:h-[500px] h-full w-full  justify-between lg:gap-[100px] gap-[34px]`}
         >
            <motion.div
             className={` flex justify-center flex-col pt-[20px] lg:w-[120%] lg:gap-[2px] gap-[8px] w-full lg:text-left text-center lg:pt-[100px] `}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             variants={variants}
             >
                  {children}
            </motion.div>
            <div className="w-full h-full flex items-center justify-center">
                <motion.img src={imgUrl} className="h-[500px] w-[500px] lg:w-full lg:h-full"  
                initial="hidden"
                 whileInView="visible"
                  viewport={{ once: false }}
                   variants={variants2} />
            </div>
        </div>
    </div>
    
  )
}

export default CompanyOverview      