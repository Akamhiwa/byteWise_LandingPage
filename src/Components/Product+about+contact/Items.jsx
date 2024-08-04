/* eslint-disable react/prop-types */
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import ImageOverlay from "../overlays/ImageOverlay";
import BigHeading from "../TextUi/BigHeading";
import { motion } from "framer-motion";
const   Items = ({ item }) => {
  const variants = useScrollAnimationVariants(0, 160, 0.77);

  return (
    <motion.div 
        className="xl:h-[600px] md:h-[300px]  h-[200px]  grayscale rounded-[16px] relative w-full"  
        style={{backgroundImage: `url(${item.image})`}}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false }}
         variants={variants}
         whileHover={{scale:1.05}}
         >
          <ImageOverlay />
      <motion.span className="absolute inset-0 flex items-center justify-center" whileHover={{y:-10}} transition={{duration:0.2}}>
        <BigHeading>{item.name}</BigHeading>
      </motion.span>
    </motion.div>
  );
};

export default Items;
