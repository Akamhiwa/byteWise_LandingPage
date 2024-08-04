import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const SectionTitle = ({title,padding}) => {
  const variants = useScrollAnimationVariants(0, 60, 0.6);

  return (
    <div className={`${padding} w-full`}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={variants}>
              <MediumHeading>{title}</MediumHeading>
              <Paragraph isCentered={true}>Bytewise is proud to be trusted by leading brands and businesses across various industries.
                 Below are some of the esteemed partners who rely on our exceptional technology and e-commerce services.</Paragraph>
        </motion.div>
    </div>
  )
}

export default SectionTitle