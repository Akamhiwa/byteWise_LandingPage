/* eslint-disable react/prop-types */
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import Paragraph from "../TextUi/Paragraph"
import { Icon } from "@iconify/react/dist/iconify.js"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion";
const Faq = ({faq,isOpen,onClick}) => {
    const variants = useScrollAnimationVariants(0, 80, 0.8);
  return (
    <AnimatePresence>
    <motion.div 
        className={`relative inline-block p-[1px]  rounded-[16px] bg-gradient-to-b ${isOpen ? "h-auto":'lg:h-[83px] h-auto'} from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]`} 
        onClick={onClick}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: false }}
        variants={variants}
        whileHover={{scale:1.01}}
        
        >
        
            <motion.div 
              className={`bg-GradientBG rounded-[16px] lg:px-[32px]  px-[16px] lg:py-[26px] py-[18px] ${isOpen ? "h-auto":'lg:h-[83px] h-auto'} flex flex-col  gap-[12px]   cursor-pointer`}
               >
                    <div className="flex justify-between items-center">  
                            <Paragraph isSemiBold={true}>{faq.question}</Paragraph>
                        <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.5 }}>
                        <Icon icon="tabler:chevron-down" width="24" height="24" />
                        </motion.div>
                    </div>
                    {isOpen &&(
                      <AnimatePresence>
                         <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3 }}>
                              <Paragraph>{faq.response}</Paragraph>
                         </motion.div>
                      </AnimatePresence>
                    )
                    }
            </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Faq