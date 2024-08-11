/* eslint-disable react/prop-types */
import BreadCrumbs from "./BreadCrumbs"
import BigHeading from '../TextUi/BigHeading'
import { motion } from "framer-motion"
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
const PageTitle = ({page}) => {
  const variants = useScrollAnimationVariants(0, 20, 0.8);
  return (
    <motion.div className="absolute inset-0 flex  flex-col justify-center items-center   lg:pt-0 pt-[46px] gap-[6px] z-10"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: false }}
       variants={variants}
    >
        <BreadCrumbs />
        <BigHeading>{page}</BigHeading>
    </motion.div>
  ) 
}

export default PageTitle