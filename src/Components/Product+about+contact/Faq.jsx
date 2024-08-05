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
        className={`relative inline-block p-[1px]   rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]`} 
        onClick={onClick}
        whileInView="visible"
        initial={{opacity:0, height: "83px" }}
        viewport={{ once: false }}
        variants={variants}
        whileHover={{scale:1.01}}
        animate={{ height: isOpen ? "auto" : "83px" }}
        transition={{ duration: 0.8 }}
        exit={{height:"83px"}}
        >
        
            <motion.div 
              className={`bg-GradientBG rounded-[16px] px-[32px] py-[26px]  flex flex-col  gap-[12px]   cursor-pointer`}
              initial={{ height: "83px" }}
              animate={{ height: isOpen ? "auto" : "83px" }}
              transition={{ duration: 0.3 }}
              exit={{height:"83px"}}
               >
                    <div className="flex justify-between items-center">
                        <span className="font-bold">
                            <Paragraph isSemiBold={true}>{faq.question}</Paragraph>
                        </span>
                        <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.5 }}>
                        <Icon icon="tabler:chevron-down" width="24" height="24" />
                        </motion.div>
                    </div>
                    {isOpen &&(
                         <motion.div 
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3 }}>
                              <Paragraph>{faq.response}</Paragraph>
                         </motion.div>
                    )
                    }
            </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Faq