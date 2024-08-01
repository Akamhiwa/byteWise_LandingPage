import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const SectionTitle = ({title,padding,children}) => {
  const variants = useScrollAnimationVariants(0, 60, 0.5);

  return (
    <div className={`${padding}`}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={variants}>
              <MediumHeading>{title}</MediumHeading>
              <Paragraph isCentered={true}>Hear what our customers have to say about their Bytewise experience.</Paragraph>
        </motion.div>
        {children}
        
    </div>
  )
}

export default SectionTitle